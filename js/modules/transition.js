/**
 * Duotek — Initial Brand Loader Controller
 * Runs a swift, elegant entrance reveal on first cold visit of a session,
 * then stays completely out of the way for 100% native, instant navigation.
 */

export class PageTransition {
  constructor() {
    this.curtain = document.getElementById('page-curtain');
    this.isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.init();
  }

  init() {
    if (!this.curtain) return;

    // Respect reduced motion
    if (this.isReduced) {
      this.dismissImmediate();
      return;
    }

    // Safety: ensure pageshow restores normal state if restored from bfcache
    window.addEventListener('pageshow', () => {
      this.dismissImmediate();
    });

    const hasSeenLoader = sessionStorage.getItem('duotek_loader_seen');

    if (hasSeenLoader) {
      // Already seen in this session -> dismiss immediately
      this.dismissImmediate();
    } else {
      // First visit in session -> Mark seen and play initial brand intro
      sessionStorage.setItem('duotek_loader_seen', 'true');
      this.playIntro();
    }
  }

  dismissImmediate() {
    if (!this.curtain) return;
    this.curtain.style.display = 'none';
    this.curtain.style.pointerEvents = 'none';
    this.curtain.style.visibility = 'hidden';
  }

  /**
   * First visit brand intro with progress fill
   */
  playIntro() {
    if (!this.curtain) return;

    if (!window.gsap) {
      setTimeout(() => this.dismissImmediate(), 400);
      return;
    }

    const bar = this.curtain.querySelector('.curtain-bar');
    const content = this.curtain.querySelector('.curtain-content');

    const tl = window.gsap.timeline({
      onComplete: () => {
        this.dismissImmediate();
      }
    });

    // 1. Sleek progress fill
    if (bar) {
      tl.to(bar, {
        x: '0%',
        duration: 0.45,
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
      duration: 0.52,
      ease: 'power3.inOut'
    }, '-=0.06');

    // 4. Smooth cascade of hero elements into view
    tl.fromTo(
      '.site-header',
      { y: -16, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.45, ease: 'power2.out', clearProps: 'transform' },
      '-=0.38'
    );

    const heroElements = document.querySelectorAll(
      '.hero-badge, #chapter-0 h1, #chapter-0 p, #chapter-0 .chapter-actions, .about-hero h1, .catalog-header h1, .contact-hero h1'
    );
    if (heroElements.length > 0) {
      tl.fromTo(
        heroElements,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.48, stagger: 0.05, ease: 'power2.out' },
        '-=0.3'
      );
    }
  }
}
