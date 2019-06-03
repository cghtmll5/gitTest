import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {Button,List,InputItem,WhiteSpace,NavBar,Icon,Toast} from 'antd-mobile';
import { createForm } from "rc-form";
import { getRegister } from "../../servers/server";
import {verifyMobileNumber} from "../../common/util"

class Register extends Component{
    componentWillMount() {
        console.log(getRegister);
        console.log(verifyMobileNumber);
    }
    submit(){
        let params = {
            userAccount:'',
            userPassword:'',
            nickName:'',
        };
        this.props.form.validateFields ((error, value) => {
            if(error){
                Toast.info(error);
                return false;
            }
            params.userAccount = value.phone;
            params.userPassword = value.password;
            params.nickName = value.name;
        });
        if(!params.userAccount || !verifyMobileNumber(params.userAccount)){
            Toast.info('请输入正确手机账号！');
            return;
        }
        if(!params.userPassword){
            Toast.info('请输入密码！');
            return;
        }
        if(!params.nickName){
            Toast.info('请输入昵称！');
            return;
        }
        getRegister(params).then(res=>{
            console.log(res);
        }).catch(err => {
            Toast.info(err);
        })
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
                            placeholder="18612341234"
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
                <Button onClick={() => this.submit()}>立即注册</Button>
                <div className="tcenter pt30">
                    已有账号？ <Link to={`/`}><span className="fc-blue">立即登录</span></Link>
                </div>
            </div>
        )
    }

}

export default createForm()(Register);
