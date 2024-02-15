// O'zgaruvchilar
// const phone = 'Redmi';
// console.log(phone)


// el bu html dagi class uchun js o'zgaruvchilari bilan adashib ketmaslik uchun
// const elLogoLink = document.querySelector('.site-header-logo');
// elLogoLink.textContent = 'Frontend Pro';

// const elChangeLogoTextButton = document.querySelector('.change-logo-text-button');
// elChangeLogoTextButton.addEventListener('click', function (){
//     elLogoLink.textContent = 'Frontend Pro';
// });


//  DARK MODE

// bunda add dan keyin class oldidan nuqta qo'yilmaydi
const elLightModeButton = document.querySelector('.site-header-light')
const elDarkModeButton = document.querySelector('.site-header-dark')

elLightModeButton.addEventListener('click', function () {
    document.body.classList.remove('dark-mode');
});

elDarkModeButton.addEventListener('click', function () {
    document.body.classList.add('dark-mode');
});