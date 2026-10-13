/**
 * Duotek — Editorial Stage Controller
 * Manages sticky split-screen transitions, cross-fades, and scene tracking
 */

export class EditorialController {
  constructor(services, lenisInstance) {
    this.services = services;
    this.lenis = lenisInstance;
    this.currentIndex = 0;

    // DOM references
    this.track = document.querySelector('.stage-track');
    this.photoWrap = document.querySelector('.photo-wrap');
    this.photos = [...document.querySelectorAll('.photo-wrap .photo')];
    this.captionEl = document.querySelector('.photo-caption');
    this.chapters = [...document.querySelectorAll('.chapter')];
    this.progressFill = document.querySelector('.scroll-progress-fill');
    this.dots = [...document.querySelectorAll('.scene-dot')];

    this.init();
  }

  init() {
    this.bindEvents();
    if (this.track && this.photos.length > 0) {
      this.updateActiveState(0, 0);
    }
  }

  clamp(val, min = 0, max = 1) {
    return Math.max(min, Math.min(max, val));
  }

  /**
   * Updates active chapter photo, scale, and captions based on normalized scroll progress
   */
  renderProgress(progress) {
    const p = this.clamp(progress);
    const serviceCount = this.services.length;

    // Determine active chapter based on visibility & position
    let activeIndex = 0;
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    // 1. If at or near the top of the page, unconditionally activate Chapter 0 (Hero)
    if (scrollY <= 95 || p <= 0.01) {
      activeIndex = 0;
    } else if (this.chapters.length > 0) {
      // 2. Measure which chapter has the highest visibility in viewport
      const vHeight = window.innerHeight;
      let maxVisible = -1;

      for (let i = 0; i < this.chapters.length; i++) {
        const rect = this.chapters[i].getBoundingClientRect();
        const visibleTop = Math.max(0, rect.top);
        const visibleBottom = Math.min(vHeight, rect.bottom);
        const visibleH = Math.max(0, visibleBottom - visibleTop);

        // Give Chapter 0 priority when anywhere in the hero zone
        const effectiveWeight = (i === 0 && rect.bottom > vHeight * 0.3) ? visibleH * 1.3 : visibleH;

        if (effectiveWeight > maxVisible) {
          maxVisible = effectiveWeight;
          activeIndex = i;
        }
      }
    } else {
      const stageProgress = p * (serviceCount - 1);
      activeIndex = Math.min(serviceCount - 1, Math.round(stageProgress));
    }

    // Switch photo state with a smooth animated transition
    if (activeIndex !== this.currentIndex) {
      const prevIndex = this.currentIndex;
      this.currentIndex = activeIndex;

      // Clear any pending cleanup timer
      clearTimeout(this._prevTimer);

      this.photos.forEach((img, i) => {
        img.classList.remove('is-previous');
        if (i === activeIndex) {
          img.classList.add('active');
        } else {
          img.classList.remove('active');
          if (i === prevIndex) {
            img.classList.add('is-previous');
          }
        }
      });

      // Once the 700ms cross-fade completes, cleanly remove is-previous
      this._prevTimer = setTimeout(() => {
        this.photos.forEach((img) => {
          img.classList.remove('is-previous');
        });
      }, 700);

      // Update caption with a smooth micro-transition
      const currentService = this.services[activeIndex];
      if (this.captionEl && currentService) {
        this.captionEl.style.opacity = '0';
        this.captionEl.style.transform = 'translateY(6px)';
        clearTimeout(this._captionTimer);
        this._captionTimer = setTimeout(() => {
          this.captionEl.textContent = currentService.caption;
          this.captionEl.style.opacity = '1';
          this.captionEl.style.transform = 'translateY(0)';
        }, 160);
      }

      this.updateDots(activeIndex);
    }

    // Update progress bar
    if (this.progressFill) {
      this.progressFill.style.width = `${(p * 100).toFixed(1)}%`;
    }
  }

  updateDots(index) {
    this.dots.forEach((dot, i) => {
      dot.classList.toggle('is-active', i === index);
    });
  }

  updateActiveState(index, progress = 0) {
    this.currentIndex = index;
    clearTimeout(this._prevTimer);
    clearTimeout(this._captionTimer);

    const currentService = this.services[index];
    if (this.captionEl && currentService) {
      this.captionEl.textContent = currentService.caption;
      this.captionEl.style.opacity = '1';
      this.captionEl.style.transform = 'translateY(0)';
    }
    this.photos.forEach((img, i) => {
      img.classList.remove('is-previous');
      img.classList.toggle('active', i === index);
      // Clear any manual inline opacity so CSS transitions control it cleanly
      img.style.opacity = '';
      img.style.transform = '';
    });
    this.updateDots(index);
  }

  jumpToChapter(index) {
    if (!this.track) return;
    const count = this.services.length - 1;
    const targetRatio = index / count;
    const trackRect = this.track.getBoundingClientRect();
    const scrollY = window.scrollY || window.pageYOffset;
    const totalDistance = this.track.offsetHeight - window.innerHeight;
    const targetY = trackRect.top + scrollY + Math.max(0, totalDistance * targetRatio);

    if (this.lenis) {
      this.lenis.scrollTo(targetY, { duration: 1.25 });
    } else {
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }
  }

  bindEvents() {
    // Jump navigation buttons
    document.addEventListener('click', (e) => {
      const jumpBtn = e.target.closest('[data-jump]');
      if (jumpBtn) {
        e.preventDefault();
        const targetIndex = Number(jumpBtn.dataset.jump);
        if (!isNaN(targetIndex)) {
          this.jumpToChapter(targetIndex);
        }
      }

      const topBtn = e.target.closest('[data-top]');
      if (topBtn) {
        e.preventDefault();
        if (this.lenis) {
          this.lenis.scrollTo(0, { duration: 1.2 });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    });
  }
}
