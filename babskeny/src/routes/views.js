import React from 'react';
import {Route } from 'react-router-dom';
import Home from './home/home';
import About from './about/about';
import Contact from './contact/contact';
import Blog from './blog/blog';
import Store from './store/store';



const Views = () => {
    return(
        <div>
                <Route exact={true} path="/" component={Home}/>
                {/*<IndexRoute component={Portfolio}/>*/}
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/blog" component={Blog}/>
                <Route path="/store" component={Store}/>
        </div>

    )

}

export default Views