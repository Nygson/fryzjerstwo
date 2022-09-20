const navMobile = document.querySelector('.nav-mobile')
const navBtn = document.querySelector('.hamburger')
const allNavItems = document.querySelectorAll('.nav__link')
const toTop = document.querySelector('.top');
const bottomBtn = document.querySelector('.booksy-btn');
const footerYear = document.querySelector('.footer__year')

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 250) {
    toTop.classList.add("top__active");
    bottomBtn.classList.add("booksy-btn__active");
  } else {
    toTop.classList.remove("top__active");
    bottomBtn.classList.remove("booksy-btn__active");
  }
})

const handleNav = () => {
    navBtn.classList.toggle('is-active')
    navMobile.classList.toggle('nav-mobile--active')

    allNavItems.forEach(item => {
        item.addEventListener('click', () => {
            navMobile.classList.remove('nav-mobile--active')
            navBtn.classList.remove('is-active')
        })
    }) 
}

const handleCurrentYear = () => {
  const year = (new Date).getFullYear();
  footerYear.innerText = year;
}

handleCurrentYear();
navBtn.addEventListener('click', handleNav)
