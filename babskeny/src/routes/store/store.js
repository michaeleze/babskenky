import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './store.css';
import 'react-tabs/style/react-tabs.css';




const Store = () => {

        return (

            <div>
                <header id="home" className="home">
                    <div className="st-overlay-img">
                        <div className="container">

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="st-home-content">

                                        <h5>My Story</h5>
                                        <h1>Why am on a <span>mission</span> to change the world, <span>one person </span>at a time </h1>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </header>

                <section>
                    <div className={'container '}>
                        <div className={'row'}>
                            <div className={'col-md-12 spc'}>
                                <Tabs>
                                    <TabList className={'spc'}>
                                        <Tab>Mario</Tab>
                                        <Tab>Peach</Tab>
                                    </TabList>

                                    <TabPanel className={'spc'}>
                                        <div className="card" style={{width: '18rem'}}>
                                            <img className="card-img-top" src="..." alt="Card image cap"/>
                                                <div className="card-body">
                                                    <h5 className="card-title">Card title</h5>
                                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                    <a href="#" className="btn btn-primary absolute">Go somewhere</a>
                                                </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="card" style={{width: '18rem',marginLeft:'17px'}}>
                                            <img className="card-img-top" src="..." alt="Card image cap"/>
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <a href="#" className="btn btn-primary absolute">Go somewhere</a>
                                            </div>
                                        </div>
                                    </TabPanel>
                                </Tabs>
                            </div>
                        </div>
                    </div>

                </section>


            </div>



        );
    }



export default Store