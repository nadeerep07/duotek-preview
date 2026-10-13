/**
 * Duotek — Initial Brand Loader Controller
 * Runs a swift, elegant entrance reveal on page load / link paste,
 * then cleanly dismisses to unveil the hero section.
 */

export class PageTransition {
  constructor() {
    this.curtain = document.getElementById('page-curtain');
    this.isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.init();
  }

  init() {
    if (!this.curtain) return;

    // Respect reduced motion or skip-curtain class
    if (this.isReduced || document.documentElement.classList.contains('skip-curtain')) {
      this.dismissImmediate();
      return;
    }

    // Safety: ensure pageshow dismisses if restored from browser bfcache
    window.addEventListener('pageshow', (event) => {
      if (event.persisted) {
        this.dismissImmediate();
      }
    });

    // Detect navigation type (reload vs back_forward vs navigate)
    const navEntries = (window.performance && window.performance.getEntriesByType)
      ? window.performance.getEntriesByType('navigation')
      : [];
    const navType = navEntries.length > 0
      ? navEntries[0].type
      : (window.performance && window.performance.navigation && window.performance.navigation.type === 1 ? 'reload' : 'navigate');

    const isReload = navType === 'reload';
    const isBackForward = navType === 'back_forward';

    // Check if the user navigated back to Home from another page within the site
    let isInternalNav = false;
    if (document.referrer) {
      try {
        const refUrl = new URL(document.referrer, window.location.origin);
        if (refUrl.origin === window.location.origin) {
          isInternalNav = true;
        }
      } catch (e) {
        isInternalNav = false;
      }
    }

    // Skip loader immediately when navigating back to home internally or via history back/forward
    if (!isReload && (isInternalNav || isBackForward)) {
      this.dismissImmediate();
      return;
    }

    // Only show loading on refresh or direct entrance/link paste
    this.playIntro();
  }

  dismissImmediate() {
    if (!this.curtain) return;
    this.curtain.style.display = 'none';
    this.curtain.style.pointerEvents = 'none';
    this.curtain.style.visibility = 'hidden';
  }

  /**
   * Brand intro reveal with progress fill and smooth curtain lift
   */
  playIntro() {
    if (!this.curtain) return;

    // Fallback timer: ensure page is never stuck if an external script delays
    const fallbackTimer = setTimeout(() => {
      this.dismissImmediate();
    }, 1500);

    const runAnimation = () => {
      if (!window.gsap) {
        setTimeout(() => this.dismissImmediate(), 400);
        return;
      }

      clearTimeout(fallbackTimer);

      const bar = this.curtain.querySelector('.curtain-bar');
      const content = this.curtain.querySelector('.curtain-content');

      // Ensure curtain is visible and positioned
      window.gsap.set(this.curtain, {
        display: 'flex',
        visibility: 'visible',
        yPercent: 0,
        opacity: 1
      });

      if (bar) {
        window.gsap.set(bar, { x: '-100%' });
      }

      if (content) {
        window.gsap.set(content, { opacity: 1, scale: 1 });
      }

      const tl = window.gsap.timeline({
        onComplete: () => {
          this.dismissImmediate();
        }
      });

      // 1. Sleek progress fill
      if (bar) {
        tl.to(bar, {
          x: '0%',
          duration: 0.48,
          ease: 'power2.inOut'
        });
      }

      // 2. Micro-fade of brand mark
      if (content) {
        tl.to(content, {
          opacity: 0,
          scale: 0.96,
          duration: 0.18,
          ease: 'power2.in'
        }, '+=0.04');
      }

      // 3. Editorial curtain lifts up cleanly
      tl.to(this.curtain, {
        yPercent: -100,
        duration: 0.54,
        ease: 'power3.inOut'
      }, '-=0.06');

      // 4. Smooth cascade of site header and hero elements into view
      tl.fromTo(
        '.site-header',
        { y: -16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45, ease: 'power2.out', clearProps: 'transform' },
        '-=0.38'
      );

      const heroElements = document.querySelectorAll(
        '.hero-badge, #chapter-0 h1, #chapter-0 p, #chapter-0 .chapter-actions, .page-hero-eyebrow, .page-hero h1, .page-hero p, .page-breadcrumb'
      );
      if (heroElements.length > 0) {
        tl.fromTo(
          heroElements,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.48, stagger: 0.05, ease: 'power2.out' },
          '-=0.3'
        );
      }
    };

    if (window.gsap) {
      runAnimation();
    } else {
      window.addEventListener('load', runAnimation, { once: true });
    }
  }
}
