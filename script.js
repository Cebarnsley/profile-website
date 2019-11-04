// scroll function

$(document).ready(function () {
    $('a.about-section').click(function() {
    $('html, body').animate({
      scrollTop: $("div.home").offset().top
    }, 1000)
  }), 
    $('a.project-section').click(function (){
      $('html, body').animate({
        scrollTop: $("div.section-title-projects").offset().top
      }, 1000)
    }),
    $('a.contact-section').click(function (){
      $('html, body').animate({
        scrollTop: $("div.contact-links").offset().top
      }, 1000)
    })
  });


 