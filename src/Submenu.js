import { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
    const { isOpenSubmenu, page: { page, links }, location } = useGlobalContext();
    const refContainer = useRef();
    const [column, setColumn] = useState();

    useEffect(() => {
        refContainer.current.style.left = `${location}px`;

        // setColumn('col-2');
        setColumn('col-2');
        if (links.length === 3) {
            setColumn('col-3');
        } else if (links.length > 3) {
            setColumn('col-4');
        }
    }, [location, links]);

    return (
        <aside 
            className={`${isOpenSubmenu ? 'submenu show' : 'submenu'}`}
            ref={refContainer}    
        >
            <section>
                <h4>{page}</h4>
                <div className={`submenu-center ${column}`}>
                    {links.map((link, index) => {
                        const { url, label, icon } = link;
                        return (
                            <a href={url} key={index}>
                                {icon}
                                {label}
                            </a>
                        )
                    })}
                </div>
            </section>
        </aside>
    )
}

export default Submenu;