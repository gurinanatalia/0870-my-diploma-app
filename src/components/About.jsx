import React from 'react';

const About = ()=>{
    return <div>
        <div className="site-section my-5">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-12"><h1 className="text-uppercase">«Семейный портрет» (англ. Family Portrait)</h1></div>
                </div>
                <div className="row mb-5">
                    <div className="col-md-12">
                        <img src="images/family_portrait.png" alt="image" className="img-fluid"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 ml-auto">
                        <p>- изображение Солнечной системы, полученное космическим аппаратом «Вояджер-1» 14 февраля 1990 года, последние фотографии, сделанные «Вояджером-1».</p>
                    </div>
                    <div className="col-md-6">
                        <p> - изображение представляет собой мозаику из 60 отдельных изображений, которые были сделаны с расстояния около 6 миллиардов километров от Земли</p>
                    </div>
                </div>
            </div>
        </div>


        <div className="site-half">
            <div className="img-bg-1" style={{backgroundImage: "url('images/telescope.jpg')"}}></div>
            <div className="container">
                <div className="row no-gutters align-items-stretch">
                    <div className="col-md-5 ml-md-auto py-5">
                        <span className="caption d-block mb-2 font-secondary font-weight-bold">Космический телескоп</span>
                        <h2 className="site-section-heading text-uppercase font-secondary mb-5">«Хаббл» (англ. "Hubble")</h2>
                        <p>- автоматическая обсерватория на орбите вокруг Земли, названная в честь Эдвина Хаббла.
                            Телескоп «Хаббл» — совместный проект НАСА и Европейского космического агентства. Высота орбиты - ок. 569 км, запущен в 1990 г.</p>

                        <p>Благодаря отсутствию влияния атмосферы разрешающая способность телескопа в 7—10 раз больше,
                            чем у аналогичного телескопа, расположенного на Земле.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="site-half">
            <div className="img-bg-1 right" style={{backgroundImage: "url('images/pillars_of_creation.jpg')"}}></div>
            <div className="container">
                <div className="row no-gutters align-items-stretch">
                    <div className="col-md-5 mr-md-auto py-5">
                        <span className="caption d-block mb-2 font-secondary font-weight-bold">Одна из самых ихвестных фотографий</span>
                        <h2 className="site-section-heading text-uppercase font-secondary mb-5">"Столпы творения"</h2>
                        <p> - скопления межзвёздного газа и пыли в туманности Орёл, примерно в 7000 световых лет от Земли,
                            впервые зафиксированные на фотографии космическим телескопом «Хаббл».
                            Название «Столпы Творения» объекты на фотографии получили потому, что газ и пыль в них вовлечены в процесс формирования новых звёзд с одновременным разрушением облаков под светом уже образовавшихся звезд</p>

                        <p>Фотография была сделана 1 апреля 1995 года.
                            Её получили и опубликовали астрономы Джефф Хестер и Пол Скоуэн, на тот момент являвшиеся студентами Университета штата Аризона.
                            В честь 25-летия запуска космического телескопа «Хаббл» была сделана новая фотография Столпов Творения — более крупная и в более высоком разрешении. Она была обнародована в январе 2015 года на конференции Американского астрономического общества в Сиэтле.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="site-section">
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-12 text-center">
                        <span className="caption d-block mb-2 font-secondary font-weight-bold">Блиц-опрос</span>
                        <h2 className="site-section-heading text-uppercase text-center font-secondary">Возраст</h2>
                    </div>
                </div>
                <div className="row border-responsive">
                    <div className="col-md-6 col-lg-3 mb-4 mb-lg-0 border-right">
                        <div className="text-center">
                            <span className="flaticon-customer-service display-4 d-block mb-3 text-primary"></span>
                            <h3 className="text-uppercase h4 mb-3">Вселенной</h3>
                            <p>— время, прошедшее с начала расширения Вселенной.
                                По современным представлениям, согласно модели ΛCDM (читается «Лямбда-СиДиЭм»), возраст Вселенной составляет <b>13,799 ± 0,021 миллиарда лет</b></p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-4 mb-lg-0 border-right">
                        <div className="text-center">
                            <span className="fas fa-rocket display-4 d-block mb-3 text-primary"></span>
                            <h3 className="text-uppercase h4 mb-3">Галактики Млечный путь</h3>
                            <p>Возраст старейшей из известных звёзд	<b>13,2 млрд лет</b></p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-4 mb-lg-0 border-right">
                        <div className="text-center">
                            <span className="fas fa-sun display-4 d-block mb-3 text-primary"></span>
                            <h3 className="text-uppercase h4 mb-3">Солнца</h3>
                            <p>Текущий возраст Солнца (точнее время его существования на главной последовательности), оценённый с помощью компьютерных моделей звёздной эволюции, равен приблизительно <b>4,5 миллиарда лет</b></p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
                        <div className="text-center">
                            <span className="fas fa-globe display-4 d-block mb-3 text-primary"></span>
                            <h3 className="text-uppercase h4 mb-3">Земли</h3>
                            <p>— время, которое прошло с момента образования Земли как самостоятельной планеты. Возраст Земли составляет <b>4,54 миллиарда лет</b></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
}

export default About;