const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

document.addEventListener("DOMContentLoaded", function(event){
    fetchTrainers()

})

function fetchTrainers(){
    fetch(TRAINERS_URL)
    .then(resp => resp.json())
    .then( trainer => trainer.forEach( x => {renderTrainers(x)}))

}

function renderTrainers(trainer) {
    console.log(trainer.pokemons)
    const mainCon = document.getElementsByTagName("main")[0]
    const divCard = document.createElement("div")
    const ul = document.createElement("ul")
    const tPokes = trainer.pokemons
    divCard.dataset.id = trainer.id
    divCard.innerHTML = `
    <div class="card" data-id="${trainer.id}"><p>${trainer.name}</p>
    <button data-trainer-id="${trainer.id}">Add Pokemon</button>
  
    </div>
    `
    tPokes.forEach( pokemon => {
        ul.innerHTML = `
        <li>${pokemon.nickname}  (${pokemon.species}) <button class="release" data-pokemon-id="${pokemon.id}">Release</button></li>
        <li>${pokemon.nickname}  (${pokemon.species}) <button class="release" data-pokemon-id="${pokemon.id}">Release</button></li>
        <li>${pokemon.nickname}  (${pokemon.species}) <button class="release" data-pokemon-id="${pokemon.id}">Release</button></li>
        <li>${pokemon.nickname}  (${pokemon.species}) <button class="release" data-pokemon-id="${pokemon.id}">Release</button></li>
        <li>${pokemon.nickname}  (${pokemon.species}) <button class="release" data-pokemon-id="${pokemon.id}">Release</button></li>
        `
    })
    divCard.append(ul)
    mainCon.appendChild(divCard)
    
}




// function addPokemon() {
//     document.addEventListener("click", function(event){
//         event.preventDefault()
//         if (event.target.innerText === "Add Pokemon")
//             let new

//     })

