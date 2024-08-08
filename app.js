const btn1 = document.querySelector('.btn1');
const popup = document.querySelector('.popup');
const btn2 = document.querySelector('.btn2');





btn1.addEventListener('click', ()=>{
    popup.classList.add('special-visible');

})

btn2.addEventListener('click', ()=>{
    popup.classList.add('special-hidden');
})