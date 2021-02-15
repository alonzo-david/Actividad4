//Variables utiles
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000;

//Valores de los recargos
var edad_18 = 0.1; // 10%
var edad_25 = 0.2; // 20%
var edad_50 = 0.3; // 30%

var casado_18 = 0.1; // 10%
var casado_25 = 0.2; // 20%
var casado_50 = 0.3; // 30%

var hijos_recargo = 0.2; // 20%

//Recargo
var recargo = 0;
var recargo_total = 0;

//Precio final
var precio_final = 0;

//Desea ingresar otra cotizacion
var cotizacion = "";

//recargo de la propiedad
var propiedad_recargo = 0.35;

//recargo de salario
var salario_recargo = 0.05;

do {
  //Mensajes de alerta para ingresar datos
  var nombre = prompt("Ingrese su nombre, por favor");
  var edad = parseInt(
    prompt("¿Cuantos años tiene? (Ingrese solamente números) ")
  );

  if (edad >= 18) {
    var casado = prompt("¿Está casado actualmente? si/no");
    //Comprobamos la edad del cónyuge, solamente si se está casado/a
    var edad_conyuge;
    if ("SI" == casado.toUpperCase()) {
      edad_conyuge = prompt(
        "¿Que edad tiene su esposo/a?  (Ingrese solamente números)"
      );
    }
    //convirtiendo las edades ingresadas a números
    var edad_numero = parseInt(edad);
    var edad_conyuge_numero = 0;
    //convirtiendo la edad del cónyuge si se esta casado/a
    if ("SI" == casado.toUpperCase()) {
      edad_conyuge_numero = parseInt(edad_conyuge);
    }

    var hijos = prompt("¿Tiene hijos o hijas? si/no");
    //Comprobamos la cantidad de hijos solamente si los tienen
    var cantidad_hijos;
    /**
     * 1. convierta la cantidad de hijos a numero
     */
    if ("SI" === hijos.toUpperCase()) {
      cantidad_hijos = parseInt(
        prompt("¿Cuántos hijos tiene?  (Ingrese solamente números)")
      );
    }

     /**
     * PUNTOS EXTRAS
     */

    /**
     * Recargo por la cantidad de propiedades
     */
    var propiedades = prompt("¿Tiene propiedades? si/no");
    var cantidad_propiedad;
    if ("SI" === propiedades.toUpperCase()) {
      cantidad_propiedad = parseInt(
        prompt("¿Cuántas propiedades tiene?  (Ingrese solamente números)")
      );
    }
    /**
     * Recargo por si tiene salario
     */
    var salario = prompt("¿Tiene Salario? si/no");
    var salario_monto;
    if ("SI" === salario.toUpperCase()) {
      salario_monto = Number(
        prompt("¿Cuál es su salario?  (Ingrese solamente números)")
      );
      while (salario_monto <= 0) {
        salario_monto = Number(
          prompt(
            "¿Cuál es su salario? ¡El salario debe ser mayor a 0! (Ingrese solamente números)"
          )
        );
      }
    }
    /**
     * FIN PUNTOS EXTRAS
     */

    //Aquí debe calcular el recargo total basado en las respuestas ingresadas

    //Aquí es donde debe de calcular los recargos y el valor final
    //Ejemplo (Debe completar los condicionales): Recargo por edad del asegurado
    if (edad_numero >= 18 && edad_numero < 25) {
      //Calculamos el recargo en base a la edad
      recargo = precio_base * edad_18;
      //Sumamos todos los recargos que hemos obtenido
      recargo_total = recargo_total + recargo;
    } else if (edad_numero >= 25 && edad_numero < 50) {
      recargo = precio_base * edad_25;
      recargo_total = recargo_total + recargo;
    } else if (edad_numero >= 50) {
      recargo = precio_base * edad_50;
      recargo_total = recargo_total + recargo;
    }
    //aqui puede colocar un else if() con el siguiente rango

    /**
     * 2. Recargo por la edad del conyuge
     */
    if ("SI" == casado.toUpperCase()) {
      if (edad_conyuge_numero >= 18 && edad_conyuge_numero < 25) {
        //Calculamos el recargo en base a la edad
        recargo = precio_base * casado_18;
        //Sumamos todos los recargos que hemos obtenido
        recargo_total = recargo_total + recargo;
      } else if (edad_conyuge_numero >= 25 && edad_conyuge_numero < 50) {
        recargo = precio_base * casado_25;
        recargo_total = recargo_total + recargo;
      } else if (edad_conyuge_numero >= 50) {
        recargo = precio_base * casado_50;
        recargo_total = recargo_total + recargo;
      }
    }

    /**
     * 3. Recargo por la cantidad de hijos
     */
    if ("SI" === hijos.toUpperCase()) {
      recargo = precio_base * hijos_recargo * cantidad_hijos;
      recargo_total = recargo_total + recargo;
    }

    /**
     * PUNTOS EXTRAS
     */

    /**
     * 4. Recargo por propiedades
     */
    if ("SI" === propiedades.toUpperCase()) {
      recargo = precio_base * propiedad_recargo * cantidad_propiedad;
      recargo_total = recargo_total + recargo;
    }

    /**
     * 5. Recargo por salario
     */
    if ("SI" === salario.toUpperCase()) {
      recargo = salario_monto * salario_recargo;
      recargo_total = recargo_total + recargo;
    }
    /**
     * FIN PUNTOS EXTRAS
     */

    precio_final = precio_base + recargo_total;
    //Resultado
    alert("Para el asegurado " + nombre);
    alert("El recargo total sera de: " + recargo_total);
    alert("El precio sera de: " + precio_final);

    recargo = 0;
    recargo_total = 0;
  } else {
    alert("La persona a asegurar tiene que ser mayor de edad.");
  }
  //noprotect
  cotizacion = prompt("¿Desea realizar otra cotización? si/salir");
} while ("SALIR" !== cotizacion.toUpperCase());
