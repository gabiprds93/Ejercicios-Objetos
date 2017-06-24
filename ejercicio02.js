var assert = require("assert");
function Nacimiento(nombre, dia, mes, anio)
{
    this.nombre = nombre;
    this.dia = dia;
    this.mes = mes;
    this.anio = anio;
    this.calcularEdad = function(){
        var resultado = 0;
        var fechaActual = new Date();
        if(this.mes == fechaActual.getMonth() + 1 && this.dia > fechaActual.getDate())
        {
            resultado = fechaActual.getFullYear() - this.anio - 1;
        }
        else if(this.mes > fechaActual.getMonth() + 1)
            resultado = fechaActual.getFullYear() - this.anio - 1;
        else
            resultado = fechaActual.getFullYear() - this.anio;
        return resultado; 
    };
}

var persona1 = new Nacimiento("Gaby", 21, 05, 1993);
var persona2 = new Nacimiento("Gaby", 23, 06, 1993);
var persona3 = new Nacimiento("Gaby", 24, 06, 1993);
var persona4 = new Nacimiento("Gaby", 21, 07, 1993);

describe("Pruebas Ejercicio 2 - Objetos", function(){
    it("nombre = Gaby, dia = 21, mes = 05, año = 1993, calcularEdad() = 24", function(){
       assert.equal(24, persona1.calcularEdad())
    });
    it("nombre = Gaby, dia = 23, mes = 06, año = 1993, calcularEdad() = 24", function(){
       assert.equal(24, persona2.calcularEdad())
    });
    it("nombre = Gaby, dia = 24, mes = 06, año = 1993, calcularEdad() = 23", function(){
       assert.equal(23, persona3.calcularEdad())
    });
    it("nombre = Gaby, dia = 21, mes = 07, año = 1993, calcularEdad() = 23", function(){
       assert.equal(23, persona4.calcularEdad())
    });
});