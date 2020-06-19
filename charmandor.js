const pakimon = require("./pakimon");


class charmandor extends pakimon {
    constructor(nombre, vida, tipo,genero, clase,ataqueLegendario) {
        super(nombre,vida,tipo, genero, clase)
        this.ataqueLegendario = ataqueLegendario
    }

    atacar() {
        console.log(`En batalla, su forma de luchar:
        ${this.nombre}, AHORA USA TU ATAQUE ${this.ataqueLegendario}
        `)
    }
    
}

module.exports = charmandor;
