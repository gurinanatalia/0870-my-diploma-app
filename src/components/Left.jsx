import React from "react";
import Caption from "./Caption";

const Left = (props)=>{
    return <div>
        <div className="row justify-content-center">
            <img src="images/god.jpg" alt="Image" className="img-fluid rounded-circle w-25 mb-4" />
        </div>
        <p>{props.p}</p>
    </div>
}

export default Left;


