import './styles.scss';
// hover sur les cartes

// ('.card').hover(

//   function() {
//   $(this)
//   .stop(true)
//  .animate(
//   {height: '60px'},
//   {duration: 500, easing: 'easeOutCirc'}
//   )},

//   function() {
//   $(this)
//   .stop(true)
//   .animate(
//   {height:'20px'},
//   {duration: 500, easing: 'easeOutCirc'}
//   )});

// Scroll sur les images

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

  $('a[href^="#homepage"]').on('click', function (event) {
    const target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top,
      }, 500);
    }
  });
});

// Navbar

// $(document).ready(function(){
//     $('<div></div>')
//     .attr('id', 'navbar')
//     .css('opacity', 0.65)
//     .hover(function(){
//         $(this).addClass('active');
//     }, function() {
//         $(this).removeClass('active');
//         setTimeout(function(){
//             $('#navbar:not(.active)').slideUp(function(){
//                 $('a.icon-hover').removeClass('icon-hover');
//             });
//         }, 800);
//     }).appendTo('body');

// $('.icon a').mouseover(function(){
//     $(this).addClass('icon-hover');
//     $('#navbar:not(:animated)')
//     .addClass('active')
/*     .html('<a href="#">Homepage</a>&nbsp;<a href="#about-contenu">About</a>;
<a href="#skills-contenu">Skills & Projects</a>&nbsp;<a href="#career-contenu">Career</a>&nbsp;') */
//     .slideDown();
//     });
//  });
