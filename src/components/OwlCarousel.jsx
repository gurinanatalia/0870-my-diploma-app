import React from "react";
import Products from "./Products";

const OwlCarousel = ()=> {
    return <div>
        <div className="row justify-content-center py-5">
            <div id="carouselExampleControls" className="carousel slide col-sm-8" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="images/owl_carousel_1.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="images/owl_carousel_2.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="images/owl_carousel_3.jpg" className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    </div>

}

export default OwlCarousel;