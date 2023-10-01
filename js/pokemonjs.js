// variables funcion iniciarJuego
const seleccionAtaque   = document.getElementById('seleccionar-ataque')
const historial         = document.getElementById('mensajes')
const botonSeleccion    = document.getElementById("botonseleccion")
let bagua
let bfuego
let btierra
const breset            = document.getElementById("bReiniciar")
const contenedor        = document.getElementById("contenedorTarjetas")

//variables funcion seleccionarMascota
const spanMascotaJugador    = document.getElementById('mascotaJugador')
const seleccionMascotaDi    = document.getElementById('seleccion-mascota')
const imagenCombat          = document.getElementById('combateAjustes')

//varaibles funcion mascotaEnemiga
const spanEnemigo       = document.getElementById('mascotaEnemiga')
const imagenCombat2     = document.getElementById('ajuste2')

//variables funcion combate
const vidasJugador = document.getElementById('vidasjugador')
const vidasEnemigo = document.getElementById('vidasenemigo')

//funciones crearMensaje
const section   = document.getElementById('result')
const aJugador  = document.getElementById('aJugador')
const aEnemigo  = document.getElementById('aEnemigo')
const historia  = document.getElementById('result')

//funciones indexAmbosOponentes
let indexAtaqueJugador
let indexAtaqueEnemigo

//variables del backend
let jugadorId = null


const conteAta      = document.getElementById('contenedorAtaques')

let pokemones       = []
let ataqueJugador 
let ataqueEnemigo   = []
let miAtaque
let resultado

let victoriasJugador    = 0
let vicotriasEnemigo    = 0
let vidasDelJugador     = 3
let vidasDelEnemigo     = 3
let opcionDePokemones
let combatePic
let combatePic2

console.log(vidasDelJugador)
console.log(vidasDelEnemigo)

let mascotaAtaques
let botonesAtaques
let botoness = []
let ataquesPokemonEnemigo

let inputSqui  
let inputCharm  
let inputBulb
let inputSwam
let inputVol 
let inputSGrou 

//canvas
const b1 = document.getElementById('b1')
const b2 = document.getElementById('b2')
const b3 = document.getElementById('b3')
const b4 = document.getElementById('b4')
const verMapa       = document.getElementById('verMapa')
const mapa          = document.getElementById('mapa')
let lienzo          = mapa.getContext("2d")
let intervalo
let mapaBackground  = new Image()
mapaBackground.src  = './mapa.jpg'
let mascotaJugadorObjeto

let alturaQueBuscamos
let anchoDelMapa    = window.innerWidth - 30 

alturaQueBuscamos   = (anchoDelMapa*250)/750
const anchoMaximoDelMapa = 800

if(anchoDelMapa > anchoMaximoDelMapa){
    anchoDelMapa = anchoMaximoDelMapa - 20
}

mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos

console.log(mapa.width)
console.log(mapa.height)

let xs = mapa.width * .87
let ys = mapa.height* .75 



class Pokemon { 
    constructor(nombre, foto, vida, fotoMapa, x = 10, y = 10){
        this.nombre = nombre
        this.foto = foto
        this.vida =vida
        this.ataques = []
        this.x = x
        this.y = y
        this.ancho = 90
        this.alto = 90
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }
    pintarPokemon(){
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }
}

let squirtle    = new Pokemon('Squirtle','./fotosPokemones/Squirtle.png', 4, './fotosPokemones/cabezas/Squirtle.png')
let charmander  = new Pokemon('Charmander','./fotosPokemones/charmander.png', 4, './fotosPokemones/cabezas/charmander.png')
let bulbasaur   = new Pokemon('Bulbasaur','./fotosPokemones/bulbasaur.png', 4, './fotosPokemones/cabezas/bulbasaur.png')
let swampert    = new Pokemon('Swampert','./fotosPokemones/swanpert.png', 4, './fotosPokemones/cabezas/swanpert.png')
let volcanion   = new Pokemon('Volcanion','./fotosPokemones/Volcanion.png', 4 ,'./fotosPokemones/cabezas/Volcanion.png')
let ground      = new Pokemon('Ground','./fotosPokemones/ground.png', 4, './fotosPokemones/cabezas/ground.png')

