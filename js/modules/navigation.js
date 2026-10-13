/**
 * Duotek — Mobile Navigation Drawer Controller
 * Handles mobile hamburger menu toggle, drawer open/close, focus, and swipe-friendly UX
 */

export class NavigationController {
  constructor() {
    this.toggleBtn = document.getElementById('mobile-menu-toggle');
    this.drawer = document.getElementById('mobile-nav-drawer');
    this.closeBtn = document.getElementById('mobile-nav-close');
    this.backdrop = this.drawer ? this.drawer.querySelector('.mobile-nav-backdrop') : null;
    this.navLinks = this.drawer ? [...this.drawer.querySelectorAll('.mobile-nav-links a')] : [];
    this.isOpen = false;

    this.init();
  }

  init() {
    if (!this.toggleBtn || !this.drawer) return;

    this.toggleBtn.addEventListener('click', () => {
      this.toggle();
    });

    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => {
        this.close();
      });
    }

    if (this.backdrop) {
      this.backdrop.addEventListener('click', () => {
        this.close();
      });
    }

    this.navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        this.close();
      });
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });

    // Close automatically if viewport resizes to desktop width
    window.addEventListener('resize', () => {
      if (window.innerWidth > 992 && this.isOpen) {
        this.close();
      }
    });
  }

  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    this.isOpen = true;
    this.drawer.classList.add('is-open');
    this.drawer.setAttribute('aria-hidden', 'false');
    this.toggleBtn.setAttribute('aria-expanded', 'true');
    this.toggleBtn.classList.add('is-active');
    document.documentElement.classList.add('modal-open');
    document.body.classList.add('modal-open');
    document.body.style.overflow = 'hidden';

    if (window.lenisInstance && typeof window.lenisInstance.stop === 'function') {
      window.lenisInstance.stop();
    }
  }

  close() {
    this.isOpen = false;
    this.drawer.classList.remove('is-open');
    this.drawer.setAttribute('aria-hidden', 'true');
    this.toggleBtn.setAttribute('aria-expanded', 'false');
    this.toggleBtn.classList.remove('is-active');
    document.documentElement.classList.remove('modal-open');
    document.body.classList.remove('modal-open');
    document.body.style.overflow = '';

    if (window.lenisInstance && typeof window.lenisInstance.start === 'function') {
      window.lenisInstance.start();
    }
  }
}
