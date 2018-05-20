import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import './home.css'


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
    constructor(){
        super()
        this.state = {
            blurred:''
        }
        this.blur = this.blur.bind(this)
    }
    componentDidMount(){
        window.addEventListener('scroll', this.blur)
    }

    blur(){
        if (window.scrollY > 0) {
            this.setState({blurred:'blur(3px)'})
        }
        else if (window.scrollY === 0){
            this.setState({
                blurred: 'blur(0px)'
            },()=>{console.log('blur', this.state.blurred)})

        }
    }

     render() {

         const {blurred} = this.state

         return (

             <div>
                 <header className="masthead text-left text-white" style={{
                     background: "url('../img/40922787524_0eb78e5bf6_k (1).jpg')",
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
                                 <div style={{marginTop: '25vh'}}>
                                     <h1 className="masthead-heading mb-0 text-uppercase t-62 text-center">Work Less, Earn
                                         More</h1>
                                     <h4 className="masthead-subheading mb-0 text-center">Other people should not determine your worth. Stop being a paid slave !
</h4>
                                     <div className={'text-center'}>
                                         <Link to={'/about'} className="btn abt-btn">Read More<span><i class="fa fa-long-arrow-right"></i></span></Link>
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
                                     <p className="lead mb-0">This theme will look great on any device, no matter the
                                         size!</p>
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
                                 <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                                     <div className="features-icons-icon d-flex">
                                         <i className="icon-check m-auto text-grey"></i>
                                     </div>
                                     <h5>Make Money</h5>
                                     <p className="lead mb-0">Ready to use with your own content, or customize the
                                         source files!</p>
                                 </div>
                             </div>
                             <div className="col-lg-3">
                                 <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                                     <div className="features-icons-icon d-flex">
                                         <i className="icon-book-open m-auto text-grey"></i>
                                     </div>
                                     <h5>Books</h5>
                                     <p className="lead mb-0">Ready to use with your own content, or customize the
                                         source files!</p>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </section>

                 <section className="showcase">
                     <div className="container-fluid p-0">
                         <div className="row no-gutters">

                             <div className="col-lg-6 order-lg-2 text-white showcase-img"
                                  style={{backgroundImage: 'url("../img/bg-showcase-1.jpg")'}}></div>
                             <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                                 <div className={'title'}>
                                     <h5>Do you have a full time job?</h5>
                                     <h2 className={'text-uppercase'}>Time Freedom</h2>
                                 </div>
                                 <p className="lead mb-0">When you use a theme created by Start Bootstrap, you know that
                                     the theme will look great on any device, whether it's a phone, tablet, or desktop
                                     the page will behave responsively!</p>
                             </div>
                         </div>
                         <div className="row no-gutters">
                             <div className="col-lg-6 text-white showcase-img"
                                  style={{backgroundImage: 'url("../img/bg-showcase-2.jpg")'}}></div>
                             <div className="col-lg-6 my-auto showcase-text">
                                 <div className={'title'}>
                                     <h5>Do you want to earn more?</h5>
                                     <h2 className={'text-uppercase'}>Financial Freedom</h2>
                                 </div>
                                 <p className="lead mb-0">Newly improved, and full of great utility classNamees,
                                     Bootstrap 4 is leading the way in mobile responsive web development! All of the
                                     themes on Start Bootstrap are now using Bootstrap 4!</p>
                             </div>
                         </div>
                         <div className="row no-gutters">
                             <div className="col-lg-6 order-lg-2 text-white showcase-img"
                                  style={{backgroundImage: 'url("../img/bg-showcase-3.jpg")'}}></div>
                             <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                                 <div className={'title'}>
                                     <h5>Would like to work at your comfort?</h5>
                                     <h2 className={'text-uppercase'}>Location Freedom</h2>
                                 </div>
                                 <p className="lead mb-0">Landing Page is just HTML and CSS with a splash of SCSS for
                                     users who demand some deeper customization options. Out of the box, just add your
                                     content and images, and your new landing page will be ready to go!</p>
                             </div>
                         </div>
                         <div className="row no-gutters">
                             <div className="col-lg-6 order-lg-1 text-white showcase-img"
                                  style={{backgroundImage: 'url("../img/bg-showcase-1.jpg")'}}>
                                 <a href=''>
                                     <div className='overlay1'>
                                         <h3 className={'text-center'}>This event is happening</h3>
                                     </div>
                                 </a>
                             </div>
                             <div className="col-lg-6 order-lg-2 text-white showcase-img"
                                  style={{backgroundImage: 'url("../img/bg-showcase-3.jpg")'}}>
                                 <a href=''>
                                     <div className='overlay2'>
                                         <h3 className={'text-center'}>This event is happening</h3>
                                     </div>
                                 </a>
                             </div>
                         </div>
                     </div>
                 </section>


                 <section className="testimonials text-center bg-light">
                     <div className="container">
                         <h2 className="mb-5 text-uppercase">What people are saying...</h2>
                         <div className="row">
                             <div className="col-lg-4">
                                 <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                                     <img className="img-fluid rounded-circle mb-3" src="img/testimonials-1.jpg"
                                          alt=""/>
                                     <h5>Margaret E.</h5>
                                     <p className="font-weight-light mb-0">"This is fantastic! Thanks so much guys!"</p>
                                 </div>
                             </div>
                             <div className="col-lg-4">
                                 <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                                     <img className="img-fluid rounded-circle mb-3" src="img/testimonials-2.jpg"
                                          alt=""/>
                                     <h5>Fred S.</h5>
                                     <p className="font-weight-light mb-0">"Bootstrap is amazing. I've been using it to
                                         create lots of super nice landing pages."</p>
                                 </div>
                             </div>
                             <div className="col-lg-4">
                                 <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                                     <img className="img-fluid rounded-circle mb-3" src="img/testimonials-3.jpg"
                                          alt=""/>
                                     <h5>Sarah W.</h5>
                                     <p className="font-weight-light mb-0">"Thanks so much for making these free
                                         resources available to us!"</p>
                                 </div>
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