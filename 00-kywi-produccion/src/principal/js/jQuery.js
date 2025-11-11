import { useState, useEffect } from 'react';
import gsap from "gsap";

export const useMenuToggle = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(prev => !prev);
  };

  return { showMenu, toggleMenu };
};

export const useLinkAction = (setShowMenu) => {
  // Al hacer click en un link, cerrar el menú
  useEffect(() => {
    if (!setShowMenu) return;

    const handleLinkClick = () => {
      setShowMenu(false);
    };

    // Seleccionamos los links
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => link.addEventListener('click', handleLinkClick));

    // Cleanup
    return () => {
      navLinks.forEach(link => link.removeEventListener('click', handleLinkClick));
    };
  }, [setShowMenu]);
};

export const useScrollActive = () => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const scrollActive = () => {
      const scrollY = window.pageYOffset;

      sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', scrollActive);

    return () => {
      window.removeEventListener('scroll', scrollActive);
    };
  }, []);

  return activeSection;
};

export const useScrollHeader = () => {
  const [scrollHeader, setScrollHeader] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY >= 200) setScrollHeader(true);
      else setScrollHeader(false);
    };

    window.addEventListener('scroll', scrollHandler);

    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  return scrollHeader;
};

export const useScrollTop = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const scrollTopHandler = () => {
      if (window.scrollY >= 560) setShowScrollTop(true);
      else setShowScrollTop(false);
    };

    window.addEventListener('scroll', scrollTopHandler);

    return () => window.removeEventListener('scroll', scrollTopHandler);
  }, []);

  return showScrollTop;
};

export const Animacion = () => {

    const ctx = gsap.context(() => {

        // Imagen principal
        gsap.from(".home__img", { opacity: 0, duration: 2, delay: 0.8, x: 60, y: 20 });

        // Nombre / datos
        gsap.from(".home__data", { opacity: 0, duration: 1, delay: 0.8, y: 25 });

        // Textos suaves
        gsap.from(".home__greeting, .home__name, .home__profession, .home__button", { opacity: 0, duration: 2, delay: 1, y: 25, ease: "expo.out", stagger: 0.2 });

        // Logo y toggle menú
        gsap.from(".nav__logo, .nav__toggle", { opacity: 0, duration: 2, delay: 1.8, y: 25, ease: "expo.out", stagger: 0.2 });

        // Items del menú
        gsap.from(".nav__item", { opacity: 0, duration: 2, delay: 1.5, y: 25, ease: "expo.out", stagger: 0.2 });

        // Iconos sociales
        gsap.from(".home__social-icon", { opacity: 0, duration: 2, delay: 2.3, y: 25, ease: "expo.out", stagger: 0.2 })
    
    });

    return () => ctx.revert(); // limpia cuando el componente se desmonta
};