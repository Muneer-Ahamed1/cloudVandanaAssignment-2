import React from 'react'
import { useSelector } from 'react-redux'

function Loading() {
    const loader=useSelector((state)=>state.validation.loader);
    console.log(loader)
  return (
    <p className=' text-center'>{loader.message}</p>
  )
}

export default Loading