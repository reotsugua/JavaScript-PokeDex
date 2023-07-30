

const PokeApi = {}

// PokeApi.getPokemons = function (params) {
    
// }
PokeApi.getPokemons = (offset = 0, limit = 20) => {
    
    const url =  `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    
    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .catch((error) => console.error(error))
        // .finally(function () {
        //     console.log('requisição concluida!')
        // })
}

Promise.all([
    fetch('https://pokeapi.co/api/v2/pokemon/1'),
    fetch('https://pokeapi.co/api/v2/pokemon/2'),
    fetch('https://pokeapi.co/api/v2/pokemon/3'),
    fetch('https://pokeapi.co/api/v2/pokemon/4')
]).then((results) => {
    console.log(results)
})