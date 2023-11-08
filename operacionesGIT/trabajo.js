function operacion(operador) {
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;

    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);

    if (isNaN(numero1) || isNaN(numero2)) {
        document.getElementById("resultado").textContent = "Por favor ingrese números válidos";
        return;
    }
    var resultado;

    switch (operador) {
        case "suma":
            resultado = numero1 + numero2;
            break;
        case "resta":
            resultado = numero1 - numero2;
            break;
        case "multiplicacion":
            resultado = numero1 * numero2;
            break;
        case "division":
            if (numero2 === 0) {
                document.getElementById("resultado").textContent = "No se puede dividir por cero.";
                return;
            }
            resultado = numero1 / numero2;
            break;
        default:
            document.getElementById("resultado").textContent = "Operación no válida.";
            return;
    }

    document.getElementById("resultado").textContent = "El resultado es: " + resultado;
}
