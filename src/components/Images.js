import React from 'react'

const Images = ({path}) => {
 const allWeather =["Clear","Clouds","Drizzle","Fog","Haze","Rain","Smoke","Snow","Thunderstrom","tornado"]
 const images= allWeather.includes(path) ? `/images/${path}.png` : `/images/Default.png` 
 

  return (
    <>
     <img src={images} alt="" />
  
      
    </>
  )
}

export default Images