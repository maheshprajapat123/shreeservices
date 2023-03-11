const navCheck = document.getElementById('nav_check');
const navLinks = document.querySelectorAll('header nav ul li a');

navCheck.addEventListener('click', () => {
  navLinks.forEach(link => {
    link.classList.toggle('fade');
  });
});

// Get the current year and add it to the footer
var year = new Date().getFullYear();
document.querySelector('footer p').innerHTML += ' ' + year;


document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");
});


// Smooth scrolling
$(document).ready(function() {
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });
  
  // Timer for smooth scrolling
  var scrollTimer = null;
  $(window).on('scroll', function() {
    var scrollTop = $(window).scrollTop();
    if (scrollTimer) {
      clearTimeout(scrollTimer);
    }
    scrollTimer = setTimeout(function() {
      $('html, body').stop().animate({
        scrollTop: scrollTop
      }, 1000);
    }, 500);
  });
});

