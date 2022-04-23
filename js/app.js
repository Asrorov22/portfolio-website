window.addEventListener('scroll', function(){
    let Scroll = document.getElementById('nav');
    Scroll.classList.toggle('fixed', window.scrollY > 10);
})