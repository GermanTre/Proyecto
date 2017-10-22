(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function(){
  $('.slider').slider();
});

var user = 'hola';
var password = 'computadora';

$(function(){
  $("#password").keyup(function(event) {
    if (event.keyCode == 13) {
      $("#submit").click();
      console.log("hola");
    }
  });
});



$( "#submit" ).click(function() {
  if($("#user").val() === user && $('#password').val() === password){
    window.location = 'usuario.html'; //url de archivo
  } else{
    Materialize.toast('Usuario o contraseña incorrecto', 4000);
  }
});
