import React from "react";
import { SideBarPrivate } from "./SideBar.Private";

const MainPrivate = ({ children }) => {
    return (
        <>

            <SideBarPrivate children={children} />
        </>
    )
}

export default MainPrivate;