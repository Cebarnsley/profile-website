$(document).ready(function () {
    $('a.home').click(function() {
    $('html, body').animate({
      scrollTop: $("div.home").offset().top
    }, 1000)
  }), 
    $('a.project-section').click(function (){
      $('html, body').animate({
        scrollTop: $("div.projects-info").offset().top
      }, 1000)
    }),
    $('a.contact-section').click(function (){
      $('html, body').animate({
        scrollTop: $("div.contact").offset().top
      }, 1000)
    })
  });