let squirtleEnemigo    = new Pokemon('Squirtle','./fotosPokemones/Squirtle.png', 4, './fotosPokemones/cabezas/Squirtle.png', aleatorio(100,xs), aleatorio(100,ys))
let charmanderEnemigo  = new Pokemon('Charmander','./fotosPokemones/charmander.png', 4, './fotosPokemones/cabezas/charmander.png', aleatorio(100,xs), aleatorio(100,ys))
let bulbasaurEnemigo   = new Pokemon('Bulbasaur','./fotosPokemones/bulbasaur.png', 4, './fotosPokemones/cabezas/bulbasaur.png', aleatorio(100,xs), aleatorio(100,ys))
let swampertEnemigo    = new Pokemon('Swampert','./fotosPokemones/swanpert.png', 4, './fotosPokemones/cabezas/swanpert.png', aleatorio(100,xs), aleatorio(100,ys))
let volcanionEnemigo   = new Pokemon('Volcanion','./fotosPokemones/Volcanion.png', 4 ,'./fotosPokemones/cabezas/Volcanion.png',aleatorio(100,xs), aleatorio(100,ys))
let groundEnemigo      = new Pokemon('Ground','./fotosPokemones/ground.png', 4, './fotosPokemones/cabezas/ground.png',aleatorio(100,xs),aleatorio(100,ys))

squirtle.ataques.push(
    {nombre: '💧', id:'bAgua'},
    {nombre: '💧', id:'bAgua'},
    {nombre: '💧', id:'bAgua'},
    {nombre: '🌿', id:'bTierra'},
    {nombre: '🌿', id:'bTierra'},
    {nombre: '🔥', id:'bFuego'}
)
charmander.ataques.push(
    {nombre: '🔥', id:'bFuego'},
    {nombre: '🔥', id:'bFuego'},
    {nombre: '🔥', id:'bFuego'},
    {nombre: '🌿', id:'bTierra'},
    {nombre: '🌿', id:'bTierra'},
    {nombre: '💧', id:'bAgua'}
)
bulbasaur.ataques.push(
    {nombre: '🌿', id:'bTierra'},
    {nombre: '🌿', id:'bTierra'},
    {nombre: '🌿', id:'bTierra'},
    {nombre: '💧', id:'bAgua'},
    {nombre: '💧', id:'bAgua'},
    {nombre: '🔥', id:'bFuego'}
)
swampert.ataques.push(
    {nombre: '🌿', id:'bTierra'},
    {nombre: '🌿', id:'bTierra'},
    {nombre: '🌿', id:'bTierra'},
    {nombre: '💧', id:'bAgua'},
    {nombre: '💧', id:'bAgua'},
    {nombre: '🔥', id:'bFuego'}
)
volcanion.ataques.push(
    {nombre: '🔥', id:'bFuego'},
    {nombre: '🔥', id:'bFuego'},
    {nombre: '🔥', id:'bFuego'},
    {nombre: '💧', id:'bAgua'},
    {nombre: '💧', id:'bAgua'},
    {nombre: '🌿', id:'bTierra'}
)
ground.ataques.push(
    {nombre: '🌿', id:'bTierra'},
    {nombre: '🌿', id:'bTierra'},
    {nombre: '🌿', id:'bTierra'},
    {nombre: '🔥', id:'bFuego'},
    {nombre: '🔥', id:'bFuego'},
    {nombre: '💧', id:'bAgua'}
)

pokemones.push(squirtle,charmander,bulbasaur,swampert,volcanion,ground)


function iniciarJuego(){
    seleccionAtaque.style.display = 'none' 
    verMapa.style.display = 'none'

    pokemones.forEach((pokemon) => {
        opcionDePokemones = `
        <input type="radio" name="mascota" id=${pokemon.nombre} />
        <label class="tarjeta-de-pokemon" for=${pokemon.nombre}>
            <p>${pokemon.nombre}</p>
            <img src=${pokemon.foto} alt=${pokemon.nombre}>
        </label> 
        `
        contenedor.innerHTML += opcionDePokemones
    })
    inputSqui   = document.getElementById('Squirtle')
    inputCharm  = document.getElementById('Charmander')
    inputBulb   = document.getElementById('Bulbasaur')
    inputSwam   = document.getElementById('Swampert')
    inputVol    = document.getElementById('Volcanion')
    inputSGrou  = document.getElementById('Ground')

    historial.style.display = 'none'

    botonSeleccion.addEventListener('click', seleccionarMascota)

    // bagua.addEventListener('click', ataqueAgua)
    // bfuego.addEventListener('click', ataqueFuego)    
    // btierra.addEventListener('click', ataqueTierra)

    breset.addEventListener('click', superReset)
    breset.style.display = 'none'

    unirseAlJuego()
}

