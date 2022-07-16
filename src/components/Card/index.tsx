import PokemonType from '../../types/PokemonType';
import styles from './Card.module.scss'

interface Props {
    data: PokemonType | undefined
}

export function Card({ data }: Props) {
    console.log('aaaa' + data)
    return (
        <div className={styles.container}>
            <img src={data ? data.pokeImage : 'http://'} />
            <section className={styles.info}>
                <div>
                    <label>Nome: </label>
                    <label>{data ? data.pokeName : 'nome do pokemon'}</label>
                </div>
                <div>
                    <label>Número: </label>
                    <label> {data ? data.pokeNumber : 'número do pokemon'} </label>
                </div>

            </section>
        </div>
    );
}