import React from 'react';

class ContactUs extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.sendMail = this.sendMail.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    sendMail(event){
        let formData = new FormData();
        formData.append("text", this.state.value);
        fetch("http://site2.gurinavw.beget.tech/sendMail",{
            method: "POST",
            body: formData
        });
        event.preventDefault();
    }

    render() {
        return <div className="py-5 bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-8 mb-5">
                        <form action="#" className="p-5 bg-white" onSubmit={this.sendMail}>
                            <div className="row form-group">
                                <div className="col-md-12">
                                    <label className="font-weight-bold" htmlFor="message">Message</label>
                                    <textarea cols="30" rows="5" className="form-control"
                                              placeholder="Say hello to us" value={this.state.value} onChange={this.handleChange}></textarea>
                                </div>
                            </div>

                            <div className="row form-group">
                                <div className="col-md-12">
                                    <input type="submit" value="Send Message"
                                           className="btn btn-primary text-white px-4 py-2"/>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="col-lg-4">
                        <div className="p-4 mb-3 bg-white">
                            <h3 className="h5 text-black mb-3">Контактная информация</h3>
                            <p className="mb-0 font-weight-bold">Адрес </p>
                            <p className="mb-4">109147, г. Москва, Россия</p>

                            <p className="mb-0 font-weight-bold">Телефон</p>
                            <p className="mb-4"><a href="tel:+79851441460">+79851441460</a></p>

                            <p className="mb-0 font-weight-bold">Email</p>
                            <p className="mb-0"><a href="mailto:gurinanatalia@list.ru">gurinanatalia@list.ru</a></p>

                        </div>


                    </div>
                </div>
            </div>
        </div>
    }
}

export default ContactUs;