// Get references to the menu button and the menu itself
const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("menu");

// Add a click event listener to the menu button
menuButton.addEventListener("click", function() {
    // Toggle the "hidden" class to show/hide the menu
    menu.classList.toggle("hidden");
});
