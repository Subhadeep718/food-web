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





let btn = document.querySelector(".hamburger");
let i = document.querySelector(".bar-change");
let ul = document.querySelector("ul");
let main = document.querySelector("main");

btn.addEventListener("click", () => {
    if (ul.style.display === 'flex') {
        ul.style.display = 'none';
        main.style.display = 'block';
        i.classList.remove("fa-xmark");
    } else {
        ul.style.display = 'flex';
        main.style.display = 'none';
        i.classList.add("fa-xmark");
    }
});

ul.querySelectorAll("li").forEach(li => {
    li.addEventListener("click", () => {
        ul.style.display = 'none';
        main.style.display = 'block';
        i.classList.remove("fa-xmark");
    });
});

