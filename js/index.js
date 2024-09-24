const header = document.querySelector('.header');
const hero = document.querySelector('.hero').clientHeight;
document.addEventListener('scroll',()=>{
const scroll = window.scrollY
if (scroll >= hero){
    header.classList.add('fixed')
}else{
    header.classList.remove('fixed')
}
})