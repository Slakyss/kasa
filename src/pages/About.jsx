// import React from 'react'
// import BlocDescription from '../components/BlocDescription'
// import AboutBannerImg from '../images/BannerAbout.png'
// import Banner from "../layout/Banner"

// function About() {
//   return (
//     <>
//         <Banner image={AboutBannerImg} showOverlay={false} />
//         <div className='about__bloc__description'>
//             <BlocDescription title="Fiabilité" content= "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."/>
//             <BlocDescription title="Respect" content= "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
//             <BlocDescription title="Service" content= "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/>
//             <BlocDescription title="Responsabilité" content= "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
//         </div>
//     </>
//   )
// }

// export default About


// import React from 'react'
// import Collapse from '../components/Collapse'
// import Banner from "../layout/Banner"

// function About() {
//   return (
//     <>
//         <Banner>
//           <div className="banner__about banner__all"></div>
//         </Banner>
//         <div className='about__Collapse'>
//             <Collapse title="Fiabilité" content= "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."/>
//             <Collapse title="Respect" content= "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
//             <Collapse title="Service" content= "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/>
//             <Collapse title="Responsabilité" content= "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
//         </div>
//     </>
//   )
// }

// export default About


import React from 'react'
import Collapse from '../components/Collapse'
import AboutBannerImg from '../images/BannerAbout.png'
import Banner from "../layout/Banner"
import Main from "../components/Main"
import "../layout/Banner.css"

function About() {
  return (
    <>
      <Main>
          <Banner className="about__banner" image={AboutBannerImg} showOverlay={false}/>
          <div className='about__bloc__description'>
              <Collapse title="Fiabilité" content= "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."/>
              <Collapse title="Respect" content= "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
              <Collapse title="Service" content= "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/>
              <Collapse title="Responsabilité" content= "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
          </div>
      </Main>
    </>
  )
}
export default About
