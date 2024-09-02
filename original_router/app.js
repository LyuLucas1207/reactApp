document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('nav a[data-link]');
    const pages = document.querySelectorAll('.page');

    // Function to handle navigation
    const navigateTo = url => {
        history.pushState(null, null, url);
        handleRoute();
    };

    // Function to handle route changes
    const handleRoute = () => {
        const path = window.location.pathname;

        pages.forEach(page => {
            page.classList.remove('active');
        });

        switch (path) {
            case '/':
                document.getElementById('home').classList.add('active');
                break;
            case '/login':
                document.getElementById('login').classList.add('active');
                break;
            case '/article':
                document.getElementById('article').classList.add('active');
                break;
            default:
                document.getElementById('home').classList.add('active');
                break;
        }
    };

    // Add click event listeners to the navigation links
    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const url = event.target.getAttribute('href');
            navigateTo(url);
        });
    });

    // Handle browser navigation (back/forward)
    window.addEventListener('popstate', handleRoute);

    // Initialize the route
    handleRoute();
});