function unirseAlJuego(){
    fetch("http://localhost:8080/unirse")
        .then(function(res){    
            if (res.ok){
                res.text()
                    .then(function(respuesta){
                        console.log(respuesta)
                        jugadorId = respuesta
                    })
            }
        })  
}

function ataqueFuego(){
    ataqueJugador = 'FUEGO🔥'
    miAtaque = 1
    ataqueEnemigoAl()
    combate()   
}

function ataqueAgua(){
    ataqueJugador = "AGUA💧"
    miAtaque = 2
    ataqueEnemigoAl()
    combate()
}

function ataqueTierra(){
    ataqueJugador = 'TIERRA🌿'
    miAtaque = 3
    ataqueEnemigoAl()
    combate()  
}

function ataqueEnemigoAl(){
    ataqueAleatorio = aleatorio(0,5)

    if ((ataqueAleatorio == 0) || (ataqueAleatorio == 1)){
        ataqueEnemigo.push('FUEGO🔥')
    } else if ((ataqueAleatorio == 2) || (ataqueAleatorio == 3)){
        ataqueEnemigo.push('AGUA💧')
    } else if ((ataqueAleatorio == 4) || (ataqueAleatorio == 5)){
        ataqueEnemigo.push('TIERRA🌿')
    }

    console.log(ataqueEnemigo)
    // return ataqueAleatorio

    iniciaCombate()
}

function iniciaCombate(){
    if (ataqueDelJugador.length == 6){
        combate()
    }
}

function seleccionarMascota(){

    if (inputSqui.checked) {
        spanMascotaJugador.innerHTML = inputSqui.id
        combatePic = `<img src=${squirtle.foto} class="pc1" id="sq" alt= ${squirtle.nombre} >`
        imagenCombat.innerHTML += combatePic
        mascotaAtaques = inputSqui.id

    } else if (inputCharm.checked){
        spanMascotaJugador.innerHTML = inputCharm.id
        combatePic = `<img src=${charmander.foto} class="pc1" id="sq" alt= ${charmander.nombre} >`
        imagenCombat.innerHTML += combatePic
        mascotaAtaques = inputCharm.id

    }else if (inputBulb.checked){
        spanMascotaJugador.innerHTML = inputBulb.id
        combatePic = `<img src=${bulbasaur.foto} class="pc1" id="sq" alt= ${bulbasaur.nombre} >`
        imagenCombat.innerHTML += combatePic
        mascotaAtaques = inputBulb.id

    }else if (inputSwam.checked){
        spanMascotaJugador.innerHTML = inputSwam.id
        combatePic = `<img src=${swampert.foto} class="pc1" id="sq" alt= ${swampert.nombre} >`
        imagenCombat.innerHTML += combatePic
        mascotaAtaques = inputSwam.id

    }else if (inputVol.checked){
        spanMascotaJugador.innerHTML = inputVol.id
        combatePic = `<img src=${volcanion.foto} class="pc1" id="sq" alt= ${volcanion.nombre} >`
        imagenCombat.innerHTML += combatePic
        mascotaAtaques = inputVol.id

    }else if (inputSGrou.checked){
        spanMascotaJugador.innerHTML = inputSGrou.id
        combatePic = `<img src=${ground.foto} class="pc1" id="sq" alt= ${ground.nombre} >`
        imagenCombat.innerHTML += combatePic
        mascotaAtaques = inputSGrou.id

    } else{
        alert('SELECCIONA UNA MASCOTA')        
    }

    if (inputBulb.checked || inputCharm.checked || inputSGrou.checked || inputSqui.checked || inputSwam.checked || inputVol.checked == true){
         
        seleccionMascotaDi.style.display = 'none'

        //seleccionAtaque.style.display = 'flex'
        iniciarMapa()

    }
    

    extraerAtaques(mascotaAtaques)
    seleccionarPokemonBackend(mascotaAtaques)
}

function seleccionarPokemonBackend(mascotaAtaques){
    fetch(`http://localhost:8080/pokemon/${jugadorId}`, {
        method: "post" ,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            pokemon : mascotaAtaques
        })
    })

}

