import React,{Component} from 'react';
import {HashRouter ,Route} from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import LoginUser from './layouts/LoginUser/LoginUser';
import Register from './layouts/LoginUser/Register';

export default class RouterWrap extends Component{

    render(){
        return(
            <div id="router">
                <HashRouter>
                    <Route exact path="/" component={LoginUser}/>
                    <Route path="/test" component={DefaultLayout} />
                    <Route path="/register" component={Register} />
                </HashRouter >
            </div>
        )
    }
}
