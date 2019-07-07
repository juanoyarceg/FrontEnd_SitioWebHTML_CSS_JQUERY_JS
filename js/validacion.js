$(function() {
/*
	$.validator.setDefaults({
  	errorClass:'error-label',
    highlight: function(element){
    	$(element).addClass('error-control');
    },
    unhighlight: function(element){
    $(element).removeClass('error-control');
    }
  });
*/
  $("#mi-formulario").validate({
    rules: {
      email: {
        required: true,
        email: true
      },
     password: "required",
    password2: {
    required: true,
     equalTo: "#password"
      }
    },
    messages: {
      email: {
        required: 'Ingresa tu correo electrónico',
        email: 'Formato de correo no válido'
      },
    password: {
    required: 'Ingresa una contraseña',
     minlength: 'Largo insuficiente'
     },
     password2: {
      required: 'Rengresa la contraseña',
       equalTo: 'Las contraseñas ingresadas no coinciden',
        minlength: 'Largo insuficiente'

      }  
    }
  });
});