function iniciarMapa () {
    // mapa.width = 800
    // mapa.height= 600
    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)
    verMapa.style.display = 'flex'
    intervalo = setInterval(pintarCanvas, 50)

    window.addEventListener('keydown', sePresionoUnaTecla)
    window.addEventListener('keyup', detenerMovimiento)

}

function sePresionoUnaTecla(event) {
    //console.log(event.key)
    switch (event.key) {
        case 'ArrowUp':
            moverPokemonU()
            break
        
        case 'ArrowDown':
            moverPokemonA()
            break

        case 'ArrowLeft':
            moverPokemonI()
            break

        case 'ArrowRight':
            moverPokemonD()
            break

        default: 
            break;
    }

}

function pintarCanvas() {

    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage (
        mapaBackground,
        0,
        0,
        mapa.width, 
        mapa.height
    )
    mascotaJugadorObjeto.pintarPokemon()

    enviarPosicion(mascotaJugadorObjeto.x , mascotaJugadorObjeto.y)

    squirtleEnemigo.pintarPokemon()
    charmanderEnemigo.pintarPokemon()
    bulbasaurEnemigo.pintarPokemon()
    swampertEnemigo.pintarPokemon()
    volcanionEnemigo.pintarPokemon()
    groundEnemigo.pintarPokemon()

    if (mascotaJugadorObjeto.velocidadX !==0 || mascotaJugadorObjeto.velocidadY !==0){
        revisarColision(squirtleEnemigo)
        revisarColision(charmanderEnemigo)
        revisarColision(bulbasaurEnemigo)
        revisarColision(swampertEnemigo)
        revisarColision(volcanionEnemigo)
        revisarColision(groundEnemigo)
    }   
}

function enviarPosicion(x, y){
    fetch(`http://localhost:8080/pokemon/${jugadorId}/position`, {
        method: "post" ,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            x: x,
            y: y       //Abreviado, puede  solo x: x
        })
    })

}

function moverPokemonD () {
    mascotaJugadorObjeto.velocidadX = 5
}
function moverPokemonI () {
    mascotaJugadorObjeto.velocidadX = -5  
}
function moverPokemonU () {
    mascotaJugadorObjeto.velocidadY = -5  
}
function moverPokemonA () {
    mascotaJugadorObjeto.velocidadY = 5   
}

function detenerMovimiento() {
    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0

}


let ataquesArray

function extraerAtaques(mascotaAtaques){
    for (let i = 0; i < pokemones.length; i++) {
        if (mascotaAtaques == pokemones[i].nombre){
            ataquesArray = pokemones[i].ataques
        }   
    }
    mostrarAtaques()
}

function obtenerObjetoMascota() {
    for (let i = 0; i < pokemones.length; i++) {
        if (mascotaAtaques == pokemones[i].nombre){
            return pokemones[i]
        }   
    }
}

function mostrarAtaques(){
    ataquesArray.forEach((ataque) => {
        botonesAtaques = ` <button id=  ${ataque.id} class="BAtaqueS"> ${ataque.nombre}  </button> `
        conteAta.innerHTML += botonesAtaques
    })
    
    bagua = document.getElementById("bAgua")
    bfuego = document.getElementById("bFuego")
    btierra  = document.getElementById("bTierra")

    botoness = document.querySelectorAll('.BAtaqueS')

    // bagua.addEventListener('click', ataqueAgua)
    // bfuego.addEventListener('click', ataqueFuego)    
    // btierra.addEventListener('click', ataqueTierra)

    secuenciaDeAtaque()
}

let ataqueDelJugador = []

function secuenciaDeAtaque(){
    botoness.forEach((boton) => {
        boton.addEventListener('click', (e) =>{
            // console.log(e)
            if (e.target.textContent === " 🔥  "){
                ataqueDelJugador.push('FUEGO🔥')
                console.log(ataqueDelJugador)
                boton.style.background = '#112f58'
                boton.style.display = 'none'
            } else if (e.target.textContent === " 🌿  "){
                ataqueDelJugador.push('TIERRA🌿')
                console.log(ataqueDelJugador)
                boton.style.background = '#112f58'
                boton.style.display = 'none'
            } else {
                ataqueDelJugador.push('AGUA💧')
                console.log(ataqueDelJugador)
                boton.style.background = '#112f58'
                boton.style.display = 'none'
            }
            ataqueEnemigoAl()
        })
    })  
}

