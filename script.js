const menu = document.querySelector('#nav')
const open = document.querySelector('.icon-menu')
const close = document.querySelectorAll('.close')
const toggle = document.querySelectorAll('nav .toggle')

const header = document.querySelector('header')
const navHeight = header.offsetHeight



open.addEventListener('click', () =>{
    menu.classList.add('show')
})
close.forEach(close => {
    close.addEventListener('click', () =>{
        menu.classList.remove('show')
    })
})
function changeHeader(){
    if(window.scrollY >= navHeight){
        header.classList.add('scroll')
    }else{
        header.classList.remove('scroll')
    }
}
const back = document.querySelector('.back-to-top')
const home = document.querySelector('#home')
const homeHeight = home.offsetHeight
function backToTop(){
    if(window.scrollY >= homeHeight){
        back.classList.add('show')
    }else{
        back.classList.remove('show')
    }
}
/*******MENU ATIVO****** */
const sections = document.querySelectorAll('main section[id]')
function activeMenu(){
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4
    sections.forEach(section =>{
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if(checkpointStart && checkpointEnd){
            document
                .querySelector('nav ul li a[href*=' + sectionId + ']' )
                .classList.add('active')
        }else{
            document
                .querySelector('nav ul li a[href*=' + sectionId + ']' )
                .classList.remove('active')
        }
    })
}

window.addEventListener('scroll', ()=>{
    changeHeader()
    backToTop()
    activeMenu()
})

/******* SWIPER ********* */
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
});

/*ScrollReveal */
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 500,
    reset: true
})
scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services .head, #services .card,
    #testimonials .head, #testimonials .testimonials,
    #contact .text, #contact .links,
    footer .brand, footer .social
    `,
     {interval: 100}
)
