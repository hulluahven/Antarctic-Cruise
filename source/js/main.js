import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';

const pageBody = document.querySelector('[data-body]');
const pageHeader = document.querySelector('[data-header]');
const menuButton = document.querySelector('[data-button]');
const mainNav = document.querySelector('[data-nav]');
const promoBlock = document.querySelector('[data-promo]');
const phoneField = document.getElementById('phone-number');
const navWrapper = document.querySelector('[data-wrapper]');
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
  // Modules
  // ---------------------------------

  pageHeader.classList.remove('page-header--no-js');
  mainNav.classList.remove('main-nav--no-js');

  if (pageHeader && pageHeader.classList.contains('is-open')) {
    pageHeader.classList.remove('is-open');
  } else {
    pageHeader.classList.add('is-closed');
  }

  if (mainNav && mainNav.classList.contains('is-closed')) {
    mainNav.classList.remove('is-closed');
    mainNav.classList.add('is-open');
  } else {
    mainNav.classList.add('is-closed');
  }

  if (promoBlock && promoBlock.classList.contains('is-hidden')) {
    promoBlock.classList.remove('is-hidden');
  }

  if (mainNav) {
    menuButton.addEventListener('click', function () {

      if (pageBody.classList.contains('is-hidden')) {
        pageBody.classList.remove('is-hidden');
      } else {
        pageBody.classList.add('is-hidden');
      }

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


  if (navWrapper) {
    navWrapper.addEventListener('click', function () {

      if (pageBody.classList.contains('is-hidden')) {
        pageBody.classList.remove('is-hidden');
      } else {
        pageBody.classList.add('is-hidden');
      }

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

  phoneField.addEventListener('input', () =>{
    phoneField.value = phoneField.value.replace(/[^\d]/g, '');
  });

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
