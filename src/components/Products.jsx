import React from 'react';

const Products = ()=>{
    return <div>

        <div className="site-section">
            <div className="container">

                <div className="row">
                    <div className="col-md-12 text-center">
                        <span className="caption d-block mb-2 font-secondary font-weight-bold">Стуктура и состав</span>
                        <h2 className="site-section-heading text-uppercase text-center font-secondary">Солнечная система</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 block-13 nav-direction-white">
                        <div className="nonloop-block-13 owl-carousel">

                            <div className="media-image">
                                <img src="images/solar_system.jpg" alt="Image" className="img-fluid"/>
                                <div className="media-image-body">
                                    <h2 className="font-secondary text-uppercase">Расположение</h2>
                                    <p>Солнечная система находится в галактике Млечный путь, в галактическом рукаве Ориона.
                                        Ближайшая к Солнцу звезда - Проксима Центавра, расположена примерно в 4,2 светового года от Земли
                                        (один световой год равен 9 460 730 472 580 800 метрам).
                                    </p>
                                    <p><a href="https://ru.wikipedia.org/wiki/%D0%9C%D0%BB%D0%B5%D1%87%D0%BD%D1%8B%D0%B9_%D0%9F%D1%83%D1%82%D1%8C" className="btn btn-primary text-white px-4"><span
                                        className="caption">Читать</span></a></p>
                                </div>
                            </div>

                            <div className="media-image">
                                <img src="images/sun.jpg" alt="Image" className="img-fluid"/>
                                <div className="media-image-body">
                                    <h2 className="font-secondary text-uppercase">Солнце</h2>
                                    <p>Центральным объектом Солнечной системы является Солнце — звезда, жёлтый карлик.
                                        В Солнце сосредоточена подавляющая часть всей массы системы (около 99,866 %),
                                        оно удерживает своим тяготением планеты и прочие тела, принадлежащие к Солнечной системе</p>
                                    <p>
                                        <a href="https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D0%BB%D0%BD%D1%86%D0%B5" className="btn btn-primary text-white px-4">
                                            <span className="caption">Читать</span>
                                        </a>
                                    </p>

                                </div>
                            </div>

                            <div className="media-image">
                                <img src="images/orbit.jpg" alt="Image" className="img-fluid"/>
                                <div className="media-image-body">
                                    <h2 className="font-secondary text-uppercase">Обращение вокруг Солнца</h2>
                                    <p>Самой большой угловой скоростью обладает Меркурий — он успевает совершить полный оборот вокруг Солнца всего за 88 земных суток.
                                        А для самой удалённой планеты — Нептуна — период обращения составляет 165 земных лет.</p>
                                </div>
                            </div>

                            <div className="media-image">
                                <img src="images/asteroid.jpg" alt="Image" className="img-fluid"/>
                                <div className="media-image-body">
                                    <h2 className="font-secondary text-uppercase">Пояс астероидов</h2>
                                    <p> - это область Солнечной системы между орбитами Марса и Юпитера,
                                        являющаяся местом скопления множества объектов всевозможных размеров,
                                        преимущественно неправильной формы, называемых астероидами или малыми планетами.
                                        Церера — карликовая планета и крупнейшее тело пояса астероидов.
                                    </p>
                                    <p><a href="https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D1%8F%D1%81_%D0%B0%D1%81%D1%82%D0%B5%D1%80%D0%BE%D0%B8%D0%B4%D0%BE%D0%B2" className="btn btn-primary text-white px-4"><span
                                        className="caption">Читать</span></a></p>
                                </div>
                            </div>

                            <div className="media-image">
                                <img src="images/giants.jpg" alt="Image" className="img-fluid"/>
                                <div className="media-image-body">
                                    <h2 className="font-secondary text-uppercase">Планеты-гиганты</h2>
                                    <p>Четыре планеты-гиганта, также называемые газовыми гигантами, все вместе содержат 99 % массы вещества, обращающегося на орбитах вокруг Солнца.
                                        Юпитер и Сатурн преимущественно состоят из водорода и гелия;
                                        Уран и Нептун обладают бо́льшим содержанием льда в их составе. </p>
                                </div>
                            </div>

                            <div className="media-image">
                                <img src="images/comet.jpg" alt="Image" className="img-fluid"/>
                                <div className="media-image-body">
                                    <h2 className="font-secondary text-uppercase">Кометы</h2>
                                    <p>Кометы — малые тела Солнечной системы, обычно размером всего в несколько километров, состоящие главным образом из летучих веществ (льдов).
                                        Когда комета приближается к Солнцу, её ледяная поверхность начинает испаряться и ионизироваться, создавая кому — длинное облако из газа и пыли.</p>
                                    <p><a href="https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BC%D0%B5%D1%82%D0%B0" className="btn btn-primary text-white px-4"><span
                                        className="caption">Читать</span></a></p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>
}

export default Products;