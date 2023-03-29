class IMCCalculator {
  constructor(peso, altura) {
    this.peso = peso;
    this.altura = altura;
  }

  calcularImc() {
    let indiceEntero = this.peso / (this.altura * this.altura);
    return indiceEntero.toFixed(2);
  }

  interpretarIMC(imc) {
    if (imc < 16) {
      return 'Delgadez extrema';
    } else if (imc <= 16.99) {
      return 'Delgadez moderada';
    } else if (imc <= 18.49) {
      return 'Delgadez aceptable';
    } else if (imc <= 24.99) {
      return 'Peso normal';
    } else if (imc <= 30) {
      return 'Sobrepeso';
    } else if (imc <= 34.99) {
      return 'Obesidad tipo 1';
    } else if (imc <= 40) {
      return 'Obesidad tipo 2';
    } else if (imc <= 49.99) {
      return 'Obesidad tipo 3';
    } else if (imc > 50) {
      return 'Obesidad extrema';
    }
  }
}

/*let respuesta = '';
while (respuesta !== 'N') {
  let peso = Number(prompt('Ingrese su peso en Kgs.'));
  let altura = Number(prompt('ingrese su altura en Mts.'));

  const imcCalculator = new IMCCalculator(peso, altura);

  const imc = imcCalculator.calcularIMC();

  const interpretacionIMC = imcCalculator.interpretarIMC(imc);

  alert(`Su IMC es ${imc} e indica que tiene "${interpretacionIMC}"`);

  respuesta = prompt(
    'Ingrese "Y" para calcular nuevamente o "N" para terminar. '
  ).toUpperCase();
}


/*class IMCCalculator {
  constructor(peso, altura) {
    this.peso = peso;
    this.altura = altura;
  }

  calcularIMC() {
    let indiceEntero = this.peso / (this.altura * this.altura);
    return indiceEntero.toFixed(2);
  }

  interpretarIMC(imc) {
    if (imc < 16) {
      return 'Delgadez extrema';
    } else if (imc <= 16.99) {
      return 'Delgadez moderada';
    } else if (imc <= 18.49) {
      return 'Delgadez aceptable';
    } else if (imc <= 24.99) {
      return 'Peso normal';
    } else if (imc <= 30) {
      return 'Sobrepeso';
    } else if (imc <= 34.99) {
      return 'Obesidad tipo 1';
    } else if (imc <= 40) {
      return 'Obesidad tipo 2';
    } else if (imc <= 49.99) {
      return 'Obesidad tipo 3';
    } else if (imc > 50) {
      return 'Obesidad extrema';
    }
  }
}
*/
const calcularBtn = document.querySelector('#calcular-btn');
const resultadoDiv = document.querySelector('#resultado');

calcularBtn.addEventListener('click', () => {
  const peso = parseFloat(document.querySelector('#peso').value);
  const altura = parseFloat(document.querySelector('#altura').value);

  const imcCalculator = new IMCCalculator(peso, altura);
  const imc = imcCalculator.calcularImc();
  const interpretacionIMC = imcCalculator.interpretarIMC(imc);

  resultadoDiv.innerHTML = `<p>Su IMC es ${imc} e indica que tiene "${interpretacionIMC}"</p>`;
});
