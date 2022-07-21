import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';

const pageHeader = document.querySelector('[data-header]');
const menuButton = document.querySelector('[data-button]');
const mainNav = document.querySelector('[data-nav]');
const promoBlock = document.querySelector('[data-promo]');
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();


  // Modules
  // ---------------------------------

  if (pageHeader.closest('[data-header]') && pageHeader.classList.contains('is-closed')) {
    pageHeader.classList.remove('is-closed');
  } else {
    pageHeader.classList.add('is-closed');
  }


  if (mainNav.closest('[data-nav]') && mainNav.classList.contains('is-open')) {
    mainNav.classList.remove('is-open');
    mainNav.classList.add('is-closed');
  }

  if (promoBlock.closest('[data-promo]') && promoBlock.classList.contains('is-hidden')) {
    promoBlock.classList.remove('is-hidden');
  } else {
    promoBlock.classList.add('is-hidden');
  }

  if (mainNav.closest('[data-nav]')) {
    menuButton.addEventListener('click', function () {
      if (mainNav.classList.contains('is-closed')) {
        mainNav.classList.remove('is-closed');
        mainNav.classList.add('is-open');
      } else {
        mainNav.classList.remove('is-open');
        mainNav.classList.add('is-closed');
      }

      if (pageHeader.classList.contains('is-closed')) {
        pageHeader.classList.remove('is-closed');
        pageHeader.classList.add('is-open');
      } else {
        pageHeader.classList.add('is-closed');
        pageHeader.classList.remove('is-open');
      }

      if (promoBlock.classList.contains('is-hidden')) {
        promoBlock.classList.remove('is-hidden');
      } else {
        promoBlock.classList.add('is-hidden');
      }
    });
  }

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
