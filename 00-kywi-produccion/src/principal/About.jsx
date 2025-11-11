import React from 'react'
import './css/estilosMiPagina.css'
import './css/swiper-bundle.min.css'

import imgAbout from './img//logoDos.png'

const About = () => {
  return (
    <>
        <main className="l-main">
            <section className="about section bd-container" id="about">
                <span className="section-subtitle">...</span>
                <h2 className="section-title">Nosotros:</h2>

                <div className="about__container bd-grid">
                    <div className="about__data bd-grid"> {/* div de toda la descripcion*/}
                        <p className="about__description"><span>
                                En KyWi Languages creemos que aprender un idioma es mucho más que memorizar reglas.
                                Somos una institución virtual dirigida por profesionales latinoamericanos, con una 
                                visión moderna y humana del aprendizaje.</span> </p>
                        <div>
                            <span className="about__number"></span>
                            <span className="about__achievement"><span className="about__achievement">Combinamos tecnolog&iacute;a, cercan&iacute;a y 
                                una metodolog&iacute;a comunicativa basada en la pr&aacute;ctica real del idioma desde el d&iacute;a uno</span></span>
                        </div>
                        <div>
                            <span className="about__number">+ 4 años de expereciancia</span>
                            <span className="about__achievement">Profesores nativos con bases s&oacute;lidas en el lenguaje</span>
                        </div>
                    
                    </div>
                    <img src={imgAbout} alt="" className="about__img"/>
                </div>
            </section> 
        </main>
    </>
  )
}

export default About