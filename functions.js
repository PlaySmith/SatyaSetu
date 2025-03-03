document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelector(".nav-links");
    const toggleButton = document.createElement("button");
    toggleButton.innerText = "☰";
    toggleButton.classList.add("nav-toggle");
    document.querySelector("nav").prepend(toggleButton);
    
    toggleButton.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });
});