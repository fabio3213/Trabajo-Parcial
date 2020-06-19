class pakimon {
    constructor(nombre, vida, tipo, genero, clase) {
        this.nombre = nombre,   
        this.vida = vida,
        this.tipo = tipo,
        this.genero = genero,
        this.clase = clase
    }

    cualidades() {
       console.log(`Las caracteristicas de ${this.nombre} son las siguientes:
       --> Su tipo es: ${this.tipo}
       --> Su genero es: ${this.genero}
       --> Su clase es: ${this.clase}
       --> Su vida es: ${this.vida}
       `)
    }
    
}

module.exports = pakimon
;