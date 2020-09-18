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


    var myIndex = $('.food_image').index(this);
    console.log(myIndex);
    var foodImage = document.getElementsByClassName('food_image');
    console.log(foodImage);
    var foodName = document.getElementsByClassName('food_name');
    console.log(foodName);
    var foodPrice = document.getElementsByClassName('food_price');
    console.log(foodPrice);

    for (var i=0; i<foodPrice.length; i++){

      if (myIndex == i){
        console.log(foodName[i].innerHTML);
        console.log(foodPrice[i].innerHTML);
        console.log(typeof(foodImage[i]));
        var name = foodName[i].innerHTML;
        var price = foodPrice[i].innerHTML;
        $('.white_box .food_name').text(name );
        $('.white_box .food_price').text(price);
        $('.white_box .modal_food_name').prepend(foodImage[i] );
      }

    }
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
  //
  $('.add_order_text').on('click', function(){

    var myIndex = $('.add_order_text').index(this);
    console.log(myIndex);

    var foodName = document.getElementsByClassName('modal_food_name');
    console.log(foodName);
    var modalPrice = document.getElementsByClassName('modal_food_price');
    console.log(modalPrice);

    for (var i=0; i<modalPrice.length; i++){

      if (myIndex == i){
        console.log(foodName[i].innerHTML);
        console.log(modalPrice[i].innerHTML);
        var name = foodName[i].innerHTML;
        var price = modalPrice[i].innerHTML;
        $('.item_list').append ( name + '<br>');
        $('.price_list').append ( price + '<br>');
      }

    }

  });

  // $('.food_image').on('click', function(){
  //
  //   var myIndex = $('.food_image').index(this);
  //   console.log(myIndex);
  //
  //   var foodName = document.getElementsByClassName('food_name');
  //   console.log(foodName);
  //   var foodPrice = document.getElementsByClassName('food_price');
  //   console.log(foodPrice);
  //
  //   for (var i=0; i<foodPrice.length; i++){
  //
  //     if (myIndex == i){
  //       console.log(foodName[i].innerHTML);
  //       console.log(foodPrice[i].innerHTML);
  //       var name = foodName[i].innerHTML;
  //       var price = foodPrice[i].innerHTML;
  //       $('.white_box .food_name').text(name );
  //       $('.white_box .food_price').text(price);
  //     }
  //
  //   }
  //
  // });
  //

});
