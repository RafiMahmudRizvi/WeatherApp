import React from 'react'

const Main = ({temp, desc}) => {
  return (
    <>
         <h1>{Math.round(temp)}° C</h1>
         <p className='temp-name'>{desc}</p>
    </>
  )
}

export default Main