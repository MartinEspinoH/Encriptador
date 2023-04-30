function encriptar(){
    let inputIngresar = document.getElementById("inputIngresar").value;
    let mensaje = document.getElementById("parrafoMensaje");
    let imgBusqueda = document.getElementById("imgBusqueda");
    let textoCifrado = inputIngresar
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    
    if (document.getElementById("inputIngresar").value.length !=0){
        document.getElementById("inputIngresar").value = textoCifrado;
        mensaje.textContent =  "Listo! texto encriptado con exito!.";
        imgBusqueda.src = "./imagenes/encriptado.jpg";
    }else {
        imgBusqueda.src = "./imagenes/busqueda.png";
        mensaje.textContent = "Ingresa tu texto y oprime el boton de encriptar o desencriptar.";
        document.getElementById("ocultar").style.display = "block";
        Swal.fire({
            title: 'Ingresa por lo menos una letra',
            html: 'Autocierre <b></b> milliseconds.',
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading()
              const b = Swal.getHtmlContainer().querySelector('b')
              timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
              }, 100)
            },
            willClose: () => {
              clearInterval(timerInterval)
            }
          }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
              console.log('I was closed by the timer')
            }
          })
    }
}

function desencriptar(){
    let mensaje = document.getElementById("parrafoMensaje");
    let inputIngresar = document.getElementById("inputIngresar").value;   
    let imgBusqueda = document.getElementById("imgBusqueda");
    let textoCifrado = inputIngresar
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

    if(document.getElementById("inputIngresar").value.length != 0){
        document.getElementById("inputIngresar").value = textoCifrado;
        mensaje.textContent = "Ahora tienes el texto desencriptado.";
        imgBusqueda.src = "./imagenes/desencriptado.png";
    } else{
        imgBusqueda.src = "./imagenes/busqueda.png";
        mensaje.textContent = "Ingresa tu texto y oprime el boton de encriptar o desencriptar.";
        document.getElementById("ocultar").style.display = "block";
        Swal.fire({
            title: 'Ingresa por lo menos una letra',
            html: 'Autocierre <b></b> milliseconds.',
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading()
              const b = Swal.getHtmlContainer().querySelector('b')
              timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
              }, 100)
            },
            willClose: () => {
              clearInterval(timerInterval)
            }
          }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
              console.log('I was closed by the timer')
            }
          })
    }
}

function copiarTexto(){
    let inputIngresar = document.getElementById("inputIngresar");
    inputIngresar.select();
    document.execCommand('copy');

}