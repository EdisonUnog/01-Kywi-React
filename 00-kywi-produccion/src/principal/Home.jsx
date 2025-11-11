import React from 'react'
import './css/estilosMiPagina.css'
import './css/swiper-bundle.min.css'

import imgHome from './img/kywiHome.png'

const Home = () => {
  return (
    <div>
        <main className="l-main">
            <section className="home" id="home">
                <div className="home__container bd-container bd-grid">

                    <div className="home__data">
                        <span className="home__greeting">Hola, Bienvenido a</span>
                        <h1 className="home__name">Kywi</h1>
                        <span className="home__profession">Academy</span>
                    </div>

                    <div className="home__social">
                        <a href="https://calendar.google.com/calendar/u/0?cid=ZmVybmFuZGFrYXR0ZTk1MDhAZ21haWwuY29t"  className="home__social-icon"><i className='bx bx-calendar square'></i></a>
                        <a href="https://www.instagram.com/kywi_languages?utm_source=qr&igsh=MTVoNjd4Y3Q1a21vbw%3D%3D" className="home__social-icon"><i className='bx bxl-instagram'></i></a>
                        {/* <a href="https://www.x.com" className="home__social-icon"><i className='bx bxl-twitter'></i></a> */}
                    </div>

                    <div className="home__img">
                        <img src={imgHome}/>
                    </div>
                </div>
            </section>
        </main>
    </div>
  )
}

export default Home
