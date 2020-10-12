import React from 'react';

const Founders = ()=>{
    return <div>
        <div className="site-section"
             style={{backgroundImage: "url('images/topography.png')"}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="row justify-content-center">
                            <img src="images/blue_marble.jpg" alt="Image" className="img-fluid rounded-circle w-51 mb-4" />
                        </div>
                        <p className="text-secondary">В 1972 году экипаж Аполлона-17 сделал знаменитый снимок Земли - <b>The Blue Marble</b>.</p>
                    </div>
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-6 text-center">
                        <div className="row justify-content-center">
                            <img src="images/earth_from_mars.png" alt="Image" className="img-fluid w-100  mb-4"/>
                        </div>
                        <p className="text-secondary">Снимок Земли, сделанный с поверхности Марса марсоходом <b>Curiosity</b>.</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
}

export default Founders;