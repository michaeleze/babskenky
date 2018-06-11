import React from 'react';
import {Route,Switch } from 'react-router-dom';
import Home from './home/home';
import About from './about/about';
import Contact from './contact/contact';
import Blog from './blog/blog';
import Store from './store/store';



const Views = () => {
    return(
        <div>
            <Switch>
                <Route exact={true} path="/" render={(props)=><Home {...props}/>}/>
                {/*<IndexRoute component={Portfolio}/>*/}
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/blog" component={Blog}/>
                <Route path="/store" component={Store}/>
            </Switch>
        </div>

    )

}

export default Views