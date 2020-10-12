import React from 'react';

const About = ()=>{
    return <div>
        <div className="site-section">
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
            <div className="img-bg-1" style={{backgroundImage: "url('images/hero_bg_2.jpg')"}}></div>
            <div className="container">
                <div className="row no-gutters align-items-stretch">
                    <div className="col-md-5 ml-md-auto py-5">
                        <span className="caption d-block mb-2 font-secondary font-weight-bold">Outstanding Services</span>
                        <h2 className="site-section-heading text-uppercase font-secondary mb-5">Why Choose Us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aliquid eius facilis
                            voluptatem eligendi magnam accusamus vel commodi asperiores sint rem reprehenderit nobis nesciunt
                            veniam qui fugit doloremque numquam quod.</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora distinctio ipsam
                            nesciunt recusandae repellendus asperiores amet.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="site-half">
            <div className="img-bg-1 right" style={{backgroundImage: "url('images/hero_bg_1.jpg')"}}></div>
            <div className="container">
                <div className="row no-gutters align-items-stretch">
                    <div className="col-md-5 mr-md-auto py-5">
                        <span className="caption d-block mb-2 font-secondary font-weight-bold">Outstanding Services</span>
                        <h2 className="site-section-heading text-uppercase font-secondary mb-5">Why Choose Us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aliquid eius facilis
                            voluptatem eligendi magnam accusamus vel commodi asperiores sint rem reprehenderit nobis nesciunt
                            veniam qui fugit doloremque numquam quod.</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora distinctio ipsam
                            nesciunt recusandae repellendus asperiores amet.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="site-section">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-12 text-center">
                        <span className="caption d-block mb-2 font-secondary font-weight-bold">Outstanding Services</span>
                        <h2 className="site-section-heading text-uppercase text-center font-secondary">Why Choose Us</h2>
                    </div>
                </div>
                <div className="row border-responsive">
                    <div className="col-md-6 col-lg-3 mb-4 mb-lg-0 border-right">
                        <div className="text-center">
                            <span className="flaticon-customer-service display-4 d-block mb-3 text-primary"></span>
                            <h3 className="text-uppercase h4 mb-3">24/7 Support</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nobis?</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-4 mb-lg-0 border-right">
                        <div className="text-center">
                            <span className="flaticon-group display-4 d-block mb-3 text-primary"></span>
                            <h3 className="text-uppercase h4 mb-3">Trusted People</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nobis?</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-4 mb-lg-0 border-right">
                        <div className="text-center">
                            <span className="flaticon-medal display-4 d-block mb-3 text-primary"></span>
                            <h3 className="text-uppercase h4 mb-3">12 Years Experience</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nobis?</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
                        <div className="text-center">
                            <span className="flaticon-agreement display-4 d-block mb-3 text-primary"></span>
                            <h3 className="text-uppercase h4 mb-3">Join With Us</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nobis?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
}

export default About;