function mascotaEnemiga(enemigo){
    // let mascotaAleatorio = aleatorio(0,(pokemones.length -1))
    
    spanEnemigo.innerHTML = enemigo.nombre

    ataquesPokemonEnemigo = enemigo.ataques

    combatePic2 = `<img src=  ${enemigo.foto}  class="yo1"  id="sq"  alt= ${enemigo.nombre}  >`
    imagenCombat2.innerHTML += combatePic2

}

function crearMensaje(){    
    historia.style.display = 'flex' 

    let nuevoAtaqueJugador = document.createElement('p')
    let nuevoAtaqueEnemigo = document.createElement('p')

    // section.innerHTML = resultado
    nuevoAtaqueEnemigo.innerHTML = indexAtaqueEnemigo
    nuevoAtaqueJugador.innerHTML = indexAtaqueJugador

    //let parrafo = document.createElement('p')
    //parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador +', y la mascota de tu enemigo atacó con ' + ' '+ ataqueEnemigo + ' así que ' + resultado
    //con el diseño del css nos cargamos esto
    aJugador.appendChild(nuevoAtaqueEnemigo)
    aEnemigo.appendChild(nuevoAtaqueJugador)
}

function crearMensajeFinal(resultadoFinal){ 
    //let parrafo = document.createElement('p') con el diseño del css nos cargamos esto
    section.innerHTML = resultadoFinal
    // section.appendChild(parrafo) con el diseño del css nos cargamos esto
    bagua.disabled= true
    bfuego.disabled= true   
    btierra.disabled= true
} 

function indexAmbosOponentes(jugador,enemigo){
    indexAtaqueJugador = ataqueDelJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]

}

function combate(){
    for (let index = 0; index < ataqueDelJugador.length; index++) {
        if (ataqueDelJugador[index] == ataqueEnemigo[index]) {
            indexAmbosOponentes(index,index)
            resultado = "EMPATE"
        } else if (ataqueDelJugador[index] == 'FUEGO🔥' && ataqueEnemigo[index] == 'TIERRA🌿'){
            indexAmbosOponentes(index,index)
            resultado = "GANASTE 🏆"
            victoriasJugador++
            
        } else if (ataqueDelJugador[index] == 'AGUA💧' && ataqueEnemigo[index] == 'FUEGO🔥'){
            indexAmbosOponentes(index,index)
            resultado = "GANASTE 🏆"
            victoriasJugador++
            
        } else if (ataqueDelJugador[index] == 'TIERRA🌿' && ataqueEnemigo[index] == 'AGUA💧'){
            indexAmbosOponentes(index,index)
            resultado = "GANASTE 🏆"
            victoriasJugador++
            
        } else {
            indexAmbosOponentes(index,index)
            resultado = "PERDISTE 🤦‍♂️"
            vicotriasEnemigo++
            

        }
        crearMensaje(resultado)  

    }
    vidasJugador.innerHTML = victoriasJugador
    vidasEnemigo.innerHTML = vicotriasEnemigo
    revisarVidas()
}

function revisarVidas() {
    if (vicotriasEnemigo > victoriasJugador){
        crearMensajeFinal("LO SIENTO PERDISTE 😪")
        breset.addEventListener('click', superReset)
        breset.style.display = 'block'
    } else if (victoriasJugador > vicotriasEnemigo){
        crearMensajeFinal("FELICITACIONES GANASTE 🏆") 
        breset.addEventListener('click', superReset)
        breset.style.display = 'block'
    } else if (victoriasJugador == vicotriasEnemigo){
        crearMensajeFinal("== EMPATE ==") 
        breset.addEventListener('click', superReset)
        breset.style.display = 'block'
    }
}

function superReset(){
    location.reload()
}

function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

function revisarColision(enemigo) {
    const arribaEnemigo     = enemigo.y
    const abajoEnemigo      = enemigo.y + enemigo.alto
    const derechaEnemigo    = enemigo.x + enemigo.ancho
    const izquierdaEnemigo  = enemigo.x 

    const arribaMascota     = mascotaJugadorObjeto.y
    const abajoMascota      = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaMascota    = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
    const izquierdaMascota  = mascotaJugadorObjeto.x 

    if(
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ) {
        return;
    }
    detenerMovimiento()
    verMapa.style.display = 'none   '
    mascotaJugadorObjeto.x = 1000
    mascotaJugadorObjeto.y = 1000
    seleccionAtaque.style.display = 'flex'

    mascotaEnemiga(enemigo)

}

window.addEventListener('load',iniciarJuego)