import React, { useEffect } from 'react';
import { useState } from 'react';
import '../css/navbar.css'
import logo from '../img/logo/logo3.png'
import logoN from '../img/logo/logo4.png'
import wa from '../img/WhatsApp.png'

function Navbar(){

    const [nav, setNav] = useState('nav__menu');
    const [toggleIcon, setToggleIcon] = useState('nav_toggler')
    const [navFix, setNavFix] = useState('nav');
    const [logoNav, setLogoNav] = useState(logo);
    const navToggler = () =>{
        nav === "nav__menu" 
        ? setNav("nav__menu nav_active")
        : setNav("nav__menu");

        toggleIcon === 'nav_toggler' ? setToggleIcon("nav_toggler toggle") 
        : setToggleIcon("nav_toggler");
    }

    useEffect(() =>{
        window.onscroll = () => handleScroll()
       
    }, [])

    const handleScroll = () =>{
        if (document.documentElement.scrollTop >= 100) {
            setNavFix("nav_fix")
            setLogoNav(logoN)
        }else{
            setNavFix("nav")
            setLogoNav(logo)
        }
    }
    return(
        <nav className={navFix}>
            <a href='#' className='nav__brand'>
                <img  className='logo' alt="logo" src={logoNav}/>

            </a>
            <ul className={nav}>
                <li className="nav__item"><a href='#inicio' className='nav_link'>INÍCIO</a></li>
                <li className="nav__item"><a href='#comentarios' className='nav_link'>O QUE DIZEM</a></li>
                <li className="nav__item"><a href='#lojas' className='nav_link'>LOJAS</a></li>
                <li className="nav__item"><a href='#contato' className='nav_link'>CONTATO</a></li>
                <li className="nav__item"><a href='http://api.whatsapp.com/send?1=pt_BR&phone=557191504449' target="blank" className='nav_link'><img className='whatsapp' alt="whatsapp" src={wa}/></a></li>

            
            </ul>
            <div onClick={navToggler} className={toggleIcon}>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>

            </div>
        </nav>
    );
}

export default Navbar;
