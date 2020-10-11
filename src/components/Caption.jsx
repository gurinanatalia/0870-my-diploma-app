import React from 'react';

const Caption = (props)=>{
    return <div>
        <div className="site-blocks-cover inner-page overlay" style={{backgroundImage: "url('images/hero_bg_1.jpg')"}}
             data-aos="fade" data-stellar-background-ratio="0.5">
            <div className="row align-items-center justify-content-center">
                <div className="col-md-7 text-center" data-aos="fade">
                    <h1 className="text-uppercase">{props.h1}</h1>
                    <span className="caption d-block text-white">Герой России</span>
                </div>
            </div>
        </div>
    </div>
}

export default Caption;