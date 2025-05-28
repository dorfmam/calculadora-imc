function calcular(event) {
    event.preventDefault();

    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;
    let resultado = document.getElementById("resultado");

    let imc = peso / (altura * altura);

    if (imc < 17) {
        resultado.innerHTML =
            "Seu IMC é: " + imc.toFixed(2) + ". Você está muito abaixo do peso.";
    } else if (imc > 17 && imc <= 18.49) {
        resultado.innerHTML =
            "Seu IMC é: " + imc.toFixed(2) + ". Você está abaixo do peso.";
    } else if (imc >= 18.5 && imc < 24.99) {
        resultado.innerHTML =
            "Seu IMC é: " + imc.toFixed(2) + ". Você está no peso ideal.";
    } else if (imc > 25 && imc <= 29.99) {
        resultado.innerHTML =
            "Seu IMC é: " + imc.toFixed(2) + ". Você está acima do peso.";
    } else if (imc >= 30) {
        resultado.innerHTML =
            "Seu IMC é: " + imc.toFixed(2) + ". Você está muito acima do peso.";
    }

    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
}
