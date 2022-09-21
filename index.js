import "./style/style.css"
import "./style/fonts//Jura/fonts.css"
import "./style/normalize.css"

const nav = document.querySelector('.header__nav')
const blockNav = document.querySelector('.header__nav-block')
const call = document.querySelector('.call')
const navOpen = document.querySelector('.nav__bar')
const header__navMobile = document.querySelector('.header__nav-block-mobile')
const page = document.querySelector('.page')
const item = document.querySelector('.examples__item')


window.addEventListener('scroll', () => {
    if (window.scrollY <= 60) {
        blockNav.classList.remove('header__block_fixed');
        nav.classList.remove('header__nav_fixed')
    } else {
        blockNav.classList.add('header__block_fixed');
        nav.classList.add('header__nav_fixed')
    }
})

window.addEventListener('scroll', () => {
    if (window.scrollY <= 300) {
        call.classList.remove('call_fixed');
    } else {
        call.classList.add('call_fixed');
    }
})



document.addEventListener('DOMContentLoaded', function(){
    const banner = document.querySelectorAll('.service__auto');
    
    banner.forEach(element => {
        const bannerConteiner = element.querySelector('.service__banner');
        const devLayer = element.querySelector('.service__dev');

        let delta = 0;
        let dots = [];
        setInterval(()=> {
            let l = dots.length;
            if (!l) { return } 
            devLayer.style.width = dots[l-1] + 'px';
            dots = [];
        }, 20)

        element.addEventListener('mousemove', function(e){
            let width = e.pageX - element.getBoundingClientRect().left;
            if (width >= bannerConteiner.clientWidth) {
                console.log(devLayer.style.width, bannerConteiner.style.width)
                return
            }
            dots.push(width)
        });
    
        element.addEventListener('touchmove', function(e){
            let width = e.pageX - element.getBoundingClientRect().left;
            if (width >= bannerConteiner.clientWidth) {
                console.log(devLayer.style.width, bannerConteiner.style.width)
                return
            }
            dots.push(width)
        });
    });
})

document.addEventListener('DOMContentLoaded', function(){
    const banner = document.querySelectorAll('.examples__auto');
    
    banner.forEach(element => {
        const bannerConteiner = element.querySelector('.examples__banner');
        const devLayer = element.querySelector('.service__dev');

        let delta = 0;
        let dots = [];
        setInterval(()=> {
            let l = dots.length;
            if (!l) { return } 
            devLayer.style.width = dots[l-1] + 'px';
            dots = [];
        }, 20)

        element.addEventListener('mousemove', function(e){
            let width = e.pageX - element.getBoundingClientRect().left;
            if (width >= bannerConteiner.clientWidth) {
                console.log(devLayer.style.width, bannerConteiner.style.width)
                return
            }
            dots.push(width)
        });
    
        element.addEventListener('touchmove', function(e){
            let width = e.pageX - element.getBoundingClientRect().left;
            if (width >= bannerConteiner.clientWidth) {
                console.log(devLayer.style.width, bannerConteiner.style.width)
                return
            }
            dots.push(width)
        });
    });
})



function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show');
      }
    });
  }
  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  for (let elm of elements) {
    observer.observe(elm);
  }




  navOpen.addEventListener('click', () => {
    navOpen.classList.toggle('nav__bar_open')
    page.classList.toggle('page__overflow_hidden')
    header__navMobile.classList.toggle('header__nav-block-mobile_open')
  })
