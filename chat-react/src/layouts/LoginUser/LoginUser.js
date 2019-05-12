import React,{Component} from 'react';
import {List,InputItem,WhiteSpace} from 'antd-mobile';
import { createForm } from "rc-form";

class LoginUser extends Component{
    componentDidMount() {
        // this.autoFocusInst.focus();
    }
    handleClick = () => {
        
    }
    render () {
        const { getFieldProps } = this.props.form;
        return(
            <div id="LoginUser">
                <WhiteSpace />
                <List renderHeader={() => 'login'}>
                <InputItem
                    {...getFieldProps('bankCard', {
                    initialValue: '8888 8888 8888 8888',
                    })}
                    type="bankCard"
                >银行卡</InputItem>
                <InputItem
                    {...getFieldProps('phone')}
                    type="phone"
                    placeholder="186 1234 1234"
                >手机号码</InputItem>
                <InputItem
                    {...getFieldProps('password')}
                    type="password"
                    placeholder="****"
                >密码</InputItem>
                </List>

                <WhiteSpace />
            </div>
        )
    }
    
}

export default createForm()(LoginUser);