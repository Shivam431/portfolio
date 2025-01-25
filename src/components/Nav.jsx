import React from "react";
import logo from "../assets/kevinRushLogo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { NAVIGATION_LINKS } from "../constants";

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
            const elementPosition = targetEle.getBoundingClientReact().top;
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
        <nav className="fixed left-0 right-0 top-4 z-50">

            {/* Desktop */}
            <div className="mx-auto hidden max-w-2xl items-center justify-center rounded-lg border border-stone-50/30 bg-black py-3 backdrop-blur-lg lg:flex">
            {/* <div className="flex items-center justify-between gap-6">
                <div>
                    <a href="#">
                        <img src={logo} width={150} alt="logo"></img>
                    </a>

                </div>
            </div> */}

            <ul className="flex items-center gap-4">
                {
                   NAVIGATION_LINKS.map((item, index) => (
                    <li key={index}>
                      <a
                        className="text-sm hover:text-yellow-400"
                        href={item.href}
                        onClick={(e) => {
                          handleLinkClick(e, item.href);
                        }}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))                  
                }
            </ul>
            </div>

            {/* Mobile */}

            <div className="rounded-lg backdrop-blur-md lg:hidden">
                <div className="flex items-center justify-between">
                    <div>
                        <a href="#">
                            <img src={logo} width={90} className="m-2"></img>
                        </a>
                    </div>
                    <div className="flex items-center">
                        <button className="focus:outline-none lg:hidden" onClick={toggleMenu}>
                            {isMobileMenuOpen ? (<FaTimes className="m-2" />):(<FaBars className="m-2 h-6 w-5" />)}
                        </button>
                    </div>
                </div>
                {isMobileMenuOpen && (<ul className="ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md">
                    {
                        NAVIGATION_LINKS.map((item, index) => (
                            <li key={index}>
                              <a
                                className="text-sm hover:text-yellow-400"
                                href={item.href}
                                onClick={(e) => {
                                  handleLinkClick(e, item.href);
                                }}
                              >
                                {item.label}
                              </a>
                            </li>
                          ))
                          
                    }
                </ul>)}
            </div>
        </nav>
        </>
    )
}

export default Nav;