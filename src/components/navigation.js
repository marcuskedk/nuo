import React, { Fragment, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Col, Image } from 'react-bootstrap';
import navi from "../assets/json/data.json";

const Navigation = () => {
    const menu_list = (
        <Fragment>
            <ul className="menu-list">
                {navi.navigation.map((item, index) => 
                    <li className="nav-item">
                        <NavLink activeClassName="active" key={navi.navigation[index].id} to={"/" + navi.navigation[index].link} className={'box box' + index + ' ' + navi.navigation[index].class}>
                            <Image src={navi.navigation[index].images} className="nav-image" />
                            <Image src={navi.navigation[index].images_under} className="nav-underimage" />
                        </NavLink>
                    </li>
                )}
            </ul>
        </Fragment>
    );

    const menu_logo = (
        <div className="nav-brand">
            <Link to="/" title={navi.title}><Image src={navi.logo} className="logo" fluid /></Link>
        </div>
    );
    
    return(
        <Fragment>
            <header>
                { menu_list }
                { menu_logo }
            </header>
        </Fragment>
    );
}

export default Navigation;