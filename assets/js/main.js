
function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon">
            <span class="number">#001</span>
            <span class="name">${pokemon.name}</span>
            
            <div class="detail">
                <ol class="types">
                    <li class="type">grass</li>
                    <li class="type">poison</li>
                </ol>    

                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" 
                    alt="${pokemon.name}">
            </div>
        </li>
    `
}


const pokemonList = document.getElementById('pokemonList');

PokeApi.getPokemons().then((pokemons = []) => {    
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('');
    // const newList = pokemons.map((pokemon) => convertPokemonToLi(pokemon))
    
    // const newList = pokemons.map((pokemon) => {
    //     return convertPokemonToLi(pokemon);
    // })
    
    
    
    
    
    
    
    
    // const listItems = [];
    
    // for (let i = 0; i < pokemons.length; i++) {
    //     const pokemon = pokemons[i];
    //     listItems.push(convertPokemonToLi(pokemon));
    // }
    // console.log(listItems)
})



