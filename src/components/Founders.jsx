import React from 'react';

const Founders = ()=>{
    return <div>
        <div className="site-section"
             style={{backgroundImage: "url('images/topography.png'), background-attachment: fixed"}}>
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-12">
                        <h2 className="site-section-heading text-center text-uppercase">Our Founders</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6 text-center">
                        <img src="images/person_2.jpg" alt="Image" className="img-fluid rounded-circle w-25 mb-4"/>
                        <h2 className="h5 ">Alex Peters</h2>
                        <span className="d-block mb-4">CEO, Co-Founder</span>
                        <p className="font-weig mb-5 lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
                            et aliquam fuga dicta amet ad laborum error recusandae, voluptatibus quam minima sed, saepe odio
                            voluptatem. Sed unde hic, vitae fugiat.</p>
                    </div>
                    <div className="col-md-6 text-center">
                        <img src="images/person_3.jpg" alt="Image" className="img-fluid rounded-circle w-25 mb-4"/>
                        <h2 className="h5">Shane Cripton</h2>
                        <span className="d-block mb-4">President, Co-Founder</span>
                        <p className="font-weig mb-5 lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
                            et aliquam fuga dicta amet ad laborum error recusandae, voluptatibus quam minima sed, saepe odio
                            voluptatem. Sed unde hic, vitae fugiat.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Founders;