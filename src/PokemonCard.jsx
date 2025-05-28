import { useEffect, useState } from 'react'
import './PokemonCard.css'
import axios from 'axios';

function PokemonCard({ handlePokemonCardClick, id }) {
    const [data, setData] = useState()
    const [name, setName] = useState()
    const shinyOdds = Math.random() * (100 - 1) + 1;
    const URL=`https://pokeapi.co/api/v2/pokemon/${id}`

    useEffect(() => {
        axios.get(URL).then((response) => {
            setData(response.data)
            setName(response.data.name)
        }).catch((err) => {
            console.log(err)
        })
    }, [URL])

    function imageGenerator() {
        const shiny = shinyOdds;
        return (shiny > 99 ? data?data.sprites.front_shiny:"<p>Loading...</p>" : data?data.sprites.front_default:"<p>Loading...</p>"
        )
    }


    return(
        <>
            <div className="card-container" onClick={() => {handlePokemonCardClick(name)}}>
                <div className="image-holder">
                    <img src={imageGenerator()} alt={`${name}`} />
                </div>
                <div className="name">
                    <h2>{name}</h2>
                </div>
            </div>
        </>
    )
}

export default PokemonCard