import React from "react";
import "./App.css";
import { Main } from "../routes/Main";
import { ModalProvider } from "../modal/global/Context";

export const App = () => {
    return (
        <ModalProvider>
            <React.Fragment>
                <Main />
            </React.Fragment>
        </ModalProvider>
    );
};



