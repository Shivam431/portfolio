import React from "react";
import logo from "../assets/kevinRushLogo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaGithub, FaInstagram, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

const Nav = ()=>{

    const [isMobileMenuOpen,setIsMobileMenuOpen] = React.useState(false);

    const toggleMenu = ()=>{
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    const handleLinkClick = (e,href)=>{
        e.preventDefault();
        const targetEle= document.querySelector(href);
        if(targetEle){
            const offSet = -85;
            const elementPosition = targetEle.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY + offSet;

            window.scrollTo({
                top:offsetPosition,
                behavior:"smooth",
            })
        }

        setIsMobileMenuOpen(false);
    }
    return (
        <>
        <nav className="mb-20 flex items-center justify-between py-6">
          <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-10" src={logo}></img>
          </div>
          <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <FaLinkedin />
            <FaGithub />
            <FaInstagram />
            <FaSquareXTwitter />
          </div>
        </nav>
        </>
    )
}

export default Nav;