// window.scrollBy({
//     top: 100,   // Vertical amount (can be negative)
//     left: 0,
//     behavior: 'smooth'
// });

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get all elements with class "submenu"
    var submenus = document.querySelectorAll('.submenu');

    // Iterate over each submenu element
    submenus.forEach(function (submenu) {
        // Add event listener for mouseenter
        submenu.addEventListener('mouseenter', function () {
            // Display the submenu's nested ul on hover
            var nestedUl = this.querySelector('ul');
            if (nestedUl) {
                nestedUl.style.display = 'flex';
            }
        });

        // Add event listener for mouseleave
        submenu.addEventListener('mouseleave', function () {
            // Hide the submenu's nested ul on mouseleave
            var nestedUl = this.querySelector('ul');
            if (nestedUl) {
                nestedUl.style.display = 'none';
            }
        });
    });
});
