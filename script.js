let nav = document.getElementById("navbar");
let hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", toggleNav)

function toggleNav() {
    nav.classList.toggle("active")
}

nav.addEventListener("click", (event) => {
    if (event.target.tagName.toLowerCase() === "a") {
        nav.classList.remove("active") 
    }
})


