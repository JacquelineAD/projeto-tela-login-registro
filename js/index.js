const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registroLink = document.querySelector('.registro-link');

registroLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});
