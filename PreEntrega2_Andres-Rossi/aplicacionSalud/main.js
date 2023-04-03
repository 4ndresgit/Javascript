// Obtener elementos del DOM
const hombreBtn = document.getElementById('hombre-btn');
const mujerBtn = document.getElementById('mujer-btn');
const edadInput = document.querySelector('input[placeholder="Edad"]');
const alturaInput = document.querySelector('input[placeholder="Altura"]');
const pesoInput = document.querySelector('input[placeholder="Peso"]');
const calcularBtn = document.getElementById('calcular-btn');
const resultadoCard = document.getElementById('resultado-card');
const resultadoText = document.getElementById('resultado-text');

// Variables globales
let genero = '';
let edad = 0;
let altura = 0;
let peso = 0;

// Función para calcular el IMC
function calcularIMC() {
  // Convertir altura a metros
  const alturaMetros = altura / 100;

  // Calcular IMC
  const imc = peso / (alturaMetros * alturaMetros);

  // Determinar la categoría de peso
  let categoria = '';
  if (imc < 18.5) {
    categoria = 'Bajo peso';
  } else if (imc >= 18.5 && imc < 25) {
    categoria = 'Peso normal';
  } else if (imc >= 25 && imc < 30) {
    categoria = 'Sobrepeso';
  } else {
    categoria = 'Obesidad';
  }

  // Mostrar resultado en pantalla
  resultadoText.textContent = `Tu IMC es ${imc.toFixed(
    1
  )} y estás en la categoría de ${categoria}.`;
  resultadoCard.style.display = 'block';
}

// Asignar eventos a los botones de género
hombreBtn.addEventListener('click', function () {
  genero = 'Hombre';
});

mujerBtn.addEventListener('click', function () {
  genero = 'Mujer';
});

// Asignar eventos al botón de calcular
calcularBtn.addEventListener('click', function () {
  // Obtener los valores de los inputs
  edad = Number(edadInput.value);
  altura = Number(alturaInput.value);
  peso = Number(pesoInput.value);

  // Validar que se hayan ingresado todos los valores
  if (genero === '' || isNaN(edad) || isNaN(altura) || isNaN(peso)) {
    alert('Por favor ingresa todos los valores necesarios.');
    return;
  }

  // Calcular el IMC y mostrar resultado en pantalla
  calcularIMC();
});

/*/ Definimos los datos de los géneros
const generos = [
  { id: 1, nombre: 'Hombre' },
  { id: 2, nombre: 'Mujer' },
];

// Definimos la función para obtener el género seleccionado
const hombreBtn = document.getElementById('hombre-btn');
const mujerBtn = document.getElementById('mujer-btn');

hombreBtn.addEventListener('click', () => {
  hombreBtn.classList.add('active');
  mujerBtn.classList.remove('active');
});

mujerBtn.addEventListener('click', () => {
  mujerBtn.classList.add('active');
  hombreBtn.classList.remove('active');
});

function obtenerGeneroSeleccionado() {
  const generoSeleccionadoBtn = document.querySelector('.card-btn.active');
  const generoSeleccionadoNombre = generoSeleccionadoBtn.textContent;
  const generoSeleccionado = generos.find(
    (genero) => genero.nombre === generoSeleccionadoNombre
  );
  return generoSeleccionado;
}

// Definimos la función para obtener la edad ingresada
function obtenerEdadIngresada() {
  const edadIngresada = document.querySelector(
    '.card:nth-child(2) .card-input'
  ).value;
  return parseInt(edadIngresada);
}

// Definimos la función para obtener la altura ingresada
function obtenerAlturaIngresada() {
  const alturaIngresada = document.querySelector(
    '.card:nth-child(3) .card-input'
  ).value;
  return parseFloat(alturaIngresada);
}

// Definimos la función para obtener el peso ingresado
function obtenerPesoIngresado() {
  const pesoIngresado = document.querySelector(
    '.card:nth-child(4) .card-input'
  ).value;
  return parseFloat(pesoIngresado);
}

function validarDatos() {
  const edadIngresada = obtenerEdadIngresada();
  const alturaIngresada = obtenerAlturaIngresada();
  const pesoIngresado = obtenerPesoIngresado();

  if (isNaN(edadIngresada) || isNaN(alturaIngresada) || isNaN(pesoIngresado)) {
    alert('Los datos ingresados son inválidos');
    return false;
  }

  return true;
}

// Definimos la función para calcular el IMC
function calcularIMC() {
  const generoSeleccionado = obtenerGeneroSeleccionado();
  const edadIngresada = obtenerEdadIngresada();
  const alturaIngresada = obtenerAlturaIngresada();
  const pesoIngresado = obtenerPesoIngresado();

  if (!validarDatos()) {
    return;
  }

  // Convertimos la altura de centímetros a metros
  const alturaMetros = alturaIngresada / 100;

  // Calculamos el IMC
  const imc = pesoIngresado / (alturaMetros * alturaMetros);

  // Definimos los rangos de IMC por género
  const imcRangosPorGenero = [
    { generoId: 1, rango: { min: 20, max: 25 } },
    { generoId: 2, rango: { min: 19, max: 24 } },
  ];

  // Obtenemos el rango de IMC para el género seleccionado
  const imcRango = imcRangosPorGenero.find(
    (rango) => rango.generoId === generoSeleccionado.id
  ).rango;

  // Definimos el mensaje de resultado
  let mensajeResultado = `Tu IMC es ${imc.toFixed(2)}. `;
  if (imc < imcRango.min) {
    mensajeResultado += 'Estás por debajo del peso ideal.';
  } else if (imc > imcRango.max) {
    mensajeResultado += 'Estás por encima del peso ideal.';
  }

  // Definimos la función para actualizar el resultado en pantalla
  function actualizarResultado(mensaje) {
    const resultadoElemento = document.querySelector('.result');
    resultadoElemento.textContent = mensaje;
  }

  // Definimos la función para validar si los datos ingresados son válidos
  function validarDatos() {
    const generoSeleccionado = obtenerGeneroSeleccionado();
    const edadIngresada = obtenerEdadIngresada();
    const alturaIngresada = obtenerAlturaIngresada();
    const pesoIngresado = obtenerPesoIngresado();

    if (edadIngresada < 0 || edadIngresada > 150) {
      alert('La edad ingresada no es válida');
      return false;
    }
    // Actualizamos el resultado en pantalla
    actualizarResultado(mensajeResultado);

    if (alturaIngresada < 50 || alturaIngresada > 300) {
      alert('La altura ingresada no es válida');
      return false;
    }

    if (pesoIngresado < 20 || pesoIngresado > 500) {
      alert('El peso ingresado no es válido');
      return false;
    }

    return true;
  }
}

const resultadoCard = document.getElementById('resultado-card');
const resultadoText = document.getElementById('resultado-text');

resultadoText.innerText = 'Tu IMC es: ' + imc.toFixed(2);

resultadoCard.style.display = 'block';

const btnCalcularIMC = document.getElementById('calcular-btn');
btnCalcularIMC.addEventListener('click', calcularIMC);

const calcularBtn = document.getElementById('calcular-btn');

calcularBtn.addEventListener('click', () => {
  calcularIMC();

  // Mostrar resultado
  const resultadoCard = document.getElementById('resultado-card');
  resultadoCard.style.display = 'block';
});
*/
