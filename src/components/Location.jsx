import React from 'react'
import rickAndMorty from './assets/rickAndMorty.png'

const Location = ({locations}) => {

  return (
      <section className='location' >
        <div className='info'>
          <img src={rickAndMorty} alt="" />
          <h2>Rick And Morty Wiki</h2>
        </div>
        <div className='head'>
        <h1>{locations?.name}</h1>
        <div>
            <ul className='list'>
                <li><strong>type: </strong>{locations.type} </li>
                <li><strong>dimension: </strong>{locations.dimension} </li>
                <li><strong>population: </strong>{locations.residents.length} </li>
            </ul>
        </div>
        </div>
    </section>
  )
}

export default Location