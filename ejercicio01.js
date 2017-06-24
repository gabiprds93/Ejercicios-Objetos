var assert = require("assert");
function Rectangulo(base, altura)
{
    this.base = base;
    this.altura = altura;
    this.area = function(){
        if(isNaN(base) || isNaN(altura))
            return "Alguno de los dos valores no es un numero";
        return this.base * this.altura;
    };
}

var rectangulo1 = new Rectangulo(30, 10);
var rectangulo2 = new Rectangulo(30, "10");
var rectangulo3 = new Rectangulo("30", "hola");

describe("Pruebas Ejercicio 1 - Objetos", function(){
    it("base = 30 y altura = 10, area() = 300", function(){
       assert.equal(300, rectangulo1.area())
    });
    it("base = 30 y altura = \"10\", area() = 300", function(){
       assert.equal(300, rectangulo2.area())
    });
    it("base = \"30\" y altura = \"hola\", area() = Alguno de los dos valores no es un numero", function(){
       assert.equal("Alguno de los dos valores no es un numero", rectangulo3.area())
    });
});