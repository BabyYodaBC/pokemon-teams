const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`
const main = document.querySelector('main')

document.addEventListener("DOMContentLoaded", event => {
    fetchTrainers();
    addPokemon();
    removePoke()
})

function fetchTrainers(){
    fetch(TRAINERS_URL)
    .then(resp => resp.json())
    .then( trainer => trainer.forEach( x => {renderTrainers(x)}))
}

function renderTrainers(trainer) {
    const mainCon = document.getElementsByTagName("main")[0]
    const divCard = document.createElement("div")
    const ul = document.createElement("ul")
    const tPokes = trainer.pokemons
    divCard.dataset.id = trainer.id
    divCard.className = "card"
    divCard.innerHTML = `
        <p>${trainer.name}</p>
        <button data-trainer-id="${trainer.id}">Add Pokemon</button>
        `
    tPokes.forEach( pokemon => {
        ul.innerHTML += `
        <li>${pokemon.nickname}  (${pokemon.species}) <button class="release" data-pokemon-id="${pokemon.id}">Release</button></li>
        `
        divCard.appendChild(ul)
    })
    mainCon.appendChild(divCard)
}

function addPokemon() {
    main.addEventListener("click", event => {
        if (event.target.innerText === "Add Pokemon")
            fetch(POKEMONS_URL, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    // "accept": "application/json"
                },
                body: JSON.stringify({ trainer_id: event.target.dataset.trainerId })
        })
        .then(resp => resp.json())
        .then( poke => {
            if(!poke.error) {
                // let cardi = document.querySelector(`[data-trainer-id="${event.target.dataset.trainerId}"]`) //this is how you search by datsrt properties
                let cardi = event.target.parentNode.querySelector("ul")
                cardi.innerHTML += `
                    <li>${poke.nickname}  (${poke.species}) <button class="release" data-pokemon-id="${poke.id}">Release</button></li>
                    `
                }

            })
    })
}

function removePoke() {
        main.addEventListener("click", event => {
            if (event.target.innerText === "Release") {
            console.log(event.target.dataset)
            fetch(`${POKEMONS_URL}/${event.target.dataset.pokemonId}`, {
                method: "DELETE"})
            event.target.parentNode.remove()
        }})
    }

