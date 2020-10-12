import React from 'react';

const Caption = (props)=>{
    return <div>
        <div className="site-blocks-cover inner-page overlay" style={{backgroundImage: "url('images/hubble.jpg')"}}
             data-aos="fade" data-stellar-background-ratio="0.5">
            <div className="row align-items-center justify-content-center">
                <div className="col-md-7 text-center" data-aos="fade">
                    <h1 className="text-uppercase">{props.h1}</h1>
                    <h3 className="text-uppercase">{props.h2}</h3>
                </div>
            </div>
        </div>
    </div>
}

export default Caption;