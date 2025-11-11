import React from 'react'
import './css/estilosMiPagina.css'
import './css/swiper-bundle.min.css'

const Footer = () => {
    return (
    <>
        <main className="l-main">
            <footer className="footer">
                <div className="footer__container bd-container">
                    {/* <h1 className="footer__title">Edison Uñog</h1> */}
                    {/* <p className="footer__description">diseñador de la pagina</p> */}
                    <div className="footer__social">
                        <a href="https://www.linkedin.com/in/edison-francisco-u%C3%B1og-valencia-a9718b21a/" className="footer__link"><i className='bx bxl-linkedin'></i></a>
                        <a href="https://github.com/EdisonUnog" className="footer__link"><i className='bx bxl-github'></i></a>
                        <a href="#" className="footer__link"><i className='bx bxl-dribbble'></i></a>
                    </div>

                    <p className="footer__copy"><strong>&#169; KYWI. Todos los derechos reservados</strong></p>
                
                </div>
            </footer>
        </main>
    </>
    )
}

export default Footer