var navbar = document.querySelector('.navbar-collapse');
    var overlay = document.querySelector('.overlay');

    navbar.addEventListener('show.bs.collapse', function () {
        overlay.style.opacity = '1';
        overlay.style.visibility = 'visible';
    });

    navbar.addEventListener('hide.bs.collapse', function () {
        overlay.style.opacity = '0';
        overlay.style.visibility = 'hidden';
    });

    // Optional: Close navbar when overlay is clicked
    overlay.addEventListener('click', function () {
        var collapseElement = new bootstrap.Collapse(navbar, {
            toggle: true
        });
    });