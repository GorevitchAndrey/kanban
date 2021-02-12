let openModal = document.querySelectorAll('.note');
let modalClose = document.querySelector('.modal-close');
let modalWindow = document.querySelector('.modal-overlay');

openModal.forEach(k => {
    k.ondblclick = (e) => {
        modalWindow.style.display = 'block';
        e.preventDefault();
    }
});

modalClose.onclick = () => {
    modalWindow.style.display = 'none';
}