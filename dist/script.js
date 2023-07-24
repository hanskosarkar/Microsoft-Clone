console.log("js working fine");

const slides = document.querySelectorAll(".slider-item");
console.log(slides);
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
// console.log(prevBtn);


let counter = 0;
slides.forEach(
    (slide, index) => {
        //dynamically add and update styles using tailwind css classes
        slide.classList.add("left-full");
        slide.style.left = `${index * 100}%`;
    }
);

//slider function
const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`;
        }
    )
}

prevBtn.addEventListener("click", updateprevSlide);
nextBtn.addEventListener("click", updatenextSlide);

function updateprevSlide(){
    // alert();
    counter--;
    if(counter < 0) counter = slides.length - 1;
    slideImage();
}

function updatenextSlide(){
    // alert();
    counter++;
    if(counter > slides.length - 1) counter = 0;
    slideImage();
}


// hambuerger menu 
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", togglemenu);

function togglemenu(){
    const navlist = document.getElementById("navlist");
    console.log(navlist);
    navlist.classList.toggle("-translate-x-80");
    
}