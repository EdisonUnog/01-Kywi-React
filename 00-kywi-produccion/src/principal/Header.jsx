import { useEffect} from 'react';
import { useMenuToggle, useLinkAction, useScrollActive, useScrollHeader, useScrollTop } from './js/jQuery'; // suponiendo que guardaste las funciones JS aquí
import { Animacion } from './js/jQuery';

const Header = () => {
    const { showMenu, toggleMenu } = useMenuToggle();
    const activeSection = useScrollActive();
    const scrollHeader = useScrollHeader();
    const showScrollTop = useScrollTop();

    // Vinculamos la acción de cerrar menú con clic en link
    useLinkAction(() => toggleMenu(false));

    useEffect(() => {
        const cleanup = Animacion(); // ejecuta animaciones 
        return cleanup;
    }, [])

     return (
        <div>
            <a href="#" className={`scrolltop ${showScrollTop ? 'show-scroll' : ''}`} id="scroll-top">
                <i className='bx bxs-chevron-up scrolltop__icon'></i>
            </a>
            

            {/* <header className="l-header" id="header"> */}
            <header className={`l-header ${scrollHeader ? 'scroll-header' : ''}`} id="header">
                <nav className="nav bd-container">
                    <a href="#" className="nav__logo">Kywi</a>

                    <div className={`nav__menu ${showMenu ? 'show-menu' : ''}`} id="nav-menu">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a href="#home" className={`nav__link ${activeSection === 'home' ? 'active-link' : ''}`}> Home </a>
                            </li>
                           
                            <li className="nav__item">
                                <a href="#about" className={`nav__link ${activeSection === 'about' ? 'active-link' : ''}`}> About me </a>
                            </li>

                            <li className="nav__item">
                                <a href="#services" className={`nav__link ${activeSection === 'services' ? 'active-link' : ''}`}> Services </a>
                            </li>
                            
                            <li className="nav__item">
                                <a href="#contact" className={`nav__link ${activeSection === 'contact' ? 'active-link' : ''}`}> Contact </a>
                            </li>
                        </ul>
                    </div>

                    <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
                        <i className='bx bx-menu'></i>
                    </div>

                </nav>
            </header>
        </div>
    );
};

export default Header;
