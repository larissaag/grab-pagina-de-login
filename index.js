function validaForm (event) {
    let elemento = document.getElementById("usuario");
    if (elemento.value < 3) {
        
        document.getElementById("usuario").style.borderColor = "#FF5757";
        document.getElementById("usuario").focus();
        document.getElementById("email-valido").style.visibility = 'visible';

        return false;
    }
}