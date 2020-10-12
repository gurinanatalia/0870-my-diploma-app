import React from "react";

const Title = (props)=>{

    return <div>
        <div className="row mb-5 py-5">
            <div className="col-md-12">
                <h2 className="site-section-heading text-center text-uppercase">{props.h2}</h2>
            </div>
        </div>
    </div>
}

export default Title;