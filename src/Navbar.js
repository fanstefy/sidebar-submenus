import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";
import logo from './images/logo.svg';

const Navbar = () => {
    const {openSidebar, openSubmenu, closeSubmenu} = useGlobalContext();

    const displaySubmenu = (e) => {
        const center = (e.target.getBoundingClientRect().left + e.target.getBoundingClientRect().right)/2;
        const pageTitle = e.target.textContent;
        openSubmenu(pageTitle, center);
    }

    const handleCloseSubmenu = (e) => {
        if (!e.target.classList.contains('link-btn')) {            
            closeSubmenu();
        }
    }

    return (
        <nav className='nav' onMouseOver={handleCloseSubmenu}>
            <div className='nav-center'>
                <div className='nav-header'>
                    <img src={logo} className='nav-logo' alt='logo' />
                    <button className='btn toggle-btn' onClick={openSidebar}>
                        <FaBars />
                    </button>
                </div>
                <ul className='nav-links'>
                    <li>
                        <button className='link-btn' onMouseOver={displaySubmenu}>
                            products
                        </button>
                    </li>
                    <li>
                        <button className='link-btn' onMouseOver={displaySubmenu}>
                            developers
                        </button>
                    </li>
                    <li>
                        <button className='link-btn' onMouseOver={displaySubmenu}>
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