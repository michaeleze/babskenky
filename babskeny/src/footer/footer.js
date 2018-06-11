import React from 'react';
import './footer.css'


const About = () => {

    return(


            <div className={'cover'}>



                        <section id="footer">
                            <div className="container">
                                <div className="row text-center text-xs-center text-sm-left text-md-left">
                                    <div className="col-xs-12 col-sm-4 col-md-4 offset-md-1">
                                        <a className="" href=""><
                                            div className={'img'}><img alt='img-babskenky' src={'img/BabskenkyLogo-01.png'}/></div>
                                        </a>
                                        <ul className="list-unstyled quick-links">
                                            <li><span>BNY Holdings Incorporated<br/>
            13801 Napoli Drive<br/>
            Houston TX 77070
 </span></li>

                                        </ul>
                                    </div>
                                    <div className="col-xs-12 col-sm-2 col-md-2">
                                        <h6>Quick links</h6>
                                        <ul className="list-unstyled quick-links">
                                            <li><a href="">Home</a></li>
                                            <li><a href="">About Baba</a></li>
                                            <li><a href="">FAQ</a></li>
                                            <li><a href="">Get Started</a></li>
                                            <li><a href="">Videos</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-xs-12 col-sm-2 col-md-2">
                                        <h6>Products</h6>
                                        <ul className="list-unstyled quick-links">
                                            <li><a href="">Home</a></li>
                                            <li><a href="">About</a></li>
                                            <li><a href="">FAQ</a></li>
                                            <li><a href="">Get Started</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-xs-12 col-sm-2 col-md-3">
                                        <h6>Connect with Baba</h6>
                                        <ul className="list-unstyled quick-links">
                                            <li><a href=""><i className="fa fa-facebook"></i></a></li>
                                            <li><a href=""><i className="fa fa-twitter"></i></a></li>
                                            <li><a href=""><i className="fa fa-instagram"></i></a></li>
                                            <li><a href="" target="_blank"><i className="fa fa-envelope"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                               <hr/>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white-light">
                                <ul className={'terms'}>
                                    <li>
                                        Privacy
                                    </li>
                                    <li>
                                        Income Disclosure
                                    </li>
                                    <li>
                                        Terms & Conditions
                                    </li>
                                    </ul>
                                    <p>Copyright bnyholdings 2018. All rights reserved</p>
                                    <p>Built with ReactJs by <span ><a href="https://twitter.com/michaelcityboy" style={{color:'#d1ac66'}}><i className="fa fa-twitter"></i>@michaelcityboy</a></span></p>

                                           </div>
                </div>
            </div>
</section>
        </div>
    )
}

export default About