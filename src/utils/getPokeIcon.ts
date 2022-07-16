import api from '../api'


async function getPokeIcon(setPokeIcon: React.Dispatch<React.SetStateAction<string | undefined>>, name: string | undefined) {

    await api.get('pokemon/' + name)
        .then(response => {
            setPokeIcon(response.data.sprites.front_default);
        })
}

export default getPokeIcon;