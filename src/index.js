import dishCardTpl from './templates/dish-card.hbs';
import cards from './menu.json';
const menuContainerEl = document.querySelector('.js-menu');
const menuCards = createMenuCards(cards);
menuContainerEl.insertAdjacentHTML('beforeend', menuCards);
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const bodyEl = document.querySelector('body');
const themeSwitchEl = document.querySelector("#theme-switch-toggle");

themeSwitchEl.addEventListener("click", changeTheme);
document.addEventListener('DOMContentLoader', checkTheme)
function changeTheme(e) {
    if (e.target.checked) {
        bodyEl.classList.add(Theme.DARK);
        bodyEl.classList.remove(Theme.LIGHT);
        localStorage.setItem('theme', 'dark-theme');
    }
    else {
        bodyEl.classList.add(Theme.LIGHT);
        bodyEl.classList.remove(Theme.DARK);
        localStorage.setItem('theme', 'light-theme');
    }
    }
function checkTheme() {
    if (localStorage.getItem('theme') === 'dark'){
        bodyEl.classList.add(Theme.DARK);
        themeSwitchToggle.cheked = true;
    }
    else {
        bodyEl.classList.add(Theme.LIGHT);
        themeSwitchToggle.cheked = false;
    }
}
function createMenuCards(cards) {
    return cards.map(dishCardTpl).join('');
}