const fecthPokemons = () => {
    const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`
    
    const pokemonPromise = []

    for(let i = 1; i<=150; i++){
        pokemonPromise.push(fetch(getPokemonUrl(i)).then(response => response.json()))
    }

    Promise.all(pokemonPromise)
    .then(pokemons => {
       /// console.log(pokemons)
       const liPokemons = pokemons.reduce((accumulator, pokemon) =>{
             accumulator+= `<li>${pokemon.name}</li>`
             return accumulator;
       }, '')

       console.log(liPokemons)
    })
}

fecthPokemons()