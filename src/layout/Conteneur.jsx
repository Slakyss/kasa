import React from 'react'
import "../styles/Conteneur.css"

function Conteneur({children}) {
    return (
        <div className='conteneur'>
            {children}
        </div>
    )
}

export default Conteneur