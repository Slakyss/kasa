import React, { useState } from "react"
import "./BlocDescription.css"

function BlocDescription(props) {
    const [isContentVisible, setIsContentVisible] = useState(true)

    const showContent = () => {
        setIsContentVisible(!isContentVisible)
    }

    return (
        <div className='appartement__description'>
            <p className={`description__header ${isContentVisible ? 'active' : ''}`} onClick={showContent}>
                <span>{props.title}</span>
                <i className={`fa-solid fa-chevron-up ${isContentVisible ? 'rotate' : ''}`}></i>
            </p>

            {isContentVisible && <p className='description__content'>{props.content}</p>}
        </div>
    )
}

export default BlocDescription