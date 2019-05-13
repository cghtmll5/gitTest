import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {Button,List,InputItem,WhiteSpace,NavBar,Icon} from 'antd-mobile';
import { createForm } from "rc-form";

class Register extends Component{
    componentDidMount() {
        // this.autoFocusInst.focus();
    }
    handleClick = () => {
        alert('12');
    };
    render () {
        const { getFieldProps } = this.props.form;
        return(
            <div id="Register">
                <NavBar className={`ios-top`} icon={<Icon type="left" />} onLeftClick={() => this.props.history.goBack()}>
                    注册
                </NavBar>
                <WhiteSpace />
                    <List>
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
                        <InputItem
                            {...getFieldProps('name')}
                            type="text"
                            placeholder="这是个不错的昵称"
                        >昵称</InputItem>
                    </List>
                <WhiteSpace />
                <div className='App-h-50'>
                </div>
                <Button onClick={() => this.handleClick()}>立即注册</Button>
                <div className="tcenter pt30">
                    已有账号？ <Link to={`/`}><span className="fc-blue">立即登录</span></Link>
                </div>
            </div>
        )
    }

}

export default createForm()(Register);
