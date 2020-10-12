import React from 'react';
import {NavLink} from "react-router-dom";

const Services = ()=>{
    return <div>
        <div className="site-section">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-12">
                        <h2 className="site-section-heading text-center text-uppercase">
                                Количество полётов — 2. <br/>
                                Длительность — 304 суток 23 часа 22 минуты. <br/>
                                Число выходов в открытый космос — 4. <br/>
                                Суммарная продолжительность выходов — 27 часов 39 минут
                        </h2>
                    </div>
                </div>
                <div className="row">


                    <div className="col-md-4 text-center mb-4">
                        <div className="border p-4 text-with-icon">
                            <span className="fas fa-space-shuttle icon display-4 mb-4 d-block text-primary"></span>
                            <h2 className="h5 text-uppercase">Почему ракета летит?</h2>
                            <p>Засчет принципа реактивного движения: раскаленные газы, вырывающиеся из сопла ракеты,
                                создают тягу, которая толкает ракету в противоположную сторону.</p>
                            <p><a href="https://www.labirint.ru/books/698138/">Заказать книгу</a></p>
                        </div>
                    </div>
                    <div className="col-md-4 text-center mb-4">
                        <div className="border p-4 text-with-icon">
                            <span className="fas fa-tachometer-alt icon display-4 mb-4 d-block text-primary"></span>
                            <h2 className="h5 text-uppercase">Какая скорость нужна, чтобы выйти на орбиту Земли?</h2>
                            <p>Первая космическая скорость: 7,91 км/с.</p>
                            <p><a href="https://www.labirint.ru/books/698138/">Заказать книгу</a></p>
                        </div>
                    </div>
                    <div className="col-md-4 text-center mb-4">
                        <div className="border p-4 text-with-icon">
                            <span className="fas fa-moon icon display-4 mb-4 d-block text-primary"></span>
                            <h2 className="h5 text-uppercase">Какая скорость нужна, чтобы добраться до Луны и Марса?</h2>
                            <p>Для полета на Луну для старта с земной поверхности достаточно разогнаться до 11,09 км/с.
                                Для полета на Марс нужно разогнать космический аппарат до скорости 11,42 км/с. </p>
                            <p><a href="https://www.labirint.ru/books/698138/">Заказать книгу</a></p>
                        </div>
                    </div>
                    <div className="col-md-4 text-center mb-4">
                        <div className="border p-4 text-with-icon">
                            <span className="flaticon-agreement icon display-4 mb-4 d-block text-primary"></span>
                            <h2 className="h5 text-uppercase">Почему мы летаем с Байконура в Казахстане?</h2>
                            <p>Так исторически сложилось. Казахстан еще недавно был частью Советского Союза.
                                И еще - чем космодром южнее, тем больше орбит он охватывает.
                                Байконур в этом смысле расположен выгодно</p>
                            <p><a href="https://www.labirint.ru/books/698138/">Заказать книгу</a></p>
                        </div>
                    </div>
                    <div className="col-md-4 text-center mb-4">
                        <div className="border p-4 text-with-icon">
                            <span className="fas fa-sort icon display-4 mb-4 d-block text-primary"></span>
                            <h2 className="h5 text-uppercase">Где проходит граница между космосом и атмосферой?</h2>
                            <p>Век назад ученые полагали, что граница атмосферы проходит на высоте 12 км, т.к. человек не сможет дышать из-за малого содержание кислорода.
                                Сегодня условную границу космоса проводят на высоте 100 км, куда не может подняться авиация из-за отсутствия подъемной силы воздуха.
                            </p>
                            <p><a href="https://www.labirint.ru/books/698138/">Заказать книгу</a></p>
                        </div>
                    </div>
                    <div className="col-md-4 text-center mb-4">
                        <div className="border p-4 text-with-icon">
                            <span className="flaticon-target icon display-4 mb-4 d-block text-primary"></span>
                            <h2 className="h5 text-uppercase">Какие цели преследует космонавтика?</h2>
                            <p>1. Система предотвращения на случай появления астероида/кометы.</p>
                            <p>2. Изучение человека в космосе.</p>
                            <p>3. Поиск новой жизни.</p>
                            <p>4. Поиск запасной планеты для человечества.</p>
                            <p>5. Космонавтика поднимает нас ввысь. </p>
                            <p><a href="https://www.labirint.ru/books/698138/">Заказать книгу</a></p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

}

export default Services;