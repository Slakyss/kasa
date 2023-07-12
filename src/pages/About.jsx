import React from 'react'
import BlocDescription from '../components/BlocDescription'
import ImageBanner from '../components/ImageBanner'
import './About.css'

function About() {
  return (
    <>
        <ImageBanner />
        <div className='about__bloc__description'>
            <BlocDescription title="Fiabilité" content= "c'est tres important"/>
            <BlocDescription title="Respect" content= "c'est tres important"/>
            <BlocDescription title="Service" content= "c'est tres important"/>
            <BlocDescription title="Responsabilité" content= "c'est tres important"/>
        </div>
    </>
  )
}

export default About