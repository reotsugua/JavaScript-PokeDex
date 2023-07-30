

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