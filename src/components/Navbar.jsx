import { navLinks } from "../constants"
import React from "react"
import useMacbookStore from '../store';
import { FaInfoCircle } from "react-icons/fa";

const Navbar = () =>{

    const { toggleModal } = useMacbookStore();

    return(
        <header>
            <nav>
                <img src="/logo.svg" alt="Apple logo" />
                <ul>
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <a href={link.label}>{link.label}</a>
                        </li>
                    ))}

                    
                </ul>

                <div className="flex">
                    <FaInfoCircle 
                    className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer"
                    onClick={toggleModal}/>
                    &nbsp; About this project
                </div>
                
                {/* <div className="flex-center gap-3">
                    <button>
                        <img src="/search.svg" alt="Search" />
                    </button>
                    <button>
                        <img src="/cart.svg" alt="Cart" />
                    </button>
                </div> */}
            </nav>
        </header>
    )
}

export default Navbar
