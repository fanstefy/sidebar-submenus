import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";
import logo from './images/logo.svg';

const Navbar = () => {
    const {openSidebar} = useGlobalContext();

    return (
        <nav className='nav'>
            <div className='nav-center'>
                <div className='nav-header'>
                    <img src={logo} className='nav-logo' alt='logo' />
                    <button className='btn toggle-btn' onClick={openSidebar}>
                        <FaBars />
                    </button>
                </div>
                <ul className='nav-links'>
                    <li>
                        <button className='link-btn' >
                            products
                        </button>
                    </li>
                    <li>
                        <button className='link-btn' >
                            developers
                        </button>
                    </li>
                    <li>
                        <button className='link-btn' >
                            company
                        </button>
                    </li>
                </ul>
                <button className='btn signin-btn'>Sing in</button>
            </div>
        </nav>
    )
}

export default Navbar;