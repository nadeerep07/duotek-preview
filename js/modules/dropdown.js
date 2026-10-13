/**
 * Duotek — Web Theme-Based Custom Dropdown Component
 * Seamlessly enhances native <select> elements into accessible, theme-styled dropdowns
 * matching Duotek's warm editorial aesthetic.
 */

export class CustomDropdownController {
  constructor() {
    this.instances = [];
    this.init();
  }

  init() {
    const selects = document.querySelectorAll('.form-group select');
    selects.forEach((select) => {
      this.enhanceSelect(select);
    });

    // Global click listener to close open dropdowns
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.custom-select-wrapper')) {
        this.closeAll();
      }
    });

    // Global escape key listener
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeAll();
      }
    });
  }

  enhanceSelect(select) {
    if (select.dataset.customized === 'true') return;
    select.dataset.customized = 'true';

    // Visually hide native select while preserving DOM presence & form submission
    select.classList.add('custom-select-native-hidden');

    // Create custom wrapper
    const wrapper = document.createElement('div');
    wrapper.className = 'custom-select-wrapper';

    // Create trigger button
    const trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.className = 'custom-select-trigger';
    trigger.setAttribute('aria-haspopup', 'listbox');
    trigger.setAttribute('aria-expanded', 'false');

    const labelSpan = document.createElement('span');
    labelSpan.className = 'custom-select-label';

    const arrow = document.createElement('span');
    arrow.className = 'custom-select-arrow';
    arrow.setAttribute('aria-hidden', 'true');
    arrow.innerHTML = `
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    `;

    trigger.appendChild(labelSpan);
    trigger.appendChild(arrow);

    // Create menu popover
    const menu = document.createElement('div');
    menu.className = 'custom-select-menu';
    menu.setAttribute('role', 'listbox');

    const optionsList = document.createElement('div');
    optionsList.className = 'custom-select-options';
    menu.appendChild(optionsList);

    // Populate options
    const optionElements = [];
    Array.from(select.options).forEach((opt, index) => {
      const optEl = document.createElement('div');
      optEl.className = 'custom-select-option';
      optEl.setAttribute('role', 'option');
      optEl.setAttribute('data-value', opt.value);
      optEl.tabIndex = 0;

      const textSpan = document.createElement('span');
      textSpan.className = 'option-text';
      textSpan.textContent = opt.textContent;

      const checkSvg = document.createElement('span');
      checkSvg.className = 'option-check';
      checkSvg.setAttribute('aria-hidden', 'true');
      checkSvg.innerHTML = `
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      `;

      optEl.appendChild(textSpan);
      optEl.appendChild(checkSvg);

      optEl.addEventListener('click', (e) => {
        e.stopPropagation();
        this.selectOption(select, opt.value, wrapper);
        trigger.focus();
      });

      optEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.selectOption(select, opt.value, wrapper);
          trigger.focus();
        } else if (e.key === 'ArrowDown') {
          e.preventDefault();
          const next = optionElements[index + 1];
          if (next) next.focus();
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          const prev = optionElements[index - 1];
          if (prev) prev.focus();
          else trigger.focus();
        }
      });

      optionsList.appendChild(optEl);
      optionElements.push(optEl);
    });

    wrapper.appendChild(trigger);
    wrapper.appendChild(menu);

    // Insert wrapper into DOM right after native select
    select.parentNode.insertBefore(wrapper, select.nextSibling);

    // Sync UI with select's current state
    const syncUI = () => {
      const currentVal = select.value;
      const selectedOpt = Array.from(select.options).find((o) => o.value === currentVal) || select.options[0];
      if (selectedOpt) {
        labelSpan.textContent = selectedOpt.textContent;
      }
      optionElements.forEach((el) => {
        const isMatch = el.getAttribute('data-value') === currentVal;
        el.classList.toggle('is-selected', isMatch);
        el.setAttribute('aria-selected', isMatch ? 'true' : 'false');
      });
    };

    // Initial sync
    syncUI();

    // Toggle dropdown on trigger click
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = wrapper.classList.contains('is-open');
      this.closeAll();
      if (!isOpen) {
        wrapper.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
        const selected = optionsList.querySelector('.is-selected');
        if (selected) {
          selected.scrollIntoView({ block: 'nearest' });
        }
      }
    });

    // Keyboard support on trigger
    trigger.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        wrapper.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
        const selected = optionsList.querySelector('.is-selected') || optionElements[0];
        if (selected) selected.focus();
      }
    });

    // External change event listener
    select.addEventListener('change', syncUI);

    // Form reset listener
    const parentForm = select.closest('form');
    if (parentForm) {
      parentForm.addEventListener('reset', () => {
        setTimeout(syncUI, 10);
      });
    }

    this.instances.push({ wrapper, trigger });
  }

  selectOption(select, value, wrapper) {
    select.value = value;
    select.dispatchEvent(new Event('change', { bubbles: true }));
    wrapper.classList.remove('is-open');
    wrapper.querySelector('.custom-select-trigger')?.setAttribute('aria-expanded', 'false');
  }

  closeAll() {
    this.instances.forEach(({ wrapper, trigger }) => {
      if (wrapper.classList.contains('is-open')) {
        wrapper.classList.remove('is-open');
        trigger.setAttribute('aria-expanded', 'false');
      }
    });
  }
}
