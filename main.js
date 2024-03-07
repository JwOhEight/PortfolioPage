window.addEventListener('DOMContentLoaded', (event) => {
    // Get all the anchor tags inside the navList
    const navLinks = document.querySelectorAll('.navList a');

    // Add a click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default action

            // Get the target section id from the href attribute of the clicked link
            const targetSectionId = this.getAttribute('href');

            // Get the target section element
            const targetSection = document.querySelector(targetSectionId);

            // Scroll to the target section smoothly
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});