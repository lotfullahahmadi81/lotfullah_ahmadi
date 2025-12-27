const texts = ["Java Expirt!",
    "Fullstack web apps Developer!",
    "Bootstrap Expirt",
    "Programming instructor",
    "Update with modren technologies!"
];
let textIndex= 0;
let charIndex = 0;
let isDeleting = false;
const textElement = document.getElementById("text");
const typingSpeed = 30;
const deletingSpeed = 20;
const dalayBetweenText = 2000;
function typeEffect(){
    const courrentText= texts[textIndex];
    if(!isDeleting){
        textElement.textContent = courrentText.substring(0,charIndex+1);
        charIndex++;
        if(charIndex === courrentText.length){
            setTimeout(() => isDeleting=true, dalayBetweenText);
        }
    }else{
        textElement.textContent=courrentText.substring(0,charIndex-1);
        charIndex--;
        if(charIndex===0){
            isDeleting=false;
            textIndex=(textIndex+1)%texts.length;
        }
    }
    setTimeout(typeEffect,isDeleting?deletingSpeed:typingSpeed);
}
typeEffect();
const skills = document.querySelectorAll('.skill');
window.onscroll = () => {
    skills.forEach(skill => {
        const percent = skill.getAttribute('data-percent');
        const bar = skill.querySelector('.progress-bar');

        setTimeout(() => {
            bar.style.width = percent + '%';
        }, 300);
    });
};
const navLink = document.querySelectorAll('.navbar-collapse .nav-link');
const navbarCollapse = document.querySelector('.navbar-collapse');
navLink.forEach(link => {
    link.addEventListener('click', () =>{
        new bootstrap.Collapse(navbarCollapse,{
            toggle:true
        }).hide();
    });
});