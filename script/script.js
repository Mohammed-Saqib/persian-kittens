// ================ Loader Coding =====================  //
window.addEventListener('load', () => {
    const loader = document.querySelector('body');
    loader.classList.remove('active');
})
// ================ NavBar Coding =====================  //
const navIcon = document.querySelector('.nav-icon');
const menu = document.querySelector('.right-nav');
navIcon.addEventListener('click', () => {
    navIcon.classList.toggle('active');
    menu.classList.toggle('active');
});
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', function (){
    this.scrollY > 90 ? navbar.classList.add('active') : navbar.classList.remove('active');
});
// ================ Carousel Coding =====================  //
document.getElementById('carousel-video').playbackRate = .3;
window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
    })
});
// ====================== Contact Coding ======================
function handleFormSubmit(){
    const errorName = document.getElementById('err-name');
    const errorEmail = document.getElementById('err-email');
    const errorMsg = document.getElementById('err-message');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    if(name.value == '' || name.value == null){
        name.focus();
        errorName.textContent = 'Please Write Your Name'
        return
    }else{
        errorName.textContent = ''
    }
    if(email.value == '' || email.value == null){
        email.focus();
        errorEmail.textContent = 'Please Write Your Email'
        return
    }else{
        errorEmail.textContent = ''
    }
    if(message.value == '' || message.value == null){
        message.focus();
        errorMsg.textContent = 'Please Write Your Message'
        return
    }else{
        errorMsg.textContent = ''
    }
}
document.getElementById('name').addEventListener('input', function(e){
    const name = document.getElementById('name');
    const fullNameregex= /^[a-zA-Z\s\.]+$/;
    if (fullNameregex.test(e.target.value) === false) {
        name.value = name.value.slice(0,name.value.length - 1)
      }
})
document.getElementById('email').addEventListener('blur', function(e){
    const errorEmail = document.getElementById('err-email');
    const email = document.getElementById('email');
    if(email.value == '' || email.value == null){
        errorEmail.textContent = 'Please Write Your Email'
        return
    }else{
        errorEmail.textContent = ''
    }
    const emailregex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailregex.test(email.value) === false) {
        errorEmail.textContent = "Please enter a valid Email";
        email.value = "";
        return 
    }else{
        errorEmail.textContent = " ";
    }
})

// ====================== Go Up Coding ======================
const goUp = document.getElementById('go-up');
window.addEventListener('scroll',function(e){
    e.preventDefault();
    this.scrollY > 20 ? goUp.classList.add('active') : goUp.classList.remove('active');
});
goUp.addEventListener('click',() =>{
    window.scroll(0, 0);
})