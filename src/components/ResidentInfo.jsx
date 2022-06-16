import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ResidentInfo = ({resident}) => {

    const [character, setCharacter] = useState()

    useEffect(() => {
      
        axios.get(resident)
            .then(res => setCharacter(res.data))
            .catch(err => console.log(err))
      
    }, [])

    // otra opcion de hacer el status
    // let color = {
    //     color: 'gray'
    // }
    // if(character) {
    //     if(character.status === 'Alive') {
    //         color.color = 'green'
    //     } else if(character.status === 'Dead') {
    //         color.color = 'red'
    //     }
    // }

  return (
    <section className='section__Target'>
        <div>
            <img src={character?.image} alt="image" />
        </div>
        <div>
            <h2>{character?.name}</h2>
            <p><i className={`bx bxs-circle ${character?.status}`}></i> {character?.status}</p>
            <p><span>Origin: </span>{character?.origin.name} </p>
            <p><span>Episodes where appear: </span>{character?.episode.length} </p>
        </div>
    </section>
  )
}

export default ResidentInfo