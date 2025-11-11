import React from 'react'
import './css/estilosMiPagina.css'
import './css/swiper-bundle.min.css'
import { openWhatsApp } from './js/Number'

import kathe from './img/katherine.jpg'
import willian from './img/willian.png'

const Contacto = () => {

    const handleClick1 = () => {
        openWhatsApp('5491123947552', 'Hola Katherine, necesito más información acerca del curso.'); // reemplaza con tu número real
    };

    const handleClick2 = () => {
        openWhatsApp('5491123947552', 'Hola Katherine, necesito más información acerca del curso.'); // reemplaza con tu número real
    };

    return ( 
    <>
        <main className="l-main">
            <section   className="contact section bd-container " id="contact">
     
                <h2 className="section-title">Profesores</h2>

                <div className="contact__container bd-grid">
                    <div className="contact__content bd-grid">

                        <div className="contact__data">
                            <img className="contact__img" src={kathe} alt="español"/>
                            <h3 className="contact__title">Katherine Segovia</h3>
                            <p className="contact__description">Lic. en Psicolog&iacute;a y profesora de idiomas en la UBA</p>
                            {/* <a href="#contact" className="button">Know more</a> */}
                            
                            <a className="contact_button_wp" onClick={handleClick1}>
                                <img
                                    src="https://img.icons8.com/color/48/000000/whatsapp.png" // reemplaza con la ruta de tu imagen
                                    alt="Contactar por WhatsApp"
                                />
                            </a>
                        </div>

                        <div className="contact__data">
                            <img className="contact__img" src={willian} alt="español"/>
                            <h3 className="contact__title">Willian Bell</h3>
                            <p className="contact__description">Lic. en idiomas, profesor de Ingl&eacute;s y Franc&eacute;s </p>
                            {/* <a href="#contact" className="button">Know more</a> */}

                            <a className="contact_button_wp" onClick={handleClick2}>
                                <img
                                    src="https://img.icons8.com/color/48/000000/whatsapp.png" // reemplaza con la ruta de tu imagen
                                    alt="Contactar por WhatsApp"
                                />
                            </a>

                        </div>
                    </div>
                </div>


                <span className="section-subtitle">CONSULTAS</span>
                <h2 className="section-title">Medios de Contacto</h2>

                <div className="contact__container bd-grid">
                    <div className="contact__content bd-grid">

                        <div className="contact__box">
                            <i className='bx bx-envelope contact__icon' ></i>
                            <h3 className="contact__title">Email</h3>
                            <span className="contact__description">kate.segovia.95@gmail.com</span>
                        </div>

                        <div className="contact__box">
                            <i className='bx bx-home contact__icon' ></i>
                            <h3 className="contact__title">Localizaci&oacute;n</h3>
                            <span className="contact__description">Buenos Aires - Argentina</span>
                        </div>

                        <div className="contact__box">
                            <i className='bx bx-phone contact__icon' ></i>
                            <h3 className="contact__title">Phone</h3>
                            <span className="contact__description">+54 9 11 2394-7552</span>
                        </div>
                    </div>
                </div>

            </section>  
        </main>
    </>
    )
}

export default Contacto