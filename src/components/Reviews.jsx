import React from 'react';

const Reviews = ()=>{
    return <div>

        <div className="site-section block-14 bg-light nav-direction-white">

            <div className="container">

                <div className="row mb-5">
                    <div className="col-md-12">
                        <h2 className="site-section-heading text-center text-uppercase">Межпланетные космические аппараты для изучения Меркурия</h2>
                    </div>
                </div>

                <div className="nonloop-block-14 owl-carousel">

                    <div className="p-5">
                        <div className="d-block block-testimony w-75 mx-auto text-center">
                            <div className="person w-25 mx-auto mb-4">
                                <img src="images/mariner10.gif" alt="Image" className="img-fluid rounded-circle"/>
                            </div>
                            <div>
                                <h2 className="h5 mb-4">Маринер-10 — 3 ноября 1973 года</h2>
                                <blockquote>Аппарат трижды пролетал мимо Меркурия, была составлена карта 40—45 % поверхности планеты.
                                    Было установлено, что температура ночью на Меркурии составляет −183 °C,
                                    а максимальная дневная температура +187 °C (по современным данным — от −190 до +500 °C).
                                    Поверхность оказалась схожей с лунной.
                                    По данным «Маринера-10», Меркурий почти лишён атмосферы.</blockquote>
                            </div>
                        </div>
                    </div>
                    <div className="p-5">
                        <div className="d-block block-testimony w-75 mx-auto text-center">
                            <div className="person w-25 mx-auto mb-4">
                                <img src="images/messenger.jpg" alt="Image" className="img-fluid rounded-circle"/>
                            </div>
                            <div>
                                <h2 className="h5 mb-4">Мессенджер — 3 августа 2004 года</h2>
                                <blockquote>В ходе пролёта были получены снимки Меркурия, на которых обнаружились непонятные точки какого-то тёмного вещества,
                                            обильно разбросанные по его поверхности.
                                            Полёт завершился 30 апреля 2015 года, когда станция упала на Меркурий
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div className="p-5">
                        <div className="d-block block-testimony w-75 mx-auto text-center">
                            <div className="person w-25 mx-auto mb-4">
                                <img src="images/bepiColombo.png" alt="Image" className="img-fluid rounded-circle"/>
                            </div>
                            <div>
                                <h2 className="h5 mb-4">BepiColombo — 20 октября 2018 года</h2>
                                <blockquote>Текущая миссия, выход на орбиту Меркурия планируется в декабре 2025 года. </blockquote>
                            </div>
                        </div>
                    </div>


                </div>

            </div>

        </div>
    </div>
}

export default Reviews;