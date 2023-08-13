<?php 
    $nombre = $_POST["nombre"];
    $celular = $_POST["celular"];
    $email = $_POST["email"];
    $asunto = $_POST["asunto"];
    $mensaje = $_POST["mensaje"];
    $validoNombre = is_string($nombre);
    if(empty($nombre) || empty($asunto) || empty($celular) || empty($email) || empty($mensaje)){
            echo '<p class="enviadoError text-center"><i class="fa-solid fa-hand"></i> Error, todos los campos deben estar correctamente completados.</p>';
    }else{
        $destino = "delcyadaliz@gmail.com";
        $asunto = "Formulario de contacto de www.codigopalante.com.ar";
        $message = "Hola Delcy!, este mensaje viene del formulario de tu sitio web";
        $web = "\nRegresar a página principal: www.codigopalante.com.ar";
        $contenido = "Nombre: " . $nombre . "\nAsunto: " . $asunto ."\nCelular: " . $celular . "\nEmail: " . $email . "\nMensaje: " . $mensaje  . $web;
        mail($destino, $celular, $contenido , $message);
       echo '<p class="enviadoOk text-center" id="mandadoOKK"><i class="fa-solid fa-thumbs-up"></i> Formulario envíado correctamente... pronto le responderemos, revise los correos no deseados.</p>';
       echo '<script>console.log("El formulario ya se mandó el correo");</script>';

    
    }
 ?>