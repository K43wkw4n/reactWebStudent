import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "../pages/Home";

const Main = ({ children }) => {
    return (
        <>
            <Header />
            <main id="main">{children}</main>
            <Footer />
        </>
    )
}

export default Main;