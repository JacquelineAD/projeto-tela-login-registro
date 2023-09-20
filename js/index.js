const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registroLink = document.querySelector('.registro-link');
const btnPopup = document.querySelector('.buttonLogin-popup');
const iconClose = document.querySelector('.icon-fechar');


registroLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});
