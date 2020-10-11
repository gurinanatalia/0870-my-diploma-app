import React from 'react';
import {NavLink} from "react-router-dom";

const Footer = ()=>{
    return <div>

        <footer className="site-footer">
            <div className="container">


                <div className="row">
                    <div className="col-md-4">
                        <h3 className="footer-heading mb-4 text-white">МКС в реальном времени</h3>
                        <p>Видимые пролеты Международной космической станции, прямая трансляция с МКС, сейчас на борту и многое другое</p>
                        <p><a href="http://mks-online.ru/" className="btn btn-primary rounded text-white px-4">Перейти</a></p>
                    </div>
                    <div className="col-md-5 ml-auto">
                        <div className="row">
                            <div className="col-md-6">
                                <h3 className="footer-heading mb-4 text-white">Меню</h3>
                                <ul className="list-unstyled">
                                    <li><NavLink exact to="/">На главную</NavLink></li>
                                    <li><NavLink to="/questions">Вопрос/ответ</NavLink></li>
                                    <li><NavLink to="/blog">Блог</NavLink></li>
                                    <li><NavLink to="/contact">Задать вопрос</NavLink></li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <h3 className="footer-heading mb-4 text-white">Планеты</h3>
                                <ul className="list-unstyled">
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
                            </div>
                        </div>
                    </div>


                    <div className="col-md-2">
                        <div className="col-md-12"><h3 className="footer-heading mb-4 text-white">Роскосмос, NASA, ESA</h3></div>
                        <div className="col-md-12">
                            <p>
                                <a href="https://www.instagram.com/roscosmosofficial/?hl=ru" className="p-2"><span className="icon-instagram"></span></a>
                                <a href="https://www.facebook.com/NASA" className="pb-2 pr-2 pl-0"><span className="icon-facebook"></span></a>
                                <a href="https://twitter.com/esa" className="p-2"><span className="icon-twitter"></span></a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row pt-5 mt-5 text-center">
                    <div className="col-md-12">
                        <p>

                            Copyright &copy;
                            <script>document.write(new Date().getFullYear());</script>
                            All Rights Reserved | This template is made with <i className="icon-heart text-danger"
                                                                                aria-hidden="true"></i> by <a
                            href="https://colorlib.com" target="_blank">Colorlib</a>

                        </p>
                    </div>

                </div>
            </div>
        </footer>
    </div>
}

export default Footer;