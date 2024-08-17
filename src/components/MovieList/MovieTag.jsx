import React from 'react'

const MovieTag = ({genre}) => {
  return (
    <button className='ms-1 btn btn-success'>#{genre.name}</button>
  )
}

export default MovieTag
