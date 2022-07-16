import { useEffect, useState } from 'react'
import getPokeIcon from '../../utils/getPokeIcon'
import PokemonType from '../../types/PokemonType'
import { PokeButton } from '../PokeButton'
import styles from './PokeButtonList.module.scss'
import { isLimit, isNegative } from '../../utils/verifyNumber'

interface Props {
    setPokemon: React.Dispatch<React.SetStateAction<PokemonType | undefined>>;
    numInicial: string | undefined;
    numFinal: string | undefined;
}

export function PokeButtonList({ setPokemon, numInicial = '0', numFinal = "0" }: Props) {
    let list: JSX.Element[] = []

    function handleNumInicial() {
        return isNegative(numInicial) ? 1 : Number.parseInt(numInicial)
    }

    function handleNumFinal() {
        return isLimit(numInicial, numFinal) ? 0 : Number.parseInt(numFinal)
    }


    for (let id: number = handleNumInicial(); id <= handleNumFinal(); id++) {

        list.push(<PokeButton pokeId={id.toString()} setPokemon={setPokemon} />)
    }

    return (
        <ul className={styles.list}>
            {list.map(e => e)}
        </ul>
    )
}