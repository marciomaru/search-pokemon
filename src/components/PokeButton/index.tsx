import { useState } from 'react'
import getPokeIcon from '../../utils/getPokeIcon'
import getPokemon from '../../utils/getPokemon';
import PokemonType from '../../types/PokemonType';
import styles from './PokeButton.module.scss'

interface Props {
    pokeId: string;
    setPokemon: React.Dispatch<React.SetStateAction<PokemonType | undefined>>
}

export function PokeButton({ pokeId, setPokemon }: Props) {
    const [pokeIcon, setPokeIcon] = useState<string>()

    getPokeIcon(setPokeIcon, pokeId)

    function handleChangePokemon() {
        getPokemon(setPokemon, pokeId)
    }

    return (
        <button className={styles.container} onClick={handleChangePokemon}>
            <img src={pokeIcon} />
        </button>
    )
}