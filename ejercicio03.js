var assert = require("assert");
function Persona(nombre, edad, pasatiempo)
{
    this.nombre = nombre;
    this.edad = edad;
    this.pasatiempo = pasatiempo;
    this.presentar = function(){
        return "Hola soy " + this.nombre + " tengo " + this.edad + " años y me gusta " + this.pasatiempo;
    };
}

var persona1 = new Persona("Gaby", 24, "jugar videojuegos");

describe("Pruebas Ejercicio 3 - Objetos", function(){
    it("nombre = Gaby, edad = 24, pasatiempo = jugar videojuegos", function(){
       assert.equal("Hola soy Gaby tengo 24 años y me gusta jugar videojuegos", persona1.presentar())
    });
});