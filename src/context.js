import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({children}) => {
    const [isOpenSidebar, setIsOpenSidebar] = useState(false);
    const [isOpenSubmenu, setIsOpenSubmenu] = useState(false);
    const [location, setLocation] = useState();
    const [page, setPage] = useState({page: '', links: []});


    const openSidebar = () => {
        setIsOpenSidebar(true);
    }

    const closeSidebar = () => {
        setIsOpenSidebar(false);
    }

    const openSubmenu = () => {
        setIsOpenSubmenu(true);
    }

    const closeSubmenu = () => {
        setIsOpenSubmenu(false);
    }

    return (
        <AppContext.Provider value={{
            isOpenSidebar,
            openSidebar,
            closeSidebar,
            isOpenSubmenu,
            openSubmenu,
            closeSubmenu,
            page,
            
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppProvider};