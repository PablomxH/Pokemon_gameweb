const cors      = require('cors')
const express   = require("express")

const app = express()

app.use(cors())                     //Problema de CORS importamos y ejecutamos la funcion

app.use(express.json())             //Habilitamos la capacidad de recibir peticiones post en formato JSON


const jugadores = []                //Lista que almacena a nuestros jugadores

class Jugador{
    constructor(id){                            //asignamos id al jugador
        this.id = id
    }

    asignarPokemon(Pokemon){                    //asignamos pokemon al id del jugador
        this.Pokemon = Pokemon
    }  
    actualizarPosicion(x, y){
        this.x = x
        this.y = y
    } 
}

class Pokemon{
    constructor(nombre){
        this.nombre = nombre
    }
}

app.get("/unirse", (req, res) => {
    const id = `${Math.random()}`

    const jugador = new Jugador(id)
    jugadores.push(jugador)

    res.setHeader("Access-Control-Allow-Origin", "*")

    res.send(id)
})

app.post("/pokemon/:jugadorId", (req, res) => {     //Extraccion del id del jugador
    const jugadorId = req.params.jugadorId || " "

    const nombre = req.body.pokemon || " "
    const pokemon = new Pokemon(nombre)
    
    const jugadorIndex = jugadores.findIndex((Jugador) => jugadorId === Jugador.id)
    if (jugadorIndex >= 0){
        jugadores[jugadorIndex].asignarPokemon(pokemon)
    }

    console.log(jugadores)
    console.log(jugadorId)
    res.end()
})

app.post("/pokemon/:jugadorId/position", (req, res) => {
    const jugadorId = req.params.jugadorId || " "
    const x = req.body.x || 0
    const y = req.body.y || 0

    const jugadorIndex = jugadores.findIndex((Jugador) => jugadorId === Jugador.id)
    if (jugadorIndex >= 0){
        jugadores[jugadorIndex].actualizarPosicion(x, y)
    }
    res.end() 

}) 

app.listen(8080, () => {
    console.log("Servidor en linea")
})

