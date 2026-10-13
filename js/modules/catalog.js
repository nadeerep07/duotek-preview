/**
 * Duotek — Interactive Services Catalog Controller
 * Handles category filtering and search
 */

export class CatalogController {
  constructor() {
    this.filterButtons = [...document.querySelectorAll('[data-filter]')];
    this.cards = [...document.querySelectorAll('.catalog-card')];
    this.init();
  }

  init() {
    if (this.filterButtons.length === 0) return;

    this.filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const category = btn.dataset.filter;

        this.filterButtons.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');

        this.filterCards(category);
      });
    });
  }

  filterCards(category) {
    this.cards.forEach((card) => {
      const cardCategory = card.dataset.category;
      if (category === 'all' || cardCategory === category) {
        card.style.display = 'flex';
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 30);
      } else {
        card.style.opacity = '0';
        card.style.transform = 'translateY(10px)';
        setTimeout(() => {
          card.style.display = 'none';
        }, 200);
      }
    });
  }
}
