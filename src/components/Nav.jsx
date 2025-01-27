import React from "react";
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
        <nav className="mb-20 flex items-center justify-end py-6">
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