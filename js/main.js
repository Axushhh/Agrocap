(function ($) {
    "use strict";

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Product carousel
    $(".product-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 45,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });
    
})(jQuery);

// const fileInput = document.getElementById('file');

// fileInput.addEventListener('change', function() {
//     const file = this.files[0];
    
//     const fileNameDisplay = document.getElementById('fileName');
//     fileNameDisplay.textContent = `Selected file: ${file.name}`;
    
    
// });

const imageInput = document.getElementById('imageInput');

// Get the image preview element
const imagePreview = document.getElementById('imagePreview');

// Add event listener to detect file selection
imageInput.addEventListener('change', function() {
    // Get the selected file
    const file = this.files[0];

    // Check if a file is selected
    if (file) {
        // Create a FileReader object to read the file
        const reader = new FileReader();

        // Set up the FileReader onload function
        reader.onload = function(e) {
            // Set the src attribute of the image preview to the data URL of the selected file
            imagePreview.src = e.target.result;
        };

        // Read the selected file as a data URL
        reader.readAsDataURL(file);
    } else {
        // If no file is selected, clear the image preview
        imagePreview.src = '#';
    }
});