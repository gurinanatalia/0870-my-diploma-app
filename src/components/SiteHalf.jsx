import React from 'react';

const SiteHalf = ()=> {
    return <div>

        <div className="site-half py-1">
            <div className="img-bg-1" style={{backgroundImage: "url('images/venus.jpg')"}}></div>
            <div className="container">
                <div className="row no-gutters align-items-stretch">
                    <div className="col-md-5 ml-md-auto py-5">
                        <span
                            className="caption d-block mb-2 font-secondary font-weight-bold">Вторая планета от Солнца</span>
                        <h2 className="site-section-heading text-uppercase font-secondary mb-5">Венера</h2>
                            <p>Венера имеет плотную атмосферу, состоящую более чем на 96 % из углекислого газа.</p>
                            <p>Атмосферное давление на поверхности планеты в 92 раза больше, чем на поверхности Земли, и примерно равно давлению воды на глубине 900 метров.</p>
                            <p>Из-за высокого давления, CO2 в приповерхностной части атмосферы по агрегатному состоянию является уже не газом, а сверхкритической жидкостью,
                                поэтому эта часть атмосферы представляет собой «полужидкий-полугазообразный» океан из сверхкритического углекислого газа.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="site-half">
            <div className="img-bg-1 right" style={{backgroundImage: "url('images/surface.jpg')"}}></div>
            <div className="container">
                <div className="row no-gutters align-items-stretch">
                    <div className="col-md-5 mr-md-auto py-5">
                        <span
                            className="caption d-block mb-2 font-secondary font-weight-bold">Грозы и молнии</span>
                        <h2 className="site-section-heading text-uppercase font-secondary mb-5">Венера</h2>
                        <p>Венера — самая горячая планета в Солнечной системе: средняя температура её поверхности — 735 К (462°C), даже несмотря на то, что Меркурий находится ближе к Солнцу.</p>
                        <p>Венера покрыта непрозрачным слоем облаков из серной кислоты с высокой отражающей способностью, что, помимо всего прочего, закрывает поверхность планеты от прямой видимости.</p>
                        <p>Высокая температура поверхности обусловлена действием парникового эффекта.<br/>
                            Предположительно, в верхних слоях тропосферы Венеры время от времени идут кислотные дожди</p>

                    </div>
                </div>
            </div>
        </div>

    </div>

}

    export default SiteHalf;

