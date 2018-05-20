import React from 'react';
import './contact.css';


const Contact = () => {

    return(

        <div>
            <header id="home" className="home">
                <div className="overlay-img">
                    <div className="container-fluid no-pd">

                        <div className="row">
                            <div className="col-md-12">
                                <iframe  title={'address'} width="100%" height="430px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.co.uk/maps?f=q&source=s_q&hl=en&geocode=&q=15+Springfield+Way,+Hythe,+CT21+5SH&aq=t&sll=52.8382,-2.327815&sspn=8.047465,13.666992&ie=UTF8&hq=&hnear=15+Springfield+Way,+Hythe+CT21+5SH,+United+Kingdom&t=m&z=14&ll=51.077429,1.121722&output=embed"></iframe>
                   
                            </div>
                        </div>

                    </div>
                </div>
            </header>
            <section className={'contact bg-dark'}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form>
                            <ul className={'form'}>
                                <li>
                                    <input placeholder={'fullname'}/>
                                </li>
                                <li>
                                    <input placeholder={'Email Address'}/>
                                </li>
                                <li>
                                    <textarea rows="6" cols="50" placeholder={'Message'}>
                                    </textarea>
                                </li>
                                <li>

                                    <input className={'btn btn-gold'} type="submit" value="Send" />
                                </li>
                            </ul>

                        </form>
                        </div>

                    <div className="col-md-6 text-white">
                        <h2 style={{color:'#d1ac66'}}> <strong>BNY Holdings Incorporated</strong></h2>
                        <address className={'t-20'}>
                            13801 Napoli Drive<br/>
                            Houston TX 77070
                            <br/> 01234 567 890
                        </address>
                    </div>
                </div>
            </div>
            </section>
        </div>
    )
}

export default Contact