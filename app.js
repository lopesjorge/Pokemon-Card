const fecthPokemons = () => {
    const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`
    
    const pokemonPromise = []

    for(let i = 1; i<=150; i++){
        pokemonPromise.push(fetch(getPokemonUrl(i)).then(response => response.json()))
    }

    Promise.all(pokemonPromise)
    .then(pokemons => {

        const liPokemons = pokemons.reduce((accumulator, pokemon) =>{

        const types = pokemon.types.map(typeInfo => typeInfo.type.name)

             accumulator+= 
            `<li class="card">
             <img class="card-image ${types[0]}" alt="${pokemon.name}" src="https://translate.google.com/website?sl=en&tl=pt&hl=pt-BR&prev=search&u=https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg"/>
             <h2 class="card-title"> ${pokemon.id}. ${pokemon.name}</h5>
             <p class="card-subtitle"> ${types.join(' | ')}</p>
             </li>`
             return accumulator;
       }, '')

       const ul = document.querySelector('[data-js = "pokedex"]')
       ul.innerHTML = liPokemons
    })
}

fecthPokemons()