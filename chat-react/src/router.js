import React,{Component} from 'react';
import {HashRouter ,Route} from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import LoginUser from './layouts/LoginUser/LoginUser';

export default class RouterWrap extends Component{

    render(){
        return(
            <div id="router">
                <HashRouter>
                    <Route path="/" Component={LoginUser} exact/>
                    <Route path="/" Component={DefaultLayout} />
                </HashRouter >
            </div>
        )
    }
}