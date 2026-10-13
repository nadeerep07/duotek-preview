/**
 * Duotek — Scroll & Animation Orchestrator
 * Integrates Lenis smooth scrolling with GSAP ScrollTrigger
 */

export class ScrollManager {
  constructor(editorialController) {
    this.editorial = editorialController;
    this.lenis = null;
    this.isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.init();
  }

  init() {
    this.setupLenis();
    this.setupScrollTriggers();
    this.setupBottomScrollUp();
  }

  setupBottomScrollUp() {
    const upBtn = document.getElementById('bottom-scroll-up-btn');
    if (!upBtn) return;

    let timer = null;
    let isVisible = false;

    const checkBottom = () => {
      const scrollPos = window.innerHeight + window.scrollY;
      const totalHeight = document.documentElement.scrollHeight;
      // Reached near the bottom of document
      const isAtBottom = scrollPos >= totalHeight - 250;

      if (isAtBottom) {
        if (!isVisible && !timer) {
          // Show after a few seconds delay (1.5s) in the middle with opacity
          timer = setTimeout(() => {
            upBtn.classList.add('is-active');
            isVisible = true;
            timer = null;
          }, 1500);
        }
      } else {
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
        if (isVisible) {
          upBtn.classList.remove('is-active');
          isVisible = false;
        }
      }
    };

    window.addEventListener('scroll', checkBottom, { passive: true });
    if (this.lenis) {
      this.lenis.on('scroll', checkBottom);
    }
    checkBottom();
  }

  setupLenis() {
    if (this.isReduced || typeof window.Lenis === 'undefined') return;

    try {
      this.lenis = new window.Lenis({
        lerp: 0.09,
        smoothWheel: true,
        wheelMultiplier: 0.95
      });
      window.lenisInstance = this.lenis;

      const syncHeroOnTop = (scrollY) => {
        if (scrollY <= 95 && this.editorial && this.editorial.currentIndex !== 0) {
          this.editorial.updateActiveState(0, 0);
        }
      };

      if (window.gsap && window.ScrollTrigger) {
        this.lenis.on('scroll', (e) => {
          window.ScrollTrigger.update();
          const y = typeof e.scroll === 'number' ? e.scroll : (window.pageYOffset || document.documentElement.scrollTop);
          syncHeroOnTop(y);
        });
        window.gsap.ticker.add((time) => {
          this.lenis.raf(time * 1000);
        });
        window.gsap.ticker.lagSmoothing(0);
      } else {
        const raf = (time) => {
          this.lenis.raf(time);
          requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);
      }

      window.addEventListener('scroll', () => {
        const y = window.pageYOffset || document.documentElement.scrollTop;
        syncHeroOnTop(y);
      }, { passive: true });
    } catch (err) {
      console.warn('Smooth scroll initialization fallback to native:', err);
    }
  }

  setupScrollTriggers() {
    const track = document.querySelector('.stage-track');
    if (!track) return;

    if (window.gsap && window.ScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger);

      // Kill previous instances if any
      window.ScrollTrigger.getAll().forEach(t => t.kill());

      // Main track scroll trigger
      window.ScrollTrigger.create({
        trigger: track,
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (self) => {
          this.editorial.renderProgress(self.progress);
        },
        onLeaveBack: () => {
          this.editorial.updateActiveState(0, 0);
        }
      });

      // Chapter text reveal animation
      if (!this.isReduced) {
        const chapters = document.querySelectorAll('.chapter');
        chapters.forEach((chapter) => {
          const textElements = chapter.querySelectorAll('.eyebrow, h1, h2, p, .cta-link');
          if (textElements.length > 0) {
            window.gsap.fromTo(
              textElements,
              { y: 40, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                stagger: 0.08,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: chapter,
                  start: 'top 85%',
                  end: 'top 35%',
                  scrub: 1
                }
              }
            );
          }
        });
      }

      window.ScrollTrigger.refresh();
    } else {
      // Fallback manual scroll computation
      let frameRequested = false;
      const onScroll = () => {
        if (frameRequested) return;
        frameRequested = true;
        requestAnimationFrame(() => {
          frameRequested = false;
          const rect = track.getBoundingClientRect();
          const distance = track.offsetHeight - window.innerHeight;
          const progress = Math.max(0, Math.min(1, -rect.top / Math.max(1, distance)));
          this.editorial.renderProgress(progress);
        });
      };

      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }
  }
}
