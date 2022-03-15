let menuLink = document.querySelectorAll('.menu__link');

const menuLinks = Array.from(menuLink);

for (let i of menuLinks) {
    i.onclick = function () {
        const parent = i.parentElement;
        if (parent.querySelector('.menu_sub').className === 'menu menu_sub') {
            parent.querySelector('.menu_sub').className = 'menu menu_sub menu_active';
        } else {
            parent.querySelector('.menu_sub').className = 'menu menu_sub';
        }
        if (i.closest('.menu_main')) {
            return false
        }
    }
}