/* ═══════════════════════════════════════════════════════════
   JCL STAGING — LUXURY INTERACTIONS v3.0
   2026 | Every interaction should feel cinematic.
══════════════════════════════════════════════════════════ */
'use strict';

const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const on = (el, ev, fn, opts) => el?.addEventListener(ev, fn, opts);

/* ─── PRELOADER ─────────────────────────────────────────── */
class Preloader {
  constructor() {
    this.el = $('.preloader');
    if (!this.el) { document.body.classList.remove('is-locked'); return; }
    this.run();
  }
  run() {
    document.body.classList.add('is-locked');
    const logo    = $('.preloader__logo', this.el);
    const line    = $('.preloader__line', this.el);
    const tagline = $('.preloader__tagline', this.el);
    setTimeout(() => logo?.classList.add('is-visible'), 250);
    setTimeout(() => line?.classList.add('is-expanded'), 800);
    setTimeout(() => tagline?.classList.add('is-visible'), 1350);
    setTimeout(() => {
      this.el.classList.add('is-hidden');
      document.body.classList.remove('is-locked');
      setTimeout(() => this.el.remove(), 1000);
    }, 2900);
  }
}

/* ─── CURSOR ─────────────────────────────────────────────── */
class Cursor {
  constructor() {
    this.wrap = $('.cursor');
    this.dot  = $('.cursor-dot');
    this.ring = $('.cursor-ring');
    if (!this.dot || !this.ring || window.matchMedia('(pointer: coarse)').matches) return;
    this.mx = -200; this.my = -200;
    this.rx = -200; this.ry = -200;
    this.init();
  }
  init() {
    on(document, 'mousemove', e => {
      this.mx = e.clientX; this.my = e.clientY;
      this.dot.style.left = e.clientX + 'px';
      this.dot.style.top  = e.clientY + 'px';
    });
    this.tick();
    $$('a, button, [data-hover], .portfolio-item, .collection__card, .instagram__item, .before-after, .faq-question').forEach(el => {
      on(el, 'mouseenter', () => { this.dot.classList.add('cursor-dot--active'); this.ring.classList.add('cursor-ring--active'); });
      on(el, 'mouseleave', () => { this.dot.classList.remove('cursor-dot--active'); this.ring.classList.remove('cursor-ring--active'); });
    });
  }
  tick() {
    const lerp = (a, b, t) => a + (b - a) * t;
    const loop = () => {
      this.rx = lerp(this.rx, this.mx, 0.1);
      this.ry = lerp(this.ry, this.my, 0.1);
      this.ring.style.left = this.rx + 'px';
      this.ring.style.top  = this.ry + 'px';
      requestAnimationFrame(loop);
    };
    loop();
  }
}

/* ─── NAVIGATION ─────────────────────────────────────────── */
class Nav {
  constructor() {
    this.nav    = $('.nav');
    this.toggle = $('.nav__toggle');
    this.mobile = $('.nav-mobile');
    this.open   = false;
    if (!this.nav) return;
    this.init();
  }
  init() {
    on(window, 'scroll', () => {
      this.nav.classList.toggle('nav--scrolled', window.scrollY > 50);
    }, { passive: true });
    on(this.toggle, 'click', () => this.toggleMenu());
    $$('.nav-mobile__link').forEach(l => on(l, 'click', () => this.closeMenu()));
    on(document, 'keydown', e => { if (e.key === 'Escape' && this.open) this.closeMenu(); });
  }
  toggleMenu() { this.open ? this.closeMenu() : this.openMenu(); }
  openMenu() {
    this.open = true;
    this.mobile?.classList.add('is-open');
    this.toggle?.classList.add('nav__toggle--open');
    document.body.classList.add('is-locked');
  }
  closeMenu() {
    this.open = false;
    this.mobile?.classList.remove('is-open');
    this.toggle?.classList.remove('nav__toggle--open');
    document.body.classList.remove('is-locked');
  }
}

