

window.addEventListener('scroll', function(){
    const nav = document.querySelector('.menu');
    nav.classList.toggle('active', window.scrollY > 0 ) 
})