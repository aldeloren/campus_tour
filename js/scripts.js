// scripts.js
// Anthony DeLorenzo
// updated 20 nov 2012
$(document).ready(function () {

//show navigation
  $('#expand').click(function() {
    if ($('#nav').css("margin-top") == "-305px") {
      $('.nav-thumb').show();
    	$('.overlay').animate({
            opacity: ".7"
        }, 300);
        $('#nav').animate({
            marginTop: "0px"
        }, 200);
    } else {
    	$('.overlay').animate({
            opacity: "0"
        }, 300);
        $('#nav').animate({
            marginTop: "-305px"
        }, 200);
        $('.nav-thumb').hide();
    }
 });

//simple map usage 
  $('.pin').click(function() {
    $('.pin').not(this).css('background-color' , 'transparent')
    $(this).css('opacity' , '1')
    $('#places-right-overlay').fadeOut('fast');
    $(this).css('background-color' , 'rgba(245, 102, 53, .8)');
    $('.pin').not(this).css('opacity' , '.4')
  });
  if ($('#center , #expand').click(function(){
      $('.pin').css('opacity' , '1');
      $('.pin').css('background-color' , 'transparent')
      $('#places-right-overlay').fadeIn('fast');
    })
  );
//pin click
  $('#pin-one').click(function(){
    $('#background').css({
      'background':'#333 url(images/phillips1.jpg) no-repeat center center fixed',
      '-webkit-background-size':'cover',
      '-moz-background-size':'cover',
      '-o-background-size':'cover',
      'background-size':'cover'
      })
  });
  $('#pin-two').click(function(){
    $('#background').css({
      'background':'#333 url(images/stadium.jpg) no-repeat center center fixed',
      '-webkit-background-size':'cover',
      '-moz-background-size':'cover',
      '-o-background-size':'cover',
      'background-size':'cover'
      })
  });
  $('#pin-three').click(function(){
    $('#background').css({
      'background':'#333 url(images/osmi.jpg) no-repeat center center fixed',
      '-webkit-background-size':'cover',
      '-moz-background-size':'cover',
      '-o-background-size':'cover',
      'background-size':'cover'
      })
  });


});//final closing	