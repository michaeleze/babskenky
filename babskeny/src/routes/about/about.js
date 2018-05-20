import React from 'react';
import './about.css'


const About = () => {

    return(

        <div>
            <header id="home" className="home">
                <div className="overlay-img">
                    <div className="container">

                        <div className="row">
                            <div className="col-md-12">
                                <div className="home-content">

                                    <h5>My Story</h5>
                                    <h1>Why am on a <span>mission</span> to change the world, <span>one person </span>at a time </h1>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </header>

    
            <section id="about" className="sections">

                <div className="heading-content text-center">

                    <h3>Know About Us</h3>

                    <div className="separator"></div>

                    <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim </p>

                </div>

                <div className="about-bg">
                    <div className="container">

                        {/* Example row of columns */}
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-xs-6">
                                <div className="about-content">

                                    <h3>We Are the best</h3>
                                    <p>Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat </p>
                                    <p>Volutpat wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum </p>


                                    <a target="_blank" href=""><button className="btn btn-default abt-btn">Read More<span><i className="fa fa-long-arrow-right"></i></span></button></a>
                                </div>
                            </div>

                            <div className="col-md-6 col-sm-6 col-xs-6">
                                <div className="about-img">
                                    <img src="assets/images/about-img.jpg" alt="" />
                                </div>
                            </div>

                        </div>
                    </div> 
                </div>

            </section>

            {/* Sections */}
            <section id="service" className="sections">
                <div className="container text-center">
                    <div className="heading-content2">

                        <h4>Services We provide</h4>

                        <p>
                            Volutpat wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu
                            feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent
                        </p>

                    </div>
                    {/* Example row of columns */}
                    <div className="row">
                        <div className="col-md-4 col-sm-12 col-xs-12">
                            <div className="service-content">
                                <i className="fa fa-users"></i>
                                <h5>Consultancy</h5>
                                <p>Caritas aritas est etiam processus dynaicus qui sequitur mutationem consuetudium lectorum. Mirum est notare quam </p>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-12 col-xs-12">
                            <div className="service-content">
                                <i className="fa fa-camera"></i>
                                <h5>Marketing</h5>
                                <p>Caritas aritas est etiam processus dynaicus qui sequitur mutationem consuetudium lectorum. Mirum est notare quam </p>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-12 col-xs-12">
                            <div className="service-content">
                                <i className="fa fa-database"></i>
                                <h5>Research</h5>
                                <p>Caritas aritas est etiam processus dynaicus qui sequitur mutationem consuetudium lectorum. Mirum est notare quam </p>
                            </div>
                        </div>

                    </div>
                </div> {/* /container */}
            </section>

            {/* Sections */}
            <section id="our-skills" className=" skills skill-bg">
                <div className="overlay-img">
                    <div className="container sections text-center">
                        <div className="skill-heading">

                            <h4>Our Skills</h4>

                        </div>
                        {/* Example row of columns */}
                        <div className="row">
                            <div className="col-sm-3 text-center">
                                <div className="main-skill">
                                    <div className="chart-round">
                                        <div className="chart" data-percent="86">
                                            <span className="percent"></span>
                                        </div>
                                    </div>
                                    <div className="skills-text">Marketing</div>
                                </div>
                            </div>

                            <div className="col-sm-3 text-center">
                                <div className="main-skill">
                                    <div className="chart-round">
                                        <div className="chart" data-percent="86">
                                            <span className="percent"></span>
                                        </div>
                                    </div>
                                    <div className="skills-text">Marketing</div>
                                </div>
                            </div>

                            <div className="col-sm-3 text-center">
                                <div className="main-skill">
                                    <div className="chart-round">
                                        <div className="chart" data-percent="86">
                                            <span className="percent"></span>
                                        </div>
                                    </div>
                                    <div className="skills-text">Marketing</div>
                                </div>
                            </div>

                            <div className="col-sm-3 text-center">
                                <div className="main-skill">
                                    <div className="chart-round">
                                        <div className="chart" data-percent="86">
                                            <span className="percent"></span>
                                        </div>
                                    </div>
                                    <div className="skills-text">Marketing</div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div> {/* /container */}

</section>


{/* Sections */}
    <section id="project" className="sections">
        <div className="container text-center">

        <div className="heading-content text-center">

        <h3>Some Recent Project</h3>

    <div className="separator"></div>

    <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim </p>

</div>
    {/* Example row of columns */}
    <div className="row">

        <div className="col-md-3 col-sm-6 col-xs-12">

            <div className="project-item">
                <img src="assets/images/project/1.png" alt="" />

                <div className="project-overlay"></div>
                <div className="project-content">
                    <h5>PaperClips</h5>
                    <div className="project-separator"></div>
                    <h6>Branding</h6>
                </div>
            </div>

        </div>

        <div className="col-md-3 col-sm-6 col-xs-12">
        <div className="project-item">
        <img src="assets/images/project/2.png" alt="" />

        <div className="project-overlay"></div>
        <div className="project-content">
            <h5>PaperClips</h5>
            <div className="project-separator"></div>
            <h6>Branding</h6>
        </div>
        </div>
    </div>

    <div className="col-md-3 col-sm-6 col-xs-12">
        <div className="project-item">
            <img src="assets/images/project/3.png" alt="" />

            <div className="project-overlay"></div>
            <div className="project-content">
                <h5>PaperClips</h5>
                <div className="project-separator"></div>
                <h6>Branding</h6>
            </div>
        </div>
        </div>

        <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="project-item">
                <img src="assets/images/project/4.png" alt="" />

                <div className="project-overlay"></div>
                <div className="project-content">
                    <h5>PaperClips</h5>
                    <div className="project-separator"></div>
                    <h6>Branding</h6>
                </div>
            </div>
        </div>

        <div className="col-md-3 col-sm-6 col-xs-12">
        <div className="project-item">
        <img src="assets/images/project/1.png" alt="" />

        <div className="project-overlay"></div>
        <div className="project-content">
            <h5>PaperClips</h5>
            <div className="project-separator"></div>
            <h6>Branding</h6>
        </div>
        </div>
    </div>

    <div className="col-md-3 col-sm-6 col-xs-12">
        <div className="project-item">
            <img src="assets/images/project/2.png" alt="" />

            <div className="project-overlay"></div>
            <div className="project-content">
                <h5>PaperClips</h5>
                <div className="project-separator"></div>
                <h6>Branding</h6>
            </div>
        </div>
        </div>

        <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="project-item">
                <img src="assets/images/project/3.png" alt="" />

                <div className="project-overlay"></div>
                <div className="project-content">
                    <h5>PaperClips</h5>
                    <div className="project-separator"></div>
                    <h6>Branding</h6>
                </div>
            </div>
        </div>

        <div className="col-md-3 col-sm-6 col-xs-12">
        <div className="project-item">
        <img src="assets/images/project/4.png" alt="" />

        <div className="project-overlay"></div>
        <div className="project-content">
            <h5>PaperClips</h5>
            <div className="project-separator"></div>
            <h6>Branding</h6>
        </div>
        </div>
    </div>

</div>

    <div className="project-button">
        <a target="_blank" href=""><button className="btn btn-default">See All<span><i className="fa fa-long-arrow-right"></i></span></button></a>
    </div>

</div> {/* /container */}
</section>

    {/* Sections */}
    <section id="twitter" className="sections different-bg">
        <div className="container text-center">

            {/* Example row of columns */}
            <div className="row">
                <div className="col-md-8 col-md-offset-2 col-sm-12 col-xs-12">
                    <div className="twitter-content">
                        <h5>LATEST FROM TWITTER</h5>
                        <p>Trying out velositey - a simple website building extension for Photoshop.</p>
                        <a target="_blank" href="">buff.ly/NC8gog</a>
                    </div>
                </div>


                </div>

            </div> {/* /container */}
    </section>

    {/* Sections */}
    <section id="team" className="sections lightbg">
        <div className="container text-center">
            <div className="heading-content text-center">

                <h3>Our Team Members</h3>

                <div className="separator"></div>

                <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim </p>

            </div>
            {/* Example row of columns */}
            <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="main-team">
            <div className="team-details">

            <img src="assets/images/team-img.jpg" alt="" />
            <div className="team-overlay"></div>

            <div className="social">
                <a href=""><i className="fa fa-twitter"></i></a>
                <a href=""><i className="fa fa-facebook"></i></a>
                <a href=""><i className="fa fa-linkedin"></i></a>
            </div>

            </div>

            <div className="members-info">
                <h4>Mitchell Anderson</h4>
                <h6>Creative Director</h6>
            </div>
            </div>
        </div>

        <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="main-team">
                <div className="team-details">

                    <img src="assets/images/team-img.jpg" alt="" />
                    <div className="team-overlay"></div>

                    <div className="social">
                        <a href=""><i className="fa fa-twitter"></i></a>
                        <a href=""><i className="fa fa-facebook"></i></a>
                        <a href=""><i className="fa fa-linkedin"></i></a>
                    </div>

                </div>

                <div className="members-info">
                    <h4>Mitchell Anderson</h4>
                    <h6>Creative Director</h6>
                </div>
            </div>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="main-team">
                    <div className="team-details">

                        <img src="assets/images/team-img.jpg" alt="" />
                        <div className="team-overlay"></div>

                        <div className="social">
                            <a href=""><i className="fa fa-twitter"></i></a>
                            <a href=""><i className="fa fa-facebook"></i></a>
                            <a href=""><i className="fa fa-linkedin"></i></a>
                        </div>

                    </div>

                    <div className="members-info">
                        <h4>Mitchell Anderson</h4>
                        <h6>Creative Director</h6>
                    </div>
                </div>
            </div>




            </div>
        </div> {/* /container */}
    </section>




        </div>
    )
}

export default About