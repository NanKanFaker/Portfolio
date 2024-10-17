//=============SHOW MENU=============//
const menu = document.getElementById('nav-menu'),
    toggleBtn = document.getElementById('nav-toggle'),
    closeBtn = document.getElementById('nav-close')

if (toggleBtn && closeBtn) {

    //show
    toggleBtn.addEventListener('click', () => {
        menu.classList.add('show-menu')
    })

    //hide
    closeBtn.addEventListener('click', () => {
        menu.classList.remove('show-menu')
    })
}



//=============REMOVE MENU=============//
/*if user click links*/

const navlinks = document.querySelectorAll('.nav__link')

/*Program by my self */
// if(navlinks){
//     navlinks.forEach( (link)=>{
//         link.addEventListener('click', () => {
//             menu.classList.remove('show-menu')
//         })
//     } )
// }

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navlinks.forEach(link => link.addEventListener('click', linkAction))



//=============ADD BLUR HEADER=============//

/*Program by my self */
// const header = document.getElementById('header')

// window.addEventListener('scroll',function(){

//     if(header && scrollY > 50){
//         header.classList.add('bg-header')
//     }else{
//         header.classList.remove('bg-header')
//     }

// })

const blurHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header')
        : header.classList.remove('blur-header')
}

window.addEventListener('scroll', blurHeader)


//=============EMAIL JS=============//
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    //阻止瀏覽器中表單的預設的行為
    e.preventDefault()

    //serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_uix8dor','template_sz3rkpo','#contact-form','t32sFPxVA7xF2wh0P')
        .then( () => {
            //show sent message (if success)
            contactMessage.textContent = 'Message sent successfully ✅'

            //after success , remove message after 5 seconds
            setTimeout( () => {
                contactMessage.textContent = ''
            } ,5000)

            contactForm.reset()
        }), () => {
            // show error message (if fail)
            contactMessage.textContent = 'Message not sent (services error)❌'
        }

}

contactForm.addEventListener('submit',sendEmail)

//=============SHOW SCROLL UP=============//
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY > 350 ? scrollUp.classList.add('show-scroll') 
                        : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

//=============SCROLL SECTIONS ACTIVE LINK=============//
const sections = document.querySelectorAll('section[id]')

const activeLink = () => {

    sections.forEach( (current) => {
        const sectionTop = current.offsetTop - 58
        const sectionHeight = current.offsetHeight
        const sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(".nav__menu a[href*="+ sectionId +"]").classList.add('active-link')
        }else{
            document.querySelector(".nav__menu a[href*="+ sectionId +"]").classList.remove('active-link')
        }

    })

}

window.addEventListener('scroll', activeLink)

//=============SCROLLREVEAL=============//
const sr = ScrollReveal({
    orging: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true //元素是否在容器邊界內來回滾動時都產生動畫效果
})

sr.reveal('.home__data, .experience, .skill, .contact__container')
sr.reveal('.home__img', {delay: 600})
sr.reveal('.home__scroll', {delay: 800})
sr.reveal('.work__card', {interval: 100})
sr.reveal('.about__content', {origin: 'right'})
sr.reveal('.about__img', {origin: 'left'})
