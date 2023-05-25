const dispMainImg=document.querySelector("#main-disp-image");

const dispImg1=document.querySelector("#disp-img-1");
const dispImg2=document.querySelector("#disp-img-2");
const dispImg3=document.querySelector("#disp-img-3");
const dispImg4=document.querySelector("#disp-img-4");
const dispImg5=document.querySelector("#disp-img-5");
const dispImg6=document.querySelector("#disp-img-6");


dispImg1.addEventListener("click",()=>{
    dispMainImg.setAttribute("src","./images/p1.jpeg");
})
dispImg2.addEventListener("click",()=>{
    dispMainImg.setAttribute("src","./images/p2.webp");
})
dispImg3.addEventListener("click",()=>{
    dispMainImg.setAttribute("src","./images/p3.webp");
})
dispImg4.addEventListener("click",()=>{
    dispMainImg.setAttribute("src","./images/p4.webp");
})
dispImg5.addEventListener("click",()=>{
    dispMainImg.setAttribute("src","./images/p5.webp");
})
dispImg6.addEventListener("click",()=>{
    dispMainImg.setAttribute("src","./images/p6.webp");
})