import React from "react";
import { FaBars } from "react-icons/fa";
import { useModalContext } from "../modal/global/Context";

export const Home = () => {
    const { openSidebar, openModal } = useModalContext();
    return (
        <main>
            <button
                className="sidebar-toggle"
                onClick={openSidebar}
                ><FaBars />
            </button>
            <button 
                className="btn" 
                onClick={openModal}
                >show modal
            </button>
        </main>
    );
};



