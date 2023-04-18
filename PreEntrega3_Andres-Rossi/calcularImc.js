class IMCCalculator {
  constructor(peso, altura, sexo, edad) {
    this.peso = peso;
    this.altura = altura;
    this.sexo = sexo;
    this.edad = edad;
  }
  calcularImc() {
    let indice;
    if (this.sexo === 'Hombre') {
      indice = this.peso / (this.altura * this.altura) - 0.0022 * this.edad;
    } else {
      indice =
        (this.peso * 0.9) / (this.altura * this.altura) -
        7.9 * (this.edad / 100);
    }
    return indice.toFixed(2);
  }

  interpretarIMC(imc) {
    const rangos = [
      { valor: 16, mensaje: 'Delgadez extrema' },
      { valor: 16.99, mensaje: 'Delgadez moderada' },
      { valor: 18.49, mensaje: 'Delgadez aceptable' },
      { valor: 24.99, mensaje: 'Peso normal' },
      { valor: 30, mensaje: 'Sobrepeso' },
      { valor: 34.99, mensaje: 'Obesidad tipo 1' },
      { valor: 40, mensaje: 'Obesidad tipo 2' },
      { valor: 49.99, mensaje: 'Obesidad tipo 3' },
      { valor: Infinity, mensaje: 'Obesidad extrema' },
    ];

    for (let i = 0; i < rangos.length; i++) {
      if (imc < rangos[i].valor) {
        return rangos[i].mensaje;
      }
    }
  }
}

const calcularBtn = document.querySelector('#calcular-btn');
const resultadoDiv = document.querySelector('#resultado');

calcularBtn.addEventListener('click', () => {

  const peso = parseFloat(document.querySelector('#peso').value);
  const altura = parseFloat(document.querySelector('#altura').value) * 0.01;
  const sexo = document.querySelector('#sexo').value;

  const edad = parseInt(document.querySelector('#edad').value);
  const imcCalculator = new IMCCalculator(peso, altura, sexo, edad);

  const imc = imcCalculator.calcularImc();
  const interpretacionIMC = imcCalculator.interpretarIMC(imc);
  //Guardar el local Storage
  localStorage.setItem('peso', peso);
  localStorage.setItem('altura', altura);

  resultadoDiv.innerHTML = `<p>Su IMC es ${imc} e indica que tiene "${interpretacionIMC}"</p>`;
  mostrarConsejos(imc);
});

//Toma como parámetro el rango de peso y muestra en pantalla un mensaje con los consejos

function mostrarConsejos(imc) {
  let consejos =
    imc < 16
      ? 'Tu IMC indica que tienes delgadez severa. Es posible que estés por debajo de tu peso saludable. Para aumentar de peso, es importante que comas alimentos ricos en nutrientes y calorías, como frutos secos, semillas, aguacate, plátanos, carne, pescado, etc.'
      : imc >= 16 && imc < 18.5
      ? 'Tu IMC indica que tienes un peso inferior al normal. Es importante que comas una dieta equilibrada y saludable para aumentar de peso de manera saludable. Incluye alimentos ricos en nutrientes como frutas, verduras, carnes magras, pescado, frutos secos, semillas, etc.'
      : imc >= 18.5 && imc < 25
      ? 'Tu IMC indica que tienes un peso saludable. Sigue comiendo una dieta equilibrada y saludable y mantente activo para mantener tu peso saludable.'
      : imc >= 25 && imc < 30
      ? 'Tu IMC indica que tienes sobrepeso. Es importante que comiences a hacer cambios en tu dieta y actividad física para perder peso y mejorar tu salud. Comienza por comer menos alimentos procesados y más frutas, verduras, granos enteros, proteínas magras y grasas saludables. También puedes aumentar tu actividad física diaria, como caminar, nadar, correr, etc.'
      : imc >= 30
      ? 'Tu IMC indica que tienes obesidad. Es importante que hagas cambios significativos en tu dieta y actividad física para perder peso y mejorar tu salud. Habla con tu médico sobre las opciones de tratamiento para la obesidad y comienza por comer menos alimentos procesados y más frutas, verduras, granos enteros, proteínas magras y grasas saludables. También puedes aumentar tu actividad física diaria, como caminar, nadar, correr, etc.'
      : 'Ha ocurrido un error al mostrar los consejos.';

  document.querySelector('#consejos').innerHTML = consejos;
}

function calcularIMC() {
  const peso = usuario.getPeso();
  const altura = usuario.getAltura();
  const sexo = usuario.getSexo();
  const edad = usuario.getEdad();

  const imcCalculator = new IMCCalculator(
    peso,
    altura,
    sexo,
    usuario.getEdad()
  );
  const imc = imcCalculator.calcularImc();
  const interpretacionIMC = imcCalculator.interpretarIMC(imc);

  resultadoDiv.innerHTML = `<p>Su IMC es ${imc} e indica que tiene "${interpretacionIMC}"</p>`;
  mostrarConsejos(imc);

  //Guardar el local Storage
  localStorage.setItem('peso', peso);
  localStorage.setItem('altura', altura);
  localStorage.setItem('edad', edad);
  localStorage.setItem('sexo', sexo);
}

// Objeto que representa un usuario
class Usuario {
  constructor(nombre, edad, peso, altura, sexo) {
    this.nombre = nombre;
    this.edad = edad;
    this.peso = peso;
    this.sexo = sexo;
    this.altura = altura;
  }
}

// Array que contiene los usuarios
const usuarios = [
  new Usuario('Juan', 25, 70, 1.75),
  new Usuario('María', 30, 60, 1.6),
  new Usuario('Pedro', 40, 80, 1.8),
  new Usuario('Ana', 20, 55, 1.65),
];

// Búsqueda de usuario por nombre
function buscarUsuarioPorNombre(nombre) {
  return usuarios.find((usuario) => usuario.nombre === nombre);
}

// Filtrado de usuarios por edad
function filtrarUsuariosPorEdad(edadMinima, edadMaxima) {
  return usuarios.filter(
    (usuario) => usuario.edad >= edadMinima && usuario.edad <= edadMaxima
  );
}

// Filtrado de usuarios por peso
function filtrarUsuariosPorPeso(pesoMinimo, pesoMaximo) {
  return usuarios.filter(
    (usuario) => usuario.peso >= pesoMinimo && usuario.peso <= pesoMaximo
  );
}

// Filtrado de usuarios por altura
function filtrarUsuariosPorAltura(alturaMinima, alturaMaxima) {
  return usuarios.filter((usuario) => usuario.alt);
}

// Cargar valores del Local Storage
window.addEventListener('load', () => {
  const peso = localStorage.getItem('peso');
  const altura = localStorage.getItem('altura');
  if (peso && altura) {
    document.querySelector('#peso').value = peso;
    document.querySelector('#altura').value = altura;
  }
});
