import { useState } from 'react';
import styles from './Header.module.scss';
import getPokemon from '../../utils/getPokemon'
import PokemonType from '../../types/PokemonType';
import { FaSearch } from 'react-icons/fa'



interface Props {
    setPokemon: React.Dispatch<React.SetStateAction<PokemonType | undefined>>;
    setNumInicial: React.Dispatch<React.SetStateAction<string | undefined>>;
    setNumFinal: React.Dispatch<React.SetStateAction<string | undefined>>
}

export function Header({ setPokemon, setNumInicial, setNumFinal }: Props) {

    const [name, setName] = useState<string>();



    return (
        <div className={styles.search}>
            <div className={styles.searchInput}>
                <label>
                    Nome ou número do pokemon: <input
                        type="text"
                        onChange={e =>
                            setName(e.target.value)}
                        placeholder='Pesquisar'
                    />
                </label>
                <button style={{ width: 30, height: 30 }} onClick={() => { getPokemon(setPokemon, name) }}>
                    <FaSearch />
                </button>
            </div>
            <div className={styles.searchRange}>
                <label>Escolha um intervalo de números</label>
                <label>
                    DE: <input
                        type={'text'}
                        onChange={e =>
                            setNumInicial(e.target.value)}
                        placeholder='0'
                    />ATÉ: <input
                        type={'text'}
                        onChange={e =>
                            setNumFinal(e.target.value)}
                        placeholder='0'
                    />
                </label>
                {/*<button style={{ width: 30, height: 30 }} onClick={() => { getPokemon(setPokemon, name) }} />*/}
            </div >
        </div >
    )
}