import React from 'react'

const Location = ({name, country}) => {
  return (
    <>
        <div className="location">
            <span className="material-icons-sharp">fmd_good</span><p>{name}, {country}</p>
          </div>
    </>
  )
}

export default Location