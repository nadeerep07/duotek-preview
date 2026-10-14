/**
 * Duotek Group — Human Editorial Web Application
 * Main Application Bootstrap
 */
import { corePillars } from './data/services.js';
import { EditorialController } from './modules/editorial.js';
import { ScrollManager } from './modules/scroll.js';
import { ContactModal } from './modules/modal.js';
import { CatalogController } from './modules/catalog.js';
import { NavigationController } from './modules/navigation.js';
import { CustomDropdownController } from './modules/dropdown.js';
import { PageTransition } from './modules/transition.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Page Transition & Brand Curtain
  const pageTransition = new PageTransition();

  // Initialize Mobile Navigation Drawer & Hamburger Toggle
  const navigation = new NavigationController();

  // Initialize Web Theme Custom Dropdowns
  const dropdowns = new CustomDropdownController();

  // Initialize Editorial sticky split-stage controller
  const editorial = new EditorialController(corePillars, null);

  // Initialize Scroll & animation manager
  const scrollManager = new ScrollManager(editorial);
  editorial.lenis = scrollManager.lenis;
  window.lenisInstance = scrollManager.lenis;

  // Initialize Contact Modal
  const modal = new ContactModal();

  // Initialize Catalog Category Filtering
  const catalog = new CatalogController();

  // Refresh triggers on window resize
  window.addEventListener('resize', () => {
    if (window.ScrollTrigger) {
      window.ScrollTrigger.refresh();
    }
  });

  console.log('Duotek Group website initialized with IT, ELV, and software services.');
});
