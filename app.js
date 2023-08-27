

window.addEventListener("scroll", ()=>{
    var header = document.querySelector("nav");
    header.classList.toggle("sticky",window.scrollY>0);   
})


