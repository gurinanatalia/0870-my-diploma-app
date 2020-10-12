import React from 'react';
import {NavLink} from "react-router-dom";

const ContactUsLine = ()=>{
    return <div className="py-5 bg-primary">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
                    <h2 className="text-uppercase text-white mb-0">Интересно о космосе</h2>
                </div>
                <div className="col-md-3 ml-auto text-center text-md-left">
                    <NavLink to="/contact" className="btn btn-bg-primary d-inline-block d-md-block font-secondary text-uppercase">Задать вопрос</NavLink>
                </div>
            </div>
        </div>
    </div>
}

export default ContactUsLine;