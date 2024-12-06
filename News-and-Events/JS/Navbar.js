document.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    console.log(`Window Width: ${window.innerWidth}, ScrollY: ${window.scrollY}`);
    if (window.innerWidth >= 992) {
        navbar.classList.toggle("shrink", window.scrollY > 50);
    } else {
        console.log("Disabling shrink for small devices");
        navbar.classList.remove("shrink");
    }
});