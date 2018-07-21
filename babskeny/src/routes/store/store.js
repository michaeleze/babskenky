import React,{Fragment} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {bindActionCreators} from 'redux';
import './store.css';
import 'react-tabs/style/react-tabs.css';
import {connect} from 'react-redux';
import {increment} from '../../store_reducer/action'
// import initialState from '../../state.js';
const mapStateToProps = (state) => ({products:state.products,count:state.count})
const mapDispatchToProps = (dispatch) => ({increase:function(){ return dispatch(increment())}})
const Content = ({currentStore}) =>(
    <Fragment>
    {
        currentStore.map((item,i)=> {

            return (

                <div key ={i} className=" col-md-4 col-sm-12">
                    <div className='card'>
                        <div className="card-img-top">{item.ImageLink}</div>
                    <div className="card-body">
                        <h5 className="card-title">{item.ProductName}</h5>
                        <p className="card-text">{item.BriefContent}</p>
                        <a href="#" className="btn btn-primary absolute">Go somewhere</a>
                    </div>
                </div>
                </div>



            )

        }
    )
}
    </Fragment>
)

class Store extends React.Component{

    // handleCounted = () => {
    //     const {increase} =  this.props
    //    increase()
    // }
    render(){
        const {count,products,  increase} =  this.props
        return (

            <div>
                <header id="home" className="home">
                    <div className="st-overlay-img">
                        <div className="container">

                            <div className="row">
                                <div className="col-md-12">
                                    <a href="https://easy1up.com/?id=babskenky"><img src="https://easy1up.com/images/banners/468by60.png" /></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </header>

                <section>
                    <div className={'container'}>
                        <div className={'row'}>
                            <div className={'col-md-12 spc'}>
                                <Tabs>
                                    <TabList className={'spc'}>
                                        <Tab>Mario</Tab>
                                        <Tab>Peach</Tab>
                                    </TabList>
                                    <TabPanel className={'spc'}>
                                        <div className="container">
                                            <div className='row'>
                                                <div onClick={increase}>CLICK ME </div><div>{count}</div>
                                       <Content currentStore={products}/>
                                            </div>
                                        </div>
                                    </TabPanel>
                                </Tabs>
                            </div>
                        </div>
                    </div>

                </section>


            </div>

        )
    }

    }


export default connect(mapStateToProps,mapDispatchToProps)(Store)