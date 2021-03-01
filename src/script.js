import '../styles.scss';

// in JS only, files in "./static" are loaded without "static" prefix
// const root = document.getElementById('root');
// root.innerHTML += '<img src="images/kitten.jpg" class="w-1/4 m-auto" />';

// Jquery
$(document).ready(() => {
  $('a[href^="#about-contenu"]').on('click', function (event) {
    const target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top,
      }, 1000);
    }
  });

  $('a[href^="#skills-contenu"]').on('click', function (event) {
    const target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top,
      }, 1000);
    }
  });

  $('a[href^="#career-contenu"]').on('click', function (event) {
    const target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top,
      }, 1000);
    }
  });
});

// NAVBAR
$(document).ready(() => {
  $('<div></div>')
    .attr('id', 'navbar')
    .css('opacity', 0.65)
    .hover(function () {
      $(this).addClass('active');
    }, function () {
      $(this).removeClass('active');
      setTimeout(() => {
        $('#navbar:not(.active)').slideUp(() => {
          $('a.icon-hover').removeClass('icon-hover');
        });
      }, 800);
    })
    .appendTo('body');

  $('icon a').mouseover(function () {
    $(this).addClass('icon-hover');
    $('#overlay:not(:animated)')
      .addClass('active')
      .html('<a href="#">Homepage</a>&nbsp;<a href="#about-contenu">About</a>;<a href="#skills-contenu">Skills & Projects</a>&nbsp;<a href="#career-contenu">Career</a>&nbsp;')
      .slideDown();
  });
});
