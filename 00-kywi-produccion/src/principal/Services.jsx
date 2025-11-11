import React from 'react'
import './css/estilosMiPagina.css'
import './css/swiper-bundle.min.css'


const Services = () => {
    return (
        <>
            <main className="l-main">
                <section className="services section bd-container" id="services">
                    <span className="section-subtitle"> </span>
                    <h2 className="section-title">Cursos</h2>

                    <div className="services__container bd-grid">

                        <div className="services__data">
                            <img className="services__img" src="https://flagcdn.com/gb.svg" alt="English"/>
                            <h3 className="services__title">Ingl&eacute;s práctico y profesional</h3>
                            <p className="services__description">Clases orientadas a la comunicaci&oacute;n real: trabajo, estudios, entrevistas, viajes. <br/> Vocabulario &uacute;til + confianza al hablar.</p>
                            <a href="#contact" className="button">saber m&aacute;s</a>
                        </div>

                        <div className="services__data">
                            <img className="services__img" src="https://flagcdn.com/pt.svg" alt="Português"/>
                            <h3 className="services__title">Portugu&eacute;s para hispanohablantes</h3>
                            <p className="services__description">Aprende a hablar el idioma m&aacute;s c&aacute;lido de Sudam&eacute;rica con un enfoque pr&aacute;ctico y 
                                conversacional. <br/> Ideal para viajar, trabajar o estudiar en Brasil.</p>
                            <a href="#contact" className="button">saber m&aacute;s</a>
                        </div>                   

                        <div className="services__data">
                            <img className="services__img" src="https://flagcdn.com/fr.svg" alt="Français"/>
                            <h3 className="services__title">Franc&eacute;s desde cero</h3>
                            <p className="services__description">¿Siempre soñaste con hablar francés? Empieza desde lo básico con clases accesibles y motivadoras. <br/> Enfoque comunicativo, Aplicación real</p>
                            <a href="#contact" className="button">saber m&aacute;s</a>
                        </div>

                        <div className="services__data">
                            <img className="services__img" src="https://flagcdn.com/es.svg" alt="español"/>
                            <h3 className="services__title">Español para extranjeros</h3>
                            <p className="services__description">Habla como un local. Clases din&aacute;micas para que entiendas, pienses y te expreses desde el primer 
                                d&iacute;a. <br/>100% online y Profesores nativos</p>
                            <a href="#contact" className="button">saber m&aacute;s</a>
                        </div>

                    </div>
                </section>
            </main>
        </>
    )
}

export default Services