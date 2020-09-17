$(document).ready(function(){

//Click to go to each tab

  $('.entrees').show();
  $('.mains').hide();
  $('.drinks').hide();
  $('.specials').hide();
  $('.cart').hide();
  $('.add_item_display').hide();

  $('#entrees').click(function(){
    $('.entrees').show();
    $('.mains').hide();
    $('.drinks').hide();
    $('.specials').hide();
    $('.cart').hide();
    $('.add_item_display').hide();
  });

  $('#mains').click(function(){
    $('.entrees').hide();
    $('.mains').show();
    $('.drinks').hide();
    $('.specials').hide();
    $('.cart').hide();
    $('.add_item_display').hide();
  });

  $('#drinks').click(function(){
    $('.entrees').hide();
    $('.mains').hide();
    $('.drinks').show();
    $('.specials').hide();
    $('.cart').hide();
    $('.add_item_display').hide();
  });

  $('#specials').click(function(){
    $('.entrees').hide();
    $('.mains').hide();
    $('.drinks').hide();
    $('.specials').show();
    $('.cart').hide();
    $('.add_item_display').hide();
  });

  $('#cart').click(function(){
    $('.entrees').hide();
    $('.mains').hide();
    $('.drinks').hide();
    $('.specials').hide();
    $('.cart').show();
    $('.add_item_display').hide();
  });

  $('#order').click(function(){
    $('.entrees').hide();
    $('.mains').hide();
    $('.drinks').hide();
    $('.specials').hide();
    $('.cart').show();
    $('.add_item_display').hide();
  });

//Add Item Display

  $('.food_image').click(function(){
    $('.add_item_display').show();
    $('.entrees').hide();
    $('.mains').hide();
    $('.drinks').hide();
    $('.specials').hide();
    $('.cart').hide();
  });

  $('.close_white_box').click(function(){
    $('.add_item_display').hide();
    $('.entrees').show();
    $('.mains').hide();
    $('.drinks').hide();
    $('.specials').hide();
    $('.cart').hide();
  });


//Mobile Navbar Code

  $('.burger_menu').click(function(){
      $('.top_nav').toggleClass('active');
  });
//

  $('.order_add').click(function(){
    $('.add_item_display').hide();
    $('.entrees').hide();
    $('.mains').hide();
    $('.drinks').hide();
    $('.specials').hide();
    $('.cart').show();
  });
//

  $('.food_image').on('click', function(){
     console.log(this.id);
    var itemName = this.id //stogin the value to a variable
    $('#cartFoodName').append ('<br>' + itemName);


    // console.log($('.menu-button').index(this));
    var myIndex = $('.food_image').index(this);
    console.log(myIndex);

    // var itemPrice = document.getElementsByClassName('item-price');
    // console.log(itemPrice);
    //
    // for (var i=0; i<itemPrice.length; i++){
    //
    //   if (myIndex == i){
    //     console.log(itemPrice[i].innerHTML);
    //     var price = itemPrice[i].innerHTML;
    //     $('#price').append ('<br>' + price);
    //   }

    // }

  });

  $('.order_add').on('click', function(){
    var myIndex = $('.food_image').index(this);
    $('#items').append ('<br>' + itemName);

  });

});
