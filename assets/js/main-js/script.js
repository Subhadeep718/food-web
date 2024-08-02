$('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    margin: 10,
    nav: true,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})





// let btn = document.querySelector(".hamburger");
// let i = document.querySelector(".bar-change");
// let ul = document.querySelector("ul")

// btn.addEventListener("click", () =>{
//     i.classList.toggle("fa-xmark");
//     ul.style.display = 'flex';
// });

let btn = document.querySelector(".hamburger");
let i = document.querySelector(".bar-change");
let ul = document.querySelector("ul");

btn.addEventListener("click", () => {
    i.classList.toggle("fa-xmark");
    if (ul.style.display === 'flex') {
        ul.style.display = 'none';
    } else {
        ul.style.display = 'flex';
    }
});