let modalMain = document.getElementById('modal_main');
let modalSuccess = document.getElementById('modal_success');
let showSuccess = document.querySelector('.show-success');
let modalClose = document.querySelectorAll('div.modal__close');

modalMain.className = 'modal modal_active';

modalClose[0].onclick = function () {
    modalMain.className = 'modal';
}

showSuccess.onclick = function () {
    modalSuccess.className = 'modal modal_active';
}

modalClose[1].onclick = function () {
    modalMain.className = 'modal';
    modalSuccess.className = 'modal';
}
