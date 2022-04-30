import React from "react";

export const ModalContext = React.createContext();

export const ModalProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = 
        React.useState(false);
    const [isModalOpen, setIsModalOpen] = 
        React.useState(false);

    const openSidebar = () => {
        setIsSidebarOpen(true);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };
    
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <ModalContext.Provider value={{
            isSidebarOpen, isModalOpen,
            openModal, closeModal,
            openSidebar, closeSidebar
        }}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModalContext = () => {
    return React.useContext(ModalContext);
};




