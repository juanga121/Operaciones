function sumar() {
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;

    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);

    if (isNaN(numero1) || isNaN(numero2)) {
        document.getElementById("resultado").textContent = "Por favor, ingresa números válidos.";
    } else {
        var suma = numero1 - numero2;

        document.getElementById("resultado").textContent = "el resultado es: " + suma
    }
}

