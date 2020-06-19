const pokachus = require("./pakimon");
const pakimon = require("./pakimon");


class malevor extends pakimon {
    constructor(nombre, vida, tipo,genero, clase, poderEspecial) {
        super(nombre,vida,tipo,genero,clase)
        this.poderEspecial = poderEspecial
    }

    atacar() {
        console.log(`${this.nombre}, RAPIDO USA PODER ESPECIAL ${this.poderEspecial} Y TERMINA LA BATALLA!!!
        `)
    }

    
}

module.exports = malevor;



