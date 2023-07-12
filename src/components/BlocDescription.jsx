import React, { useState } from "react"
import "./BlocDescription.css"

function BlocDescription(props) {
    const [isContentVisible, setIsContenteVisible] = useState(false)

    const showContent = () => {
        setIsContenteVisible(!isContentVisible)
    }

    return (
        <div className='appartement__description'>
            <p className='description__header'>
                <span>{props.title}</span>
                <i className="fa-solid fa-chevron-up" onClick={showContent}></i>
            </p>

            {isContentVisible && <p className='description__content'>{props.content}</p>}
        </div>
    )
}

export default BlocDescription