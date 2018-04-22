import React from 'react';
import {Link} from 'react-router-dom'
import './nav.css';


const Nav = () => {

    return (
<div>
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">

            <div className="container">
                <a className="navbar-brand" href="">BabSkenky</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="icon-menu m-auto text-gold"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to={'/'}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/about'}>Know Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/store'}>Store</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/blog'}>Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'contact'}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <header className="masthead text-center text-white">
        <div className="masthead-content">
        <div className="container">
        <h1 className="masthead-heading mb-0">One Page Wonder</h1>
    <h2 className="masthead-subheading mb-0">Will Rock Your Socks Off</h2>
    <a href="" className="btn btn-primary btn-xl rounded-pill mt-5">Learn More</a>
</div>
</div>
    <div className="bg-circle-1 bg-circle"></div>
    <div className="bg-circle-2 bg-circle"></div>
    <div className="bg-circle-3 bg-circle"></div>
    <div className="bg-circle-4 bg-circle"></div>
</header>
</div>

    )
}

export default Nav