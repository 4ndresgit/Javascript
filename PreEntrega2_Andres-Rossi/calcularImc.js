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

//Toma como parámetro el rango de peso y muestra en pantalla un mensaje con los consejos
function mostrarConsejos(rango) {
  let consejos = '';
  if (rango === 'Bajo peso') {
    consejos =
      'Algunos consejos para subir de peso son: consumir más calorías de las que se gastan, aumentar el consumo de proteínas y carbohidratos, realizar ejercicios de fuerza para aumentar la masa muscular, entre otros.';
  } else if (rango === 'Peso normal') {
    consejos =
      'Para mantener un peso saludable es importante seguir una dieta equilibrada, hacer ejercicio regularmente, dormir bien y controlar el estrés.';
  } else if (rango === 'Sobrepeso') {
    consejos =
      'Algunos consejos para bajar de peso son: seguir una dieta saludable y equilibrada, reducir el consumo de alimentos procesados y bebidas azucaradas, aumentar la actividad física, controlar las porciones de comida, entre otros.';
  } else if (rango === 'Obesidad') {
    consejos =
      'Es importante buscar ayuda profesional para tratar la obesidad, ya que puede estar asociada a problemas de salud graves. Algunos consejos generales son: seguir una dieta saludable y equilibrada, hacer ejercicio regularmente, reducir el estrés, controlar las porciones de comida, entre otros.';
  }
  // Mostrar los consejos en pantalla
  document.getElementById('consejos').innerText = consejos;
}

function calcularIMC() {
  // ...
  if (imc < 18.5) {
    resultado.textContent = `Tu IMC es ${imc.toFixed(
      1
    )}, lo que indica que tienes bajo peso`;
    mostrarConsejos('Bajo peso');
  } else if (imc >= 18.5 && imc < 25) {
    resultado.textContent = `Tu IMC es ${imc.toFixed(
      1
    )}, lo que indica que tienes un peso saludable`;
    mostrarConsejos('Peso saludable');
  } else if (imc >= 25 && imc < 30) {
    resultado.textContent = `Tu IMC es ${imc.toFixed(
      1
    )}, lo que indica que tienes sobrepeso`;
    mostrarConsejos('Sobrepeso');
  } else {
    resultado.textContent = `Tu IMC es ${imc.toFixed(
      1
    )}, lo que indica que tienes obesidad`;
    mostrarConsejos('Obesidad');
  }
}

// Objeto que representa un usuario
class Usuario {
  constructor(nombre, edad, peso, altura) {
    this.nombre = nombre;
    this.edad = edad;
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
