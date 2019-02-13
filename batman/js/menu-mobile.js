var hiddenBox = $( ".navbar" );
$( ".navbar-mobile" ).on( "click touch", function( event ) {
  hiddenBox.toggle();
});

$(document).ready(function(){
   $(".navbar-mobile").click(function(){
     $(this).toggleClass('open');
     if ( $(".navbar").hasClass("open" )){
       $(".navbar").removeClass("open");
     } else {
       $(".navbar").addClass("open");
     }

    });
  });