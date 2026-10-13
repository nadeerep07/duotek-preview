/**
 * Duotek — Contact Modal & Form Submission Controller
 * Accessible dialog and in-page inquiry handler with Web3Forms API integration
 */

const WEB3FORMS_KEY = 'c4aa15c7-6c6f-4710-814a-abb81bd245cd';

export class ContactModal {
  constructor() {
    this.modal = document.getElementById('contact-modal');
    this.closeBtn = this.modal?.querySelector('.contact-close-btn');
    this.backdrop = this.modal?.querySelector('.contact-backdrop');
    this.modalForm = this.modal?.querySelector('.contact-form');
    this.pageForm = document.getElementById('contact-page-form') || document.querySelector('.contact-form-panel .contact-form');
    this.init();
  }

  init() {
    // Trigger buttons for modal
    document.addEventListener('click', (e) => {
      const openTrigger = e.target.closest('[data-open-contact]');
      if (openTrigger) {
        e.preventDefault();
        const servicePrefill = openTrigger.dataset.service || '';
        this.open(servicePrefill);
      }
    });

    this.closeBtn?.addEventListener('click', () => this.close());
    this.backdrop?.addEventListener('click', () => this.close());

    // ESC key closes modal
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal?.classList.contains('is-open')) {
        this.close();
      }
    });

    // Wire up modal form submission
    if (this.modalForm) {
      this.attachFormSubmit(this.modalForm, true);
    }

    // Wire up in-page contact form submission if present
    if (this.pageForm && this.pageForm !== this.modalForm) {
      this.attachFormSubmit(this.pageForm, false);
    }
  }

  attachFormSubmit(form, isModal = false) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('.form-submit-btn');
      const originalText = submitBtn ? submitBtn.innerHTML : 'Submit';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Sending inquiry...';
      }

      try {
        const formData = new FormData(form);
        if (!formData.get('access_key')) {
          formData.append('access_key', WEB3FORMS_KEY);
        }
        if (!formData.get('subject')) {
          formData.append('subject', isModal ? 'New Quick Inquiry — Duotek Website Modal' : 'New Project Scope Inquiry — Duotek Contact Page');
        }
        if (!formData.get('from_name')) {
          formData.append('from_name', 'Duotek UAE Website');
        }

        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        const data = await response.json();

        if (response.ok && data.success) {
          if (submitBtn) {
            submitBtn.innerHTML = 'Thank you! Message received <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;margin-left:6px;"><path d="M20 6L9 17l-5-5"/></svg>';
            submitBtn.style.background = '#27ae60';
          }

          setTimeout(() => {
            form.reset();
            if (isModal) {
              this.close();
            }
            if (submitBtn) {
              submitBtn.disabled = false;
              submitBtn.innerHTML = originalText;
              submitBtn.style.background = '';
            }
          }, 2000);
        } else {
          throw new Error(data.message || 'Submission failed');
        }
      } catch (err) {
        console.error('Form submission error:', err);
        if (submitBtn) {
          submitBtn.innerHTML = 'Submission issue. Please retry or WhatsApp us';
          submitBtn.style.background = '#e74c3c';
          setTimeout(() => {
            if (submitBtn) {
              submitBtn.disabled = false;
              submitBtn.innerHTML = originalText;
              submitBtn.style.background = '';
            }
          }, 3500);
        }
      }
    });
  }

  open(servicePrefill = '') {
    if (!this.modal) return;
    this.scrollY = window.scrollY || window.pageYOffset || 0;
    this.modal.classList.add('is-open');

    // Industry-standard body-scroll lock: physically locks background page in place
    document.body.style.position = 'fixed';
    document.body.style.top = `-${this.scrollY}px`;
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';

    // Stop Lenis smooth scrolling so background stays completely locked
    if (window.lenisInstance && typeof window.lenisInstance.stop === 'function') {
      window.lenisInstance.stop();
    }

    if (servicePrefill) {
      const select = this.modal.querySelector('#contact-service');
      if (select) {
        select.value = servicePrefill;
        select.dispatchEvent(new Event('change', { bubbles: true }));
      }
    }

    // Reset scroll positions to top
    this.modal.scrollTop = 0;
    const dialog = this.modal.querySelector('.contact-dialog');
    if (dialog) dialog.scrollTop = 0;

    const firstInput = this.modal.querySelector('input:not([type="hidden"])');
    firstInput?.focus();
  }

  close() {
    if (!this.modal) return;
    this.modal.classList.remove('is-open');

    // Restore body scroll position exactly where the user was
    const restoredScrollY = this.scrollY || 0;
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    document.body.style.overflow = '';
    window.scrollTo(0, restoredScrollY);

    // Resume Lenis smooth scrolling
    if (window.lenisInstance && typeof window.lenisInstance.start === 'function') {
      window.lenisInstance.start();
    }
  }
}
