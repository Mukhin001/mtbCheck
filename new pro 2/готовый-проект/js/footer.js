// button up to
/* const btnOnUp = document.querySelector('.btn-On-up');

window.addEventListener('scroll', function(){
const theEnd = document.querySelector('.theEnd');

(Math.ceil(document.body.clientHeight + window.scrollY) >= document.body.scrollHeight) ? theEnd.style.opacity = '1' : theEnd.style.opacity = '0';

(window.scrollY > 300) ? btnOnUp.style.cssText = 'opacity: 1; z-index: 9;': btnOnUp.style.cssText = 'opacity: 0; z-index: 0;';
});

btnOnUp.addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}); */
const blockBtnUpTo = document.querySelector('.blockBtnUpTo');

window.addEventListener('scroll', () => {
    (document.body.scrollHeight / 6 < window.scrollY) ? blockBtnUpTo.style.opacity = '1' : blockBtnUpTo.style.opacity = '0';
});

blockBtnUpTo.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});