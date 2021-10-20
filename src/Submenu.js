import { useEffect, useRef } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
    const {isOpenSubmenu, page: {page, links}, location} = useGlobalContext();
    const refContainer = useRef();

    useEffect(() => {
        refContainer.current.style.left = `${location}px`;

    }, [location]);

    return (
        <div ref={refContainer} className={`${isOpenSubmenu ? 'submenu show' : 'submenu'}`}>
            {page}
        </div>
    )
}

export default Submenu;