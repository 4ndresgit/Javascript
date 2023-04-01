// Definimos los datos de los géneros
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
const btnCalcularIMC = document.getElementById('calcular-btn');
btnCalcularIMC.addEventListener('click', calcularIMC);