/* ─── SCROLL PROGRESS ────────────────────────────────────── */
class ScrollProgress {
  constructor() {
    this.bar = $('.scroll-progress');
    if (!this.bar) return;
    on(window, 'scroll', () => {
      const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      this.bar.style.width = pct + '%';
    }, { passive: true });
  }
}

/* ─── REVEAL ON SCROLL ───────────────────────────────────── */
class Reveal {
  constructor() {
    this.els = $$('.reveal, .reveal--left, .reveal--right, .reveal--scale');
    if (!this.els.length) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    this.els.forEach(el => obs.observe(el));
  }
}

/* ─── HERO PARALLAX ──────────────────────────────────────── */
class HeroParallax {
  constructor() {
    this.hero = $('.hero');
    this.img  = $('.hero__image');
    if (!this.hero || !this.img || window.matchMedia('(pointer: coarse)').matches) return;
    this.init();
  }
  init() {
    on(this.hero, 'mousemove', e => {
      const r = this.hero.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - 0.5) * -12;
      const y = ((e.clientY - r.top)  / r.height - 0.5) * -8;
      this.img.style.transform = `scale(1.09) translate(${x}px, ${y}px)`;
    });
    on(this.hero, 'mouseleave', () => { this.img.style.transform = ''; });
    on(window, 'scroll', () => {
      if (window.scrollY < window.innerHeight) {
        this.hero.style.transform = `translateY(${window.scrollY * 0.28}px)`;
      }
    }, { passive: true });
  }
}

/* ─── BEFORE/AFTER SLIDER ────────────────────────────────── */
class BeforeAfter {
  constructor(el) {
    this.el     = el;
    this.after  = $('.before-after__after', el);
    this.handle = $('.before-after__handle', el);
    if (!this.after) return;
    this.drag = false;
    this.set(50);
    this.bind();
  }
  set(pct) {
    pct = Math.max(1, Math.min(99, pct));
    this.after.style.clipPath       = `inset(0 ${100 - pct}% 0 0)`;
    this.handle.style.left          = pct + '%';
  }
  pos(e) {
    const r = this.el.getBoundingClientRect();
    const x = (e.touches ? e.touches[0].clientX : e.clientX);
    return Math.max(0, Math.min(100, ((x - r.left) / r.width) * 100));
  }
  bind() {
    on(this.el, 'mousedown', () => { this.drag = true; });
    on(document, 'mousemove', e => { if (this.drag) this.set(this.pos(e)); });
    on(document, 'mouseup',   () => { this.drag = false; });
    on(this.el, 'touchstart', () => { this.drag = true; }, { passive: true });
    on(document, 'touchmove', e => { if (this.drag) this.set(this.pos(e)); }, { passive: true });
    on(document, 'touchend',  () => { this.drag = false; });
  }
}

/* ─── TRANSFORMATION GALLERY ─────────────────────────────── */
class TransformGallery {
  constructor() {
    this.slides = $$('.transformation__slide');
    this.dots   = $$('.transformation__dot');
    this.cur    = 0;
    $$('.before-after').forEach(el => new BeforeAfter(el));
    this.dots.forEach((d, i) => on(d, 'click', () => this.go(i)));
    if (this.slides.length) this.go(0);
  }
  go(i) {
    this.slides[this.cur]?.classList.remove('is-active');
    this.dots[this.cur]?.classList.remove('is-active');
    this.cur = i;
    this.slides[i]?.classList.add('is-active');
    this.dots[i]?.classList.add('is-active');
  }
}

