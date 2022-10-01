const card = document.querySelector('.card');
const imageZoom = document.querySelector('.image-zoom');
const blocFocusTop = document.querySelector('.bloc-focus-top');
const blocFocusBottom = document.querySelector('.bloc-focus-bottom');
const blockContent = document.querySelector('.bloc-content-show');
const downLoadLogo = document.querySelector('.bloc-content-show img');
const title = document.querySelector('.bloc-content-show h2');
const allTxt = document.querySelectorAll('.bloc-content-show p');
const separation = document.querySelector('.bloc-content-show hr');

const TLanim = gsap.timeline({paused: true});

TLanim
.fromTo(imageZoom, 
    {scale: 1}, 
    {scale: 2, 
        y: -50, 
        x:200, 
        duration: 0.4, 
        ease: ExpoScaleEase.config(1,2, 'power2.intOut')
    })
.to(blocFocusTop, {top: -30, left: -30, duration: 0.1}, 0.5)
.to(blocFocusBottom, {bottom: -30, right: -30, duration: 0.1}, '-=0.1')
.to(blockContent, {bottom: 200, duration: 0.2}, '-=0.1')
.from(title, {opacity: 0, duration: 0.2}, '-=0.1')
.from(downLoadLogo, {scale: 0, duration: 0.2})
.from(separation, {width: 0, duration: 0.2}, '-=0.2')
.from(allTxt, {opacity: 0, duration: 0.3, stagger: 0.2})




card.addEventListener('mouseenter', () => {
    TLanim.play();
});
card.addEventListener('mouseleave', () => {
    TLanim.reverse();
});