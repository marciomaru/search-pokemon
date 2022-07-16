import { Card } from "../components/Card"
import getPokemon from '../utils/getPokemon'
import { useEffect, useState } from "react";
import styles from './Main.module.scss'
import PokemonType from "../types/PokemonType";
import { PokeButtonList } from "../components/PokeButtonList";
import { Header } from "../components/Header";
import pokeImage from '../images/logo-pokemon.png'

export default function Main() {
    const [pokemon, setPokemon] = useState<PokemonType>()
    const [numInicial, setNumInicial] = useState<string>()
    const [numFinal, setNumFinal] = useState<string>()

    useEffect(() => {
        getPokemon(setPokemon, 'pikachu')
    }, [])


    return (
        <div className={styles.container}>
            <h1>Escolha o seu <img src={pokeImage} /></h1>
            <Header
                setPokemon={setPokemon}
                setNumInicial={setNumInicial}
                setNumFinal={setNumFinal}
            />
            <main className={styles.main} >
                <Card data={pokemon} />
                <PokeButtonList
                    setPokemon={setPokemon}
                    numInicial={numInicial}
                    numFinal={numFinal}
                />
            </main>
        </div>
    )
}
