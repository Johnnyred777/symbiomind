// Firefly field: Canvas 2D, no libraries.
// Phase 0 proof only. Motion here is an ILLUSTRATION (gentle random drift),
// not an equation from the papers. Paper-based update rules arrive in Phase 3.

(function () {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  // One pre-drawn glow sprite, reused for every firefly (much cheaper than
  // drawing a fresh gradient per firefly per frame).
  function makeSprite(colour, glow) {
    const s = document.createElement('canvas');
    s.width = s.height = 64;
    const g = s.getContext('2d');
    const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, colour);
    grad.addColorStop(0.12, colour);
    grad.addColorStop(0.3, glow + 'aa');
    grad.addColorStop(1, glow + '00');
    g.fillStyle = grad;
    g.fillRect(0, 0, 64, 64);
    return s;
  }

  class FireflyField {
    constructor(canvas, opts) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
      this.count = opts.count;
      this.calm = false;
      this.playing = !reduceMotion.matches;
      this.visible = false;
      this.sprite = makeSprite(opts.colour || '#BFE0FF', opts.glow || '#2F7BFF');
      this.onStats = opts.onStats || function () {};
      this.frames = 0; this.statT = performance.now();
      this.resize();
      this.seed();
      new ResizeObserver(() => { this.resize(); if (!this.running()) this.draw(0); }).observe(canvas);
      // Pause when off-screen: no work is done for scenes nobody can see.
      new IntersectionObserver(es => {
        this.visible = es[0].isIntersecting;
        this.kick();
      }, { threshold: 0 }).observe(canvas);
      reduceMotion.addEventListener('change', () => { this.playing = !reduceMotion.matches; this.kick(); });
      this.draw(0);
    }
    resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const r = this.canvas.getBoundingClientRect();
      this.w = r.width; this.h = r.height;
      this.canvas.width = Math.round(r.width * dpr);
      this.canvas.height = Math.round(r.height * dpr);
      this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    seed() {
      this.flies = [];
      for (let i = 0; i < this.count; i++) {
        this.flies.push({
          x: Math.random() * this.w, y: Math.random() * this.h,
          vx: 0, vy: 0,
          phase: Math.random() * Math.PI * 2,
          rate: 0.4 + Math.random() * 0.8, // pulses per second-ish
          size: 10 + Math.random() * 14
        });
      }
    }
    activeCount() { return this.calm ? Math.ceil(this.count / 3) : this.count; }
    running() { return this.playing && this.visible && !reduceMotion.matches; }
    kick() {
      if (this.running() && !this.raf) { this.last = performance.now(); this.raf = requestAnimationFrame(t => this.tick(t)); }
    }
    tick(t) {
      this.raf = null;
      if (!this.running()) return;
      const dt = Math.min((t - this.last) / 1000, 0.05);
      this.last = t;
      this.step(dt, t / 1000);
      this.draw(t / 1000);
      this.frames++;
      if (t - this.statT > 1000) { this.onStats(Math.round(this.frames * 1000 / (t - this.statT))); this.frames = 0; this.statT = t; }
      this.raf = requestAnimationFrame(tt => this.tick(tt));
    }
    step(dt) {
      const speed = this.calm ? 0.4 : 1;
      const n = this.activeCount();
      for (let i = 0; i < n; i++) {
        const f = this.flies[i];
        // Random nudge plus gentle drag: a wandering, unhurried drift.
        f.vx += (Math.random() - 0.5) * 60 * dt; f.vy += (Math.random() - 0.5) * 60 * dt;
        f.vx *= 1 - 0.8 * dt; f.vy *= 1 - 0.8 * dt;
        f.x += f.vx * dt * speed * 10; f.y += f.vy * dt * speed * 10;
        if (f.x < -20) f.x = this.w + 20; else if (f.x > this.w + 20) f.x = -20;
        if (f.y < -20) f.y = this.h + 20; else if (f.y > this.h + 20) f.y = -20;
      }
    }
    draw(time) {
      const c = this.ctx;
      c.clearRect(0, 0, this.w, this.h);
      c.globalCompositeOperation = 'lighter';
      const n = this.activeCount();
      const slow = this.calm ? 0.5 : 1;
      for (let i = 0; i < n; i++) {
        const f = this.flies[i];
        const light = 0.25 + 0.75 * Math.pow(0.5 + 0.5 * Math.sin(f.phase + time * f.rate * slow * 2), 3);
        c.globalAlpha = light;
        const s = f.size * (0.7 + 0.3 * light);
        c.drawImage(this.sprite, f.x - s / 2, f.y - s / 2, s, s);
      }
      c.globalAlpha = 1;
      c.globalCompositeOperation = 'source-over';
    }
    setPlaying(p) { this.playing = p; if (p) this.kick(); }
    setCalm(v) { this.calm = v; if (!this.running()) this.draw(performance.now() / 1000); }
  }

  window.FireflyField = FireflyField;
  window.reduceMotionQuery = reduceMotion;
})();
