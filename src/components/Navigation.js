import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div class='navigation'>
            <NavLink  to="/" exact > Acceuil </NavLink>
            <NavLink to="/News" exact> News </NavLink>
            <NavLink  to="/A Propos" exact >  A Propos </NavLink>
            
        </div>
    );
};

export default Navigation;
