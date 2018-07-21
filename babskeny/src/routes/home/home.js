import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import './home.css'
import Slider from "react-slick";

const Form = ()=> {
   return(
       <div>
           <section className="testimonials bg-dark">
               <div className="container form">
                   <h2 className="mb-5 text-gold text-center text-uppercase">unleash your full potentials</h2>
                   <div className="row">
                       <div className={'col-lg-6 text-white text-justify '}>
                           <h3 style={{lineHeight:'1.5'}}>Subscribe and get the lastest takeaway and insights delivered to your inbox</h3>
                       </div>
                       <div className={'col-lg-6 text-center'}>
                           {/*<form onSubmit={this.handleSubmit}>*/}
                           <form>
                               <ul className={'form'}>
                                   <li>
                                       <input placeholder={'fullname'}/>
                                   </li>
                                   <li>
                                       <input placeholder={'Email Address'}/>
                                   </li>
                                   <li>

                                       <input className={'btn btn-gold'} type="submit" value="Submit" />
                                   </li>
                               </ul>

                           </form>

                       </div>

                   </div>
               </div>
           </section>
       </div>
   )

}


class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            blurred:''
        }
        this.blur = this.blur.bind(this)
    }
    componentDidMount(){
        window.addEventListener('scroll', this.blur)
    }

    blur = () => {
        if (window.scrollY > 0) {
            this.setState({blurred:'blur(3px)'})
        }
        else if (window.scrollY === 0){
            this.setState({
                blurred: 'blur(0px)'
            })

        }
    }

     render() {
         const {blurred} = this.state
         let settings = {
             dots: true,
             autoplay: true,
             infinite: true,
             speed: 2000,
             autoplaySpeed: 1000,
             cssEase: "ease",
             slidesToShow: 3,
             slidesToScroll: 3,
             responsive: [
                 {
                     breakpoint: 1024,
                     settings: {
                         slidesToShow: 2,
                         slidesToScroll: 2,
                         infinite: true,
                         dots: true
                     }
                 },
                 {
                     breakpoint: 600,
                     settings: {
                         slidesToShow: 2,
                         slidesToScroll: 2
                     }
                 },
                 {
                     breakpoint: 480,
                     settings: {
                         slidesToShow: 1,
                         slidesToScroll: 1
                     }
                 }
    
             ]
         };

         return (

             <div>
                 <header className="masthead text-left text-white" style={{
                     background: "url('../img/26561643908_d4f84400ce_k (1) (1).jpg')",
                     backgroundAttachment: 'fixed',
                     height: '1000px',
                     filter:blurred
                 }}>
                     <div className={'home-overlay'}></div>

                     <div className="bg-circle-1 bg-circle"></div>
                     <div className="bg-circle-2 bg-circle"></div>
                     <div className="bg-circle-3 bg-circle"></div>
                     <div className="bg-circle-4 bg-circle"></div>
                 </header>
                 <div className={'cover-home'}>
                     <div className="masthead-content">
                         <div className="container">
                             <div className={'flx'}>
                                 <div style={{marginTop: '35vh'}}>
                                     <h1 className="masthead-heading mb-0 text-uppercase t-62 text-center">Work Less, Earn
                                         More</h1>
                                     <h4 className="masthead-subheading mb-0 text-center">Other people should not determine your worth. Stop being a paid slave !
</h4>
                                     <div className={'text-center'}>
                                         <Link to={'/about'} className="btn abt-btn">Read More<span><i className="fa fa-long-arrow-right"></i></span></Link>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
                 <section className="features-icons bg-light text-center" style={{padding: '50px 0'}}>
                     <div className="container">
                         <h2 className={'text-uppercase text-center'} style={{margin: '10px 0 30px 0'}}> Featured
                             Products</h2>
                         <div className="row">
                             <div className="col-lg-3">
                                 <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                     <div className="features-icons-icon d-flex">
                                         <i className="icon-screen-desktop m-auto text-grey"></i>
                                     </div>
                                     <h5>Blogging</h5>
                                     <p className="lead mb-0">Featuring the latest build of the new Bootstrap 4
                                         framework!</p>
                                 </div>
                             </div>
                             <div className="col-lg-3">
                                 <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                     <div className="features-icons-icon d-flex">
                                         <i className="icon-calendar m-auto text-grey"></i>
                                     </div>
                                     <h5>Live Events</h5>
                                     <p className="lead mb-0">Featuring the latest build of the new Bootstrap 4
                                         framework!</p>
                                 </div>
                             </div>
                             <div className="col-lg-3">
                                 <div P="features-icons-item mx-auto mb-0 mb-lg-3">
                                     <div className="features-icons-icon d-flex">
                                         <i className="icon-check m-auto text-grey"></i>
                                     </div>
                                     <h5>Make Money</h5>
                                     <p className="lead mb-0">Featuring the latest build of the new Bootstrap 4
                                         framework!</p>
                                 </div>
                             </div>
                             <div className="col-lg-3">
                                 <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                                     <div className="features-icons-icon d-flex">
                                         <i className="icon-book-open m-auto text-grey"></i>
                                     </div>
                                     <h5>Books</h5>
                                     <p className="lead mb-0">Featuring the latest build of the new Bootstrap 4
                                         framework!</p>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </section>

                 <section className="showcase">
                     <div className="container-fluid p-0">
                         <div className="row no-gutters">

                             <div className="col-md-6 order-lg-2 text-white showcase-img"
                                  style={{backgroundImage: 'url("../img/time.JPG")'}}></div>
                             <div className="col-md-6 order-lg-1 my-auto showcase-text">
                                 <div className={'title'}>
                                     <h5>Do you have a full time job?</h5>
                                     <h2 className={'text-uppercase'}>Time Freedom</h2>
                                 </div>
                                 <p className="lead mb-0 t-20">You can work WHEN you want, and you don’t have to wake up early and sit in traffic, spend more time with the people you love. You will have freedom over your time and schedule, to spend more time outdoors, or serving others through your favorite charity.
                                 </p>
                             </div>
                         </div>
                         <div className="row no-gutters">
                             <div className="col-md-6 text-white showcase-img"
                                  style={{backgroundImage: 'url("../img/finance.JPG")'}}></div>
                             <div className="col-md-6 my-auto showcase-text">
                                 <div className={'title'}>
                                     <h5>Do you want to earn more?</h5>
                                     <h2 className={'text-uppercase'}>Financial Freedom</h2>
                                 </div>
                                 <p className="lead mb-0 t-20">You can earn between $1,250 to $20,000 per sale, while working from home in your spare time! You can pay off debt, put money away for retirement, help your kids or grandkids pay for college, and build a legacy.</p>
                             </div>
                         </div>
                         <div className="row no-gutters">
                             <div className="col-lg-6 order-lg-2 text-white showcase-img"
                                  style={{backgroundImage: 'url("../img/lo.JPG")'}}></div>
                             <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                                 <div className={'title'}>
                                     <h5>Would like to work at your comfort?</h5>
                                     <h2 className={'text-uppercase'}>Location Freedom</h2>
                                 </div>
                                 <p className="lead mb-0 t-20">Work WHERE you want, so you can work from home or while traveling as long as there is a computer/mobile device and a wifi
                                 </p>
                             </div>
                         </div>
                         <div className="row no-gutters">
                             <div className="col-lg-4 order-lg-1 text-white showcase-img"
                                  >
                                 <a href="http://track.mobetrack.com/aff_c?offer_id=1724&aff_id=3071558">
                                     <img src="https://mobeoffice.com/members/wp-content/uploads/2017/02/WiFi-Millionaire-350x350-a.jpg" alt={'baba'} /></a>

                             </div>
                             <div className="col-lg-4 order-lg-2 text-white showcase-img"
                                 >
                                 <a href="http://track.mobetrack.com/aff_c?offer_id=1724&aff_id=3071558">
                                     <img src="https://mobeoffice.com/members/wp-content/uploads/2017/02/WiFi-Millionaire-350x350-a.jpg" alt={'baba'} /></a>
                             </div>
                             <div className="col-lg-4 order-lg-3 text-white showcase-img"
                                  >
                                 <a href="http://track.mobetrack.com/aff_c?offer_id=1724&aff_id=3071558">
                                     <img src="https://mobeoffice.com/members/wp-content/uploads/2017/02/WiFi-Millionaire-350x350-a.jpg" alt={'baba'} />
                                 </a>
                             </div>
                         </div>
                     </div>
                 </section>

                 <section id={'mission'} style={{backgroundImage: 'url("../img/mii.JPG")',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundAttachment:'fixed',
                         height:'35rem',position:'relative'}}>
                         <div className='blackOverlay'></div>
                     <div className="container no-p text-center"  >
                         <div className="row p-50">
                             <div className="col-lg-12 text-white showcase-img">
                                 <div className={'flex'}>
                                     <div className={'tp-20'}>
                                 <h2 className={'max-w-400'}>
                                     My Mission
                                 </h2>
                                 <p className={'max-w-400 p-20 text-white'}>
                                     To help 1000 people escape the rat race, to live life on their own terms and fulfil their true destinies
                                 </p>
                                 <p className={'max-w-400 p-20 text-white'}>My passion is to transfer this knowledge and to continue to replicate this knowledge with individuals that are willing to earn their own freedom. After all, if I can do this, then you definitely can!</p>
                                 </div>
                                 </div>
                             </div>
                         </div>

                     </div>

                 </section>


                 <section className="testimonials text-center bg-light">
                     <div className="container-fluid">
                         <h2 className="mb-5 text-uppercase">What people are saying...</h2>
                
                         <div className={'row'}>
                             <div className={'col-lg-12'}>
                             <Slider {...settings}>
                                 <div className={'pd-50'}>
                                    <div style={{padding:'5rem'}}> <img className="img-fluid rounded-circle mb-3" src="img/testimonials-2.jpg"
                                               alt=""/></div>
                                     <h5>Stanley Rogers</h5>
                                     <p className="font-weight-light mb-0">"Simply put... Baba is an exceptional team player with a brilliant mind and delivers value to the business every single day!"</p>
                                 </div>
                                 <div className={'pd-50'}>
                                     <div style={{padding:'5rem'}}>  <img className="img-fluid rounded-circle mb-3" src="img/testimonials-1.jpg"
                                                                          alt=""/></div>
                                     <h5>Ricardo Pinto</h5>
                                     <p className="font-weight-light mb-0">"Baba is a highly innovative Strategist. I had the pleasure of working with Baba to develop, build and scale a major project at a major American fortune 500.<br/></p>
                                 </div>
                                 <div className={'pd-50'}>
                                     <div style={{padding:'5rem'}}> <img className="img-fluid rounded-circle mb-3" src="img/testimonials-3.jpg"
                                                                         alt=""/></div>
                                     <h5>Emil Martinez</h5>
                                     <p className="font-weight-light mb-0">"I have had the pleasure of working with Baba over the past few years and have found him to be highly intelligent, flexible, open to alternative ideas/approaches and most of all passionate in his desire to ensure delivery excellence to all stakeholders"</p>

                                 </div>
                                 <div className={'pd-50'}>
                                     <div style={{padding:'5rem'}}><img className="img-fluid rounded-circle mb-3" src="img/testimonials-3.jpg"
                                                                         alt=""/></div>
                                     <h5>Carl Noon </h5>
                                     <p className="font-weight-light mb-0">"  Am here with Baba, a friend of mine. After coming to my workshop, listening and taking action. He became very successful within a short period of time. This is what happens when you apply the knowledge like Baba did..."</p>

                                 </div>
                             </Slider>
                             </div>
                         </div>
                     </div>
                 </section>
                 <Form/>
             </div>
         )
     }
}

export default Home