/* ─── COUNTER ────────────────────────────────────────────── */
class Counter {
  constructor() {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { this.run(e.target); obs.unobserve(e.target); }
      });
    }, { threshold: 0.6 });
    $$('[data-count]').forEach(el => obs.observe(el));
  }
  run(el) {
    const target   = parseFloat(el.dataset.count);
    const suffix   = el.dataset.suffix || '';
    const prefix   = el.dataset.prefix || '';
    const decimal  = target % 1 !== 0;
    const dur      = 2200;
    const t0       = performance.now();
    const tick = now => {
      const p = Math.min((now - t0) / dur, 1);
      const e = 1 - Math.pow(1 - p, 4);
      el.textContent = prefix + (decimal ? (target * e).toFixed(1) : Math.floor(target * e)) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
}

/* ─── PROCESS TIMELINE ───────────────────────────────────── */
class ProcessTimeline {
  constructor() {
    this.steps    = $$('.process__step');
    this.lineFill = $('.process__track-fill');
    if (!this.steps.length) return;
    on(window, 'scroll', () => this.update(), { passive: true });
    this.update();
  }
  update() {
    const mid = window.scrollY + window.innerHeight * 0.65;
    let active = 0;
    this.steps.forEach(s => {
      const top = s.getBoundingClientRect().top + window.scrollY;
      const on  = top < mid;
      s.classList.toggle('is-active', on);
      if (on) active++;
    });
    if (this.lineFill) this.lineFill.style.height = `${(active / this.steps.length) * 100}%`;
  }
}

/* ─── FAQ ACCORDION ──────────────────────────────────────── */
class FAQ {
  constructor() {
    $$('.faq-question').forEach(btn => {
      on(btn, 'click', () => {
        const item    = btn.closest('.faq-item');
        const wasOpen = item.classList.contains('is-open');
        $$('.faq-item').forEach(i => i.classList.remove('is-open'));
        if (!wasOpen) item.classList.add('is-open');
      });
    });
  }
}

/* ─── PORTFOLIO FILTER ───────────────────────────────────── */
class PortfolioFilter {
  constructor() {
    this.filters = $$('.portfolio-filter');
    this.items   = $$('.portfolio-item');
    if (!this.filters.length) return;
    this.filters.forEach(f => on(f, 'click', () => {
      this.filters.forEach(x => x.classList.remove('is-active'));
      f.classList.add('is-active');
      const cat = f.dataset.filter;
      this.items.forEach(item => {
        const show = cat === 'all' || (item.dataset.cat || '').includes(cat);
        item.style.opacity        = show ? '1' : '0.2';
        item.style.pointerEvents  = show ? '' : 'none';
        item.style.transform      = show ? '' : 'scale(0.98)';
      });
    }));
  }
}

/* ─── MULTI-STEP FORM ────────────────────────────────────── */
class StepForm {
  constructor() {
    this.form   = $('.consultation-form');
    if (!this.form) return;
    this.steps  = $$('.form-step', this.form);
    this.bars   = $$('.form-progress__bar', this.form);
    this.cur    = 0;
    this.show(0);
    on(this.form, 'click', e => {
      const opt  = e.target.closest('.form-option');
      if (opt) {
        $$('.form-option', opt.closest('.form-options')).forEach(o => o.classList.remove('is-selected'));
        opt.classList.add('is-selected');
      }
      if (e.target.closest('[data-next]')) this.next();
      if (e.target.closest('[data-prev]')) this.prev();
    });
  }
  show(i) {
    this.steps.forEach((s, idx) => {
      s.classList.toggle('is-active', idx === i);
      this.bars[idx]?.classList.toggle('is-done', idx < i);
    });
    this.form.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
  next() { if (this.cur < this.steps.length - 1) this.show(++this.cur); }
  prev() { if (this.cur > 0) this.show(--this.cur); }
}

/* ─── OLIVIA AI CONCIERGE ────────────────────────────────── */
class Olivia {
  constructor() {
    this.fab    = $('.concierge-fab');
    this.panel  = $('.concierge-panel');
    this.close  = $('.concierge-panel__close');
    this.msgs   = $('.concierge-msgs');
    this.input  = $('.concierge-input');
    this.send   = $('.concierge-send');
    this.suggs  = $('.concierge-suggestions');
    if (!this.fab || !this.panel) return;
    this.history = [];
    this.bind();
  }
  bind() {
    on(this.fab,   'click', () => this.toggle());
    on(this.close, 'click', () => this.hide());
    on(this.send,  'click', () => this.submit());
    on(this.input, 'keypress', e => { if (e.key === 'Enter') this.submit(); });
    on(this.suggs, 'click', e => {
      const btn = e.target.closest('.concierge-suggestion');
      if (btn) { this.input.value = btn.textContent; this.submit(); }
    });
  }
  toggle() { this.panel.classList.contains('is-open') ? this.hide() : this.show(); }
  show()   { this.panel.classList.add('is-open'); this.input?.focus(); }
  hide()   { this.panel.classList.remove('is-open'); }
  submit() {
    const txt = this.input.value.trim();
    if (!txt) return;
    this.addMsg(txt, 'user');
    this.input.value = '';
    this.history.push(txt);
    this.typing();
    setTimeout(() => {
      this.clearTyping();
      this.addMsg(this.reply(txt), 'ai');
    }, 900 + Math.random() * 800);
  }
  addMsg(text, role) {
    const d = document.createElement('div');
    d.className = `msg msg--${role}`;
    if (role === 'ai') {
      const av = $('.concierge-panel__avatar')?.cloneNode();
      if (av) { av.className = 'msg__av'; d.appendChild(av); }
    }
    const b = document.createElement('div');
    b.className = 'msg__bubble';
    b.textContent = text;
    d.appendChild(b);
    this.msgs.appendChild(d);
    this.msgs.scrollTop = this.msgs.scrollHeight;
  }
  typing() {
    this._typingEl = document.createElement('div');
    this._typingEl.className = 'msg msg--ai';
    const av = $('.concierge-panel__avatar')?.cloneNode();
    if (av) { av.className = 'msg__av'; this._typingEl.appendChild(av); }
    const dots = document.createElement('div');
    dots.className = 'typing-dots';
    dots.innerHTML = '<span></span><span></span><span></span>';
    this._typingEl.appendChild(dots);
    this.msgs.appendChild(this._typingEl);
    this.msgs.scrollTop = this.msgs.scrollHeight;
  }
  clearTyping() { this._typingEl?.remove(); }
  reply(input) {
    const q = input.toLowerCase();
    if (/price|cost|rate|how much/.test(q)) return "Our staging investment varies by property size and scope. Most clients find that staging returns far more than the cost — often in the form of faster sales and higher offers. Tell me about your property and I can paint a clearer picture.";
    if (/vacant|empty|unfurnished/.test(q)) return "Vacant properties are our specialty. We bring in curated furnishings, art, and lighting that create the emotional experience buyers need to fall in love. How large is the space you're looking to stage?";
    if (/occupied|living|furnished/.test(q)) return "Occupied staging is a beautiful art — we work with what's already there, editing, elevating, and adding curated pieces. Most clients are amazed at how different their home looks. Which rooms are you most focused on?";
    if (/time|how long|quick|fast|urgent/.test(q)) return "Our typical timeline from consultation to installation is 5–10 days. For urgent listings, we've turned projects around in as little as 48 hours. When are you hoping to list?";
    if (/book|consult|appoint|schedule|meet/.test(q)) return "I'd love to arrange that for you. We offer complimentary 30-minute discovery calls where we learn about your property and goals. Would morning or afternoon work better for you?";
    if (/new york|manhattan|brooklyn|nj|connecticut|jersey|tri.state/.test(q)) return "We serve the entire Tri-State area — Manhattan, Brooklyn, Queens, The Hamptons, New Jersey, and Connecticut. Wherever your property is, we'll be there.";
    if (/portfolio|work|example|project|see/.test(q)) return "Our portfolio features some extraordinary transformations — intimate condos, sprawling estates, luxury townhomes. I'd love to find the projects most similar to yours. What type of home is it?";
    if (/builder|model home|development|new construction/.test(q)) return "We work closely with many of the region's finest builders and developers. Model home staging is one of our signature services — we understand construction timelines and deliver results that sell communities. What's your project?";
    if (/hello|hi|hey|good morning|good afternoon/.test(q)) return "What a pleasure. Tell me — are you preparing a home for sale, looking to elevate an occupied space, or something else entirely?";
    if (/interior|design|styling/.test(q)) return "Interior styling is really at the heart of everything we do. Whether it's pre-sale staging or pure lifestyle design, our eye for space, light, and material is what sets JCL apart. What are you envisioning?";
    if (/luxury|high.end|upscale/.test(q)) return "Luxury is in our DNA. Every project we take on, regardless of price point, receives the same level of care, curation, and intention. What kind of property are we talking about?";
    return "Every home we touch has its own story — and we love learning it. Tell me more about your property and what you're hoping to achieve. The more I understand, the better I can guide you.";
  }
}

/* ─── STICKY CTA ─────────────────────────────────────────── */
class StickyCTA {
  constructor() {
    this.el = $('.sticky-cta');
    if (!this.el) return;
    on(window, 'scroll', () => {
      this.el.classList.toggle('is-visible', window.scrollY > 700);
    }, { passive: true });
  }
}

/* ─── PAGE TRANSITION ────────────────────────────────────── */
class PageTransition {
  constructor() {
    this.overlay = $('.page-transition');
    if (!this.overlay) return;
    $$('a[href]').forEach(a => {
      const href = a.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('mailto') || href.startsWith('tel') || /^https?/.test(href)) return;
      on(a, 'click', e => {
        e.preventDefault();
        this.overlay.classList.add('is-active');
        setTimeout(() => { window.location.href = href; }, 520);
      });
    });
  }
}

/* ─── SEARCH ─────────────────────────────────────────────── */
class Search {
  constructor() {
    this.overlay = $('.search-overlay');
    this.field   = $('.search-field');
    if (!this.overlay) return;
    $$('[data-search]').forEach(el => on(el, 'click', () => this.open()));
    on($('[data-search-close]'), 'click', () => this.close());
    on(document, 'keydown', e => { if (e.key === 'Escape') this.close(); });
  }
  open()  { this.overlay.classList.add('is-open'); this.field?.focus(); }
  close() { this.overlay.classList.remove('is-open'); }
}

/* ─── SMOOTH ANCHOR SCROLL ───────────────────────────────── */
function anchorScroll() {
  $$('a[href^="#"]').forEach(a => {
    on(a, 'click', e => {
      const target = $(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });
}

/* ─── INSTAGRAM STAGGER ──────────────────────────────────── */
function instagramStagger() {
  const items = $$('.instagram__item');
  const obs   = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => { e.target.style.opacity = '1'; e.target.style.transform = ''; }, i * 55);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  items.forEach((el, i) => {
    el.style.opacity    = '0';
    el.style.transform  = 'translateY(18px)';
    el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
    obs.observe(el);
  });
}

/* ─── DARK MODE ──────────────────────────────────────────── */
function initTheme() {
  const saved = localStorage.getItem('jcl-theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  const btn = $('.theme-btn');
  on(btn, 'click', () => {
    const cur  = document.documentElement.getAttribute('data-theme');
    const next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('jcl-theme', next);
  });
}

/* ─── BOOT ───────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  new Preloader();
  new Cursor();
  new Nav();
  new ScrollProgress();
  new Reveal();
  new HeroParallax();
  new TransformGallery();
  new Counter();
  new ProcessTimeline();
  new FAQ();
  new PortfolioFilter();
  new StepForm();
  new Olivia();
  new StickyCTA();
  new PageTransition();
  new Search();
  anchorScroll();
  instagramStagger();
});
