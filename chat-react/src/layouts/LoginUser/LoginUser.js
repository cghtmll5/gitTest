import React,{Component} from 'react';
// import {Link} from 'react-router-dom';
import {Button,List,InputItem,WhiteSpace} from 'antd-mobile';
import { createForm } from "rc-form";

class LoginUser extends Component{
    componentDidMount() {
        // this.autoFocusInst.focus();
    }
    handleClick = () => {

    };
    render () {
        const { getFieldProps } = this.props.form;
        return(
            <div id="LoginUser">
                <WhiteSpace />
                    <List renderHeader={() => 'login'}>
                        <InputItem
                            {...getFieldProps('phone')}
                            type="phone"
                            placeholder="186 1234 1234"
                        >账号</InputItem>
                        <InputItem
                            {...getFieldProps('password')}
                            type="password"
                            placeholder="****"
                        >密码</InputItem>
                    </List>
                <WhiteSpace />
                <div className='App-h-50'>
                </div>
                <Button>login</Button>
                <div className="tcenter pt30">
                    还没有账号？
                    <span className="fc-blue" onClick={() => this.props.history.push('register')}>立即注册</span>
                </div>
            </div>
        )
    }

}

export default createForm()(LoginUser);
