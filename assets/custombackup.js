/*-----------------------------------------------------------------------------/
/ Custom Theme JS
/-----------------------------------------------------------------------------*/

// Insert any custom theme js here...
/*
(function(){
  
  
  function _promiseHeaderSlideIn(){
  }
  
  function _promiseHeaderSlideOut() {
  }
  
  
})();
*/

/*
$("select").change(function() {
  $('.product__sku').html("SKU: " + $("#sizeSelector option:selected").attr('data-sku'))
}).change();
*/

/*
$("select").change(function() {
  console.log($("#sizeSelector").find(":selected").attr('data-sku'))
});
*/

/*
$( "select" )
  .change(function() {
    var str = "";
    $( "#sizeSelector option" ).each(function() {
      str += $( this ).attr('data-sku') + " " + $( this ).attr('selected');
    });
    $( ".product__sku" ).html( str );
  })
  .trigger( "change" );
*/

/*
var function1 = function() {

    var deferred = $.Deferred();

  console.log("A: " + $("#sizeSelector").find(":selected").attr('data-sku'))

    return deferred;
}

var function2 = function() {

  console.log("B: " + $("#sizeSelector").find(":selected").attr('data-sku'))
}

$('select').on('change', function() {

    function1().then(function2);
});
*/
/*
$("select").change(function() {
  $('.product__sku').html("SKU: " + $("#sizeSelector option:selected").attr('data-sku'))
}).change();
*/

/*

$( "select" )
  .change(function() {
    var str = "";
  $( "#sizeSelector :selected" ).each(function() {
    str += "SKU: "+ $( this ).attr('data-sku');
    });
    $( ".product__sku" ).html( str );
  })
  .trigger( "change" );
  */