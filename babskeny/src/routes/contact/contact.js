import React from 'react';
import './contact.css'

const Contact = () => {

    return(

        <div>
            <header id="home" className="home">
                <div className="overlay-img">
                    <div className="container">

                        <div className="row">
                            <div className="col-md-12">
                                <iframe title={'address'} width="100%" height="400px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.co.uk/maps?f=q&source=s_q&hl=en&geocode=&q=15+Springfield+Way,+Hythe,+CT21+5SH&aq=t&sll=52.8382,-2.327815&sspn=8.047465,13.666992&ie=UTF8&hq=&hnear=15+Springfield+Way,+Hythe+CT21+5SH,+United+Kingdom&t=m&z=14&ll=51.077429,1.121722&output=embed"></iframe>
                   
                            </div>
                        </div>

                    </div>
                </div>
            </header>
            <section className={'contact'}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        </div>

                    <div className="col-md-6">
                        <h2>Snail mail</h2>
                        <address>
                            <strong>Hythe Window Cleaning</strong><br/>
                            15 Springfield Way<br/>
                            Hythe<br/>
                            Kent<br/>
                            United Kingdon<br/>
                            CT21 5SH<br/>
                            <abbr title="Phone">P:</abbr> 01234 567 890
                        </address>
                    </div>
                </div>
            </div>
            </section>
        </div>
    )
}

export default Contact