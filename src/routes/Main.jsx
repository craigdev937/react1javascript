import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ModalPage } from "../modal/ModalPage";
import { TourPage } from "../tour/TourPage";

export const Main = () => (
    <BrowserRouter>
        <React.Fragment>
            <Routes>
                <Route path="/" element={<ModalPage />} />
                <Route path="/tour" element={<TourPage />} />
            </Routes>
        </React.Fragment>
    </BrowserRouter>
);



