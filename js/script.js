$(document).ready(function(){

//Click to go to each tab

  $('.entrees').show();
  $('.mains').hide();
  $('.drinks').hide();
  $('.specials').hide();
  $('.cart').hide();

  $('#entrees').click(function(){
    $('.entrees').show();
    $('.mains').hide();
    $('.drinks').hide();
    $('.specials').hide();
    $('.cart').hide();
  });

  $('#mains').click(function(){
    $('.entrees').hide();
    $('.mains').show();
    $('.drinks').hide();
    $('.specials').hide();
    $('.cart').hide();
  });

  $('#drinks').click(function(){
    $('.entrees').hide();
    $('.mains').hide();
    $('.drinks').show();
    $('.specials').hide();
    $('.cart').hide();
  });

  $('#specials').click(function(){
    $('.entrees').hide();
    $('.mains').hide();
    $('.drinks').hide();
    $('.specials').show();
    $('.cart').hide();
  });

  $('#cart').click(function(){
    $('.entrees').hide();
    $('.mains').hide();
    $('.drinks').hide();
    $('.specials').hide();
    $('.cart').show();
  });

  $('#order').click(function(){
    $('.entrees').hide();
    $('.mains').hide();
    $('.drinks').hide();
    $('.specials').hide();
    $('.cart').show();
  });

//Mobile Navbar Code

  $('.burger_menu').click(function(){
      $('.top_nav').toggleClass('active');



  });



});
