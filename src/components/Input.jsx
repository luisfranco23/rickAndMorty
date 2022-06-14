import React, { useState } from 'react'

const Input = ({setSearchLocation}) => {

    const seacrhLocation = e =>{
      e.preventDefault()
      setSearchLocation(e.target.children[0].value)
    }

  return (
      <form onSubmit={seacrhLocation}>
        <input type="text" placeholder='Type a location id' />
        <button className='btn'>Search</button>
      </form>
  )
}

export default Input