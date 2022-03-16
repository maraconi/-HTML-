let menuItem = Array.from(document.querySelectorAll('.menu__item'));

for (let i = 0; i < menuItem.length; i++) {
	if (menuItem[i].querySelector('.menu_sub')) {
		menuItem[i].querySelector('.menu__link').onclick = function(event) {
			menuItem[i].querySelector('.menu_sub').classList.toggle('menu_active');
			return false;
		}
	}
}

//let menuLink = document.querySelectorAll('.menu__link');
//
//const menuLinks = Array.from(menuLink);
//
//for (let i of menuLinks) {
//    i.onclick = function () {
//        const parent = i.parentElement;
//        if (parent.querySelector('.menu_sub').className === 'menu menu_sub') {
//            parent.querySelector('.menu_sub').className = 'menu menu_sub menu_active';
//        } else {
//            parent.querySelector('.menu_sub').className = 'menu menu_sub';
//        }
//        if (i.closest('.menu_main')) {
//            return false
//        }
//    }
//}