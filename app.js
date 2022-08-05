const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

const generatePokemonsPromises = () => Array(150).fill().map((_, index) =>
fetch(getPokemonUrl(index + 1)).then(response => response.json()))

const generateHtml = pokemons => pokemons.reduce((accumulator, pokemon) =>{

     const types = pokemon.types.map(typeInfo => typeInfo.type.name)

          accumulator+= 
         `<li class="card ${types[0]}">
          <img class="card-image" alt="${pokemon.name}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"/>
          <h2 class="card-title"> ${pokemon.id}. ${pokemon.name}</h5>
          <p class="card-subtitle"> ${types.join(' | ')}</p>
          </li>`
          return accumulator;
    }, '')

 const insertPokemonsIntoPage = pokemons =>{
    const ul = document.querySelector('[data-js = "pokedex"]')
    ul.innerHTML = pokemons     
}
   
const pokemonPromise = generatePokemonsPromises()

Promise.all(pokemonPromise)
    .then(generateHtml)
       .then(insertPokemonsIntoPage)


