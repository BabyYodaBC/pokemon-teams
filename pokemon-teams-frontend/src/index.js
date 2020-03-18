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
    divCard.dataset.id = trainer.id
    divCard.innerHTML = `
    <div class="card" data-id="${trainer.id}"><p>${trainer.name}</p>
    <button data-trainer-id="${trainer.id}">Add Pokemon</button>
  <ul>
//     <li>${trainer.pokemons[0].nickname}  (${trainer.pokemons[0].species}) <button class="release" data-pokemon-id="${trainer.pokemons[0].id}">Release</button></li>
//     <li>${trainer.pokemons[1].nickname}  (${trainer.pokemons[1].species}) <button class="release" data-pokemon-id="${trainer.pokemons[1].id}">Release</button></li>
//     <li>${trainer.pokemons[2].nickname}  (${trainer.pokemons[2].species}) <button class="release" data-pokemon-id="${trainer.pokemons[2].id}">Release</button></li>
//     <li>${trainer.pokemons[3].nickname}  (${trainer.pokemons[3].species}) <button class="release" data-pokemon-id="${trainer.pokemons[3].id}">Release</button></li>
//     <li>${trainer.pokemons[4].nickname}  (${trainer.pokemons[4].species}) <button class="release" data-pokemon-id="${trainer.pokemons[4].id}">Release</button></li>
   </ul>
</div>
    `
    mainCon.appendChild(divCard)

}

function renderPokemon(trainer) {
    const tPokes = trainer.pokemons
    tPokes.forEach( pokemon => {
        const ul = documemt.createElement("ul")

    })

}



function addPokemon() {
    document.addEventListener("click", function(event){
        event.preventDefault()
        if (event.target.innerText === "Add Pokemon")
            let new

    })

}