import api from '../api'
import PokemonType from '../types/PokemonType';


async function getPokemon(setPokemon: React.Dispatch<React.SetStateAction<PokemonType | undefined>>, name: string | undefined) {

    await api.get('pokemon/' + name)
        .then(response => {
            //const data = response.data.sprites['other']['official-artwork']["front_default"];
            const pokemon: PokemonType = {
                pokeImage: response.data.sprites.other['official-artwork'].front_default,
                pokeName: response.data.name,
                pokeNumber: response.data.id,
                pokeType: response.data.types,
                pokeIcon: response.data.sprites.front_default
            }
            setPokemon(pokemon);
        })

}

export default getPokemon;