function calculate() {
  var weight = document.getElementById('weight').value;
  var height = document.getElementById('height').value;

  if (weight !== '' && height !== '') {
    var bmi = weight / ((height / 100) ** 2);
    var result = document.getElementById('result');
    var advice = document.getElementById('advice');
    result.innerHTML = 'Tu IMC es: ' + bmi.toFixed(2);

    // Clasificacion del IMC
    if (bmi < 18.5) {
      result.innerHTML += ' - Bajo Peso';
      advice.innerHTML = 'Consulta con tu nutriólogo una dieta para aumentar tu peso de manera saludable.';
    } else if (bmi < 25) {
      result.innerHTML += ' - Peso Normal';
      advice.innerHTML = 'Felicidades gozas de buen peso, consulta con tu nutriologo una dieta para mantenerte en forma.';
    } else if (bmi < 30) {
      result.innerHTML += ' - Sobrepeso';
      advice.innerHTML = 'Consulta con tu nutriólogo una dieta para bajar de peso de manera saludable.';
    } else {
      result.innerHTML += ' - Obesidad';
      advice.innerHTML = 'Tu salud está riesgo, consulta con tu nutriólogo para saber la causa de el sobrepeso y poder solucionarla de manera saludable.';
    }
  }
}


