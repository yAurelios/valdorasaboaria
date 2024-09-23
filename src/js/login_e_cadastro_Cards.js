const signUpBtnLink = document.querySelector('.signUpBtn-link');
const signInBtnLink = document.querySelector('.signInBtn-link');
const parent = document.querySelector('.parent');

signUpBtnLink.addEventListener('click', () => {parent.classList.toggle('active');});

signInBtnLink.addEventListener('click', () => {parent.classList.toggle('active');});