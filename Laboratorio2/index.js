let campoVacio = "Rellene este campo.";

let nombreFormato = /^[A-Za-z\s]+$/;
let emailFormato = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;


function validacionNombre(){//hacemos una funcion para validar el nombre
        var campoNombreValor = document.getElementById("nombre").value;
        var campoNombre = document.getElementById("nombre");
        var nombreError = document.getElementById("nombreError");
       

        if(campoNombreValor.length == 0){//si el campo nombre es igual a 0 longitud
                nombreError.innerHTML = campoVacio;
                campoNombre.classList.add("imagenIncorrecto");
                campoNombre.classList.add("incorrecto");
                return false;
}
        if(!nombreFormato.test(campoNombreValor)){//si  nombreFormato (los caracteres validos) no es valido de el campo de input
                nombreError.innerHTML = "Nombre invalido.";
                campoNombre.classList.add("incorrecto");
                campoNombre.classList.add("imagenIncorrecto");
                return false;
}
        if(campoNombre.classList.contains("incorrecto")){//si campoNombre contiene incorrecto
                campoNombre.classList.remove("imagenIncorrecto");
                campoNombre.classList.remove("incorrecto");
                nombreError.innerHTML = "";
        } 
        campoNombre.classList.add("correcto");//despues de todo si es correcto, le añadimos la clase correcto y el icono correcto
        campoNombre.classList.add("imagenCorrecto");
       
        return true; 
};

function validacionEmail(){//hacemos una funcion para validar el Email
    var campoEmailValor = document.getElementById("email").value;
    var campoEmail = document.getElementById("email");
    var emailError = document.getElementById("emailError");
   

    if(campoEmailValor.length == 0){//si el campo Email es igual a 0 longitud
        emailError.innerHTML = campoVacio;
        campoEmail.classList.add("imagenIncorrecto");
        campoEmail.classList.add("incorrecto");
        return false;
}
    if(!emailFormato.test(campoEmailValor)){//si  EmailFormato (los caracteres validos) no es valido de el campo de input
        emailError.innerHTML = "Email inválido.";
        campoEmail.classList.add("incorrecto");
        campoEmail.classList.add("imagenIncorrecto");
        return false;
} 
    if(campoEmail.classList.contains("incorrecto")){//si campoEmail contiene incorrecto
        campoEmail.classList.remove("imagenIncorrecto");
        campoEmail.classList.remove("incorrecto");
        emailError.innerHTML = "";
} 
    campoEmail.classList.add("correcto");//despues de todo si es correcto, le añadimos la clase correcto y el icono correcto
    campoEmail.classList.add("imagenCorrecto");
   
    return true;
};

function validacionClave(){//hacemos una funcion para validar la Clave
    var campoClaveValor = document.getElementById("clave").value;
    var campoClave = document.getElementById("clave");
    var claveError = document.getElementById("claveError");
    var campoClave2Valor = document.getElementById("clave2").value;
    var campoClave2 = document.getElementById("clave2");
    var clave2Error = document.getElementById("clave2Error");

   if(campoClaveValor.length < 8){//si el valor del campoClave es menor que 8
        claveError.innerHTML = "Debe tener al menos 8 caracteres.";
        campoClave.classList.add("incorrecto");
        campoClave.classList.add("imagenIncorrecto");
   }else{
        campoClave.classList.add("correcto");
        campoClave.classList.add("imagenCorrecto");
   }

    if((campoClaveValor == campoClave2Valor) && campoClaveValor.length > 7){//si campoClaveValor y campoClave2Valor son iguales y su longitud es mayor a 7

        if(campoClave.classList.contains("incorrecto") || campoClave2.classList.contains("incorrecto")){//si campoClave contiene incorrecto
                campoClave.classList.remove("imagenIncorrecto");
                campoClave.classList.remove("incorrecto");
                claveError.innerHTML = "";
                clave2Error.innerHTML = "";
                campoClave2.classList.remove("incorrecto");
                campoClave2.classList.remove("imagenIncorrecto");
                    
        }

        campoClave2.classList.add("correcto");//despues de todo si es correcto, le añadimos la clase correcto y el icono correcto a los dos campos de clave
        campoClave2.classList.add("imagenCorrecto");
        campoClave.classList.add("correcto");
        campoClave.classList.add("imagenCorrecto");
        return true;
    }

    clave2Error.innerHTML = "Las contraseñas no coinciden";//despues de todo si es correcto, le añadimos la clase correcto y el icono correcto
    campoClave2.classList.add("incorrecto");
    campoClave2.classList.add("imagenIncorrecto");

    if(campoClaveValor.length == 0){//si la longitud de campoClave es 0
        claveError.innerHTML = campoVacio;
        campoClave.classList.add("incorrecto");
        campoClave.classList.add("imagenIncorrecto");
    }
    if(campoClave2Valor.length == 0){//si la longitud de campoClave2 es 0
        clave2Error.innerHTML = campoVacio;
        campoClave2.classList.add("incorrecto");
        campoClave2.classList.add("imagenIncorrecto");
    }
    return false;

};



function validacion(){//una funcion para validar si todo es verdadero

        var nombreCorrecto = validacionNombre();
        var EmailCorrecto = validacionEmail();
        var claveCorrecta = validacionClave();

    if(nombreCorrecto && EmailCorrecto && claveCorrecta){//si el nombre, el email y la clave es correcta, osea verdadera
       alert("La inscripción ha sido correcta.");
        return true;
}   else{
        return false;
}
}