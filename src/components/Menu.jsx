import React from 'react';
import {NavLink} from "react-router-dom";

const Menu = ()=>{
    return <div>
        <div className="site-mobile-menu">
            <div className="site-mobile-menu-header">
                <div className="site-mobile-menu-close mt-3">
                    <span className="icon-close2 js-menu-toggle"></span>
                </div>
            </div>
            <div className="site-mobile-menu-body"></div>
        </div>

        <div className="site-navbar-wrap js-site-navbar bg-white">

            <div className="container">
                <div className="site-navbar bg-light">
                    <div className="row align-items-center">
                        <div className="col-2">
                            <h2 className="mb-0 site-logo">Astro</h2>
                        </div>
                        <div className="col-10">
                            <nav className="site-navigation text-right" role="navigation">
                                <div className="container">
                                    <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3">
                                        <NavLink to="#" className="site-menu-toggle js-menu-toggle text-black">
                                            <span className="icon-menu h3"></span>
                                        </NavLink>
                                    </div>

                                    <ul className="site-menu js-clone-nav d-none d-lg-block">
                                        <li><NavLink exact to="/">На главную</NavLink></li>
                                        <li className="has-children">
                                            <NavLink to="/mercury">Планеты</NavLink>
                                            <ul className="dropdown arrow-top">
                                                <li><NavLink to="/mercury">Меркурий</NavLink></li>
                                                <li><NavLink to="/venus">Венера</NavLink></li>
                                                <li><NavLink to="/earth">Земля</NavLink></li>
                                                <li><NavLink to="/mars">Марс</NavLink></li>
                                                <li><NavLink to="/jupiter">Юпитер</NavLink></li>
                                                <li><NavLink to="/saturn">Сатурн</NavLink></li>
                                                <li><NavLink to="/uranus">Уран</NavLink></li>
                                                <li><NavLink to="/neptune">Нептун</NavLink></li>
                                                <li><NavLink to="/pluto">Плутон</NavLink></li>
                                            </ul>
                                        </li>
                                        <li><NavLink to="/questions">Вопрос/ответтзь</NavLink></li>
                                        <li><NavLink to="/blog">Блог</NavLink></li>
                                        <li><NavLink to="/about">About</NavLink></li>
                                        <li><NavLink to="/contact">Контакты</NavLink></li>
                                        <li><NavLink to="/contact"><span
                                            className="d-inline-block p-3 bg-primary text-white btn btn-primary">Get A Quote</span></NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Menu;