

let respuesta = '';
while (respuesta != 'N') {
  let peso = Number(prompt('Ingrese su peso en Kgs.'));
  let alto = Number(prompt('ingrese su altura en Mts.'));

  let indiceEntero = peso / (alto * alto);
  let imc = indiceEntero.toFixed(2);

  if (imc < 16) {
    alert('Su IMC es ' + imc + ' e indica que tiene "Delgadez extrema"');
  } else if (imc <= 16.99) {
    alert('Su IMC es ' + imc + ' e indica que tiene "Delgadez moderada"');
  } else if (imc <= 18.49) {
    alert('Su IMC es ' + imc + ' e indica que tiene "Delgadez aceptable"');
  } else if (imc <= 24.99) {
    alert('Su IMC es ' + imc + ' e indica que tiene "Peso normal"');
  } else if (imc <= 30) {
    alert('Su IMC es ' + imc + ' e indica que tiene "Sobrepeso"');
  } else if (imc <= 34.99) {
    alert('Su IMC es ' + imc + ' e indica que tiene "Obesidad tipo 1"');
  } else if (imc <= 40) {
    alert('Su IMC es ' + imc + ' e indica que tiene "Obesidad tipo 2"');
  } else if (imc <= 49.99) {
    alert('Su IMC es ' + imc + ' e indica que tiene "Obesidad tipo 3"');
  } else if (imc > 50) {
    alert('Su IMC es ' + imc + ' e indica que tiene "Obesidad extrema"');
  }

  respuesta = prompt(
    'Ingrese "Y" para calcular nuevamente o "N" para terminar. '
  ).toUpperCase();
}
