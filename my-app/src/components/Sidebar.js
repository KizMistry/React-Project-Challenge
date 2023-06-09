import React from "react";
import css from './css/Sidebar.module.css';

const SideBar = () => {
    return <div className={css.SideBar}>
        <a href="#" target="_blank">My Photos</a>
        <a href="#" target="_blank">My Illustrations</a>
        <a href="#" target="_blank">My Paintings</a>
        </div>
};

export default SideBar;