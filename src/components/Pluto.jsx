import React from 'react';

const Pluto = ()=>{
    return <div>
        <div className="site-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <p><img src="images/pluto.jpg" alt="Image" className="img-fluid"/></p>
                    </div>
                    <div className="col-lg-5 ml-auto">
                        <h2 className="site-section-heading mb-3 font-secondary text-uppercase">9-я планета Солнечной системы?</h2>
                        <p>Первоначально Плутон считали девятой классической планетой, но сейчас он считается карликовой планетой.</p>
                        <p>Как и большинство тел пояса Койпера, Плутон состоит в основном из камня и льда и он относительно мал: его масса меньше массы Луны примерно в 6 раз, а объём — примерно в 3 раза.</p>
                        <p>Площадь Плутона (17,7 млн км²) немногим больше площади России (17,1 млн км²). </p>
                        <p>Имя «Плутон» в 1930 г. предложила Венеция Берни, одиннадцатилетняя школьница из Оксфорда.</p>
                        <p className="my-5"><a href="https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%BD%D0%B8,_%D0%92%D0%B5%D0%BD%D0%B5%D1%86%D0%B8%D1%8F" className="btn btn-outline-primary py-2 px-4">Венеция Берни</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Pluto;