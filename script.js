document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section-content');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all sections
            sections.forEach(section => section.classList.remove('active'));
            
            // Remove active class from all links
            links.forEach(link => link.classList.remove('active-link'));
            
            // Add active class to the clicked section
            const sectionId = link.getAttribute('data-section');
            document.getElementById(sectionId).classList.add('active');
            
            // Add active class to the clicked link
            link.classList.add('active-link');
        });
    });

    // Show the default section (e.g., Profile)
    document.querySelector('.nav-link[data-section="profile"]').click();
});