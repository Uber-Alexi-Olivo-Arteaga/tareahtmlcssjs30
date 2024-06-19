class Cadenas{
  ejer1(){
    // Ingresar y mostrar cada carácter: Crea un programa que permita al usuario
    // ingresar una cadena y luego imprima cada carácter de la cadena en una línea
    // diferente.
    let uno = document.getElementById("uno").value
    let resp = document.getElementById("resp")
    let n = 0
    for (let i = 0; i < uno.length; i++) {
      n = uno[i]
      resp.innerHTML += `${n} <br>`
    }
  }
  
  ejer2(){
    // Contar vocales: Crea un programa que permita al usuario ingresar una cadena y
    // luego cuente e imprima el número de vocales en la cadena.
    let frase = document.getElementById("cantidad").value
    let resp = document.getElementById("resp")
    let r = 0
    for (let i = 0; i < frase.length; i++) {
      let letra = frase[i];
      // Verificar si la letra es una vocal
      if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
        r++; // Incrementar el contador si es una vocal
      }
    }
    resp.innerHTML=`la camtidad de vocales en el arreglo es de : ${r}`
  }
  
  ejer3(){
    // Mostrar caracteres en posiciones pares: Crea un programa que permita al
    // usuario ingresar una cadena y luego imprima los caracteres en las posiciones
    // pares de la cadena.
    let pares = document.getElementById("pares").value
    let resp = document.getElementById("resp")
    let n = 0
    for (let i = 0; i < pares.length; i++) {
      n = pares[i]
      if (i % 2 === 1) {
          resp.innerHTML += `${n}`
        }
    }
}
  
  ejer4(){
    // Convertir a mayúsculas: Crea un programa que permita al usuario ingresar una
    // cadena y luego imprima cada carácter en mayúsculas.
    let cadena = document.getElementById("cadena").value; 
    let resp = document.getElementById("resp")
    let cad = cadena.split(";")
    for (let i = 0; i < cad.length; i++) {
      let m = cad[i]
      let mayuscula = m.toUpperCase()
      resp.innerHTML += `${mayuscula} <br>`
    }
  }

  ejer5(){
    // Convertir a mayúsculas: Crea un programa que permita al usuario ingresar una
    // cadena y luego imprima cada carácter en mayúsculas.
    let cadena = document.getElementById("cadena").value;
    let resp = document.getElementById("resp");
    
    // Recorrer cada carácter de la cadena
    for (let i = 0; i < cadena.length; i++) {
      let char = cadena[i];
      let mayuscula = char.toUpperCase(); // Convertir el carácter a mayúscula
      resp.innerHTML += `${mayuscula} <br>`;
    }
}
  
  ejer6(){
    //Presentar el primer carácter: de una cadena las veces que indica la longitud de
    //la cadena.
    let cadena = document.getElementById("cadena").value; 
    let resp = document.getElementById("resp")
    let cad = cadena.split(";")
    for (let i = 0; i < cad.length; i++) {
      let m = cad[i]
      for (let o = 0; o < m.length; o++) {
      let p = m[0]
      resp.innerHTML += `${p} <br>`
      }
    }
  }
  
  ejer7(){
    // Invertir la cadena: Crea un programa que permita al usuario ingresar una
    // cadena y luego imprima la cadena invertida.
    let alrevez = document.getElementById("alrevez").value;
    let resp = document.getElementById("resp");
    let m = alrevez.split('').reverse().join('');
    resp.innerHTML = `${m}`;
  }
  
  ejer8(){
    // Frecuencia de caracteres: Crea un programa que permita al usuario ingresar
    // una cadena y luego cuente e imprima la frecuencia del ultimo carácter en la
    // cadena.
    let cadena = document.getElementById("cadena").value;
    let resp = document.getElementById("resp");
    if (cadena.length === 0) {
      resultado.innerHTML = "Por favor, ingresa una cadena.";
    }else{
      let ultimoCaracter = cadena[cadena.length - 1];
      let frecuencia = 0;
      for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === ultimoCaracter) {
          frecuencia++;
        }
      }
      resp.innerHTML = `El último carácter es "${ultimoCaracter}" y aparece ${frecuencia} veces en la cadena.`;
    }
  }

  ejer9(){
    // Contar caracteres: Crea un programa que permita al usuario ingresar una
    // cadena y luego la recorra para contar cuantos caracteres tiene la cadena.
    let contar = document.getElementById("contar").value
    let resp = document.getElementById("resp")
    let n =0
    while (n <= contar.length) {
      n++
    }
    resp.innerHTML= `numeros de la cadena ingresada es de: ${n}`;
  }
  
  ejer10(){
    // Eliminar espacios: Crea un programa que permita al usuario ingresar una
    // cadena y luego imprima todos los caracteres menos los espacios.
    let cadena = document.getElementById("cadena").value;
    let resp = document.getElementById("resp");
    let n = cadena.replace(/ /g, ''); 
    resp.innerHTML = `${n}` 
  }
}

const cadenas = new Cadenas();

function limpiarR() {
  document.getElementById("resp");
  resp.textContent = "resultado";
}