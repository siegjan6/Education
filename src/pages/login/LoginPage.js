import React from 'react'
import { List, InputItem, Button,WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';

import { Link, Redirect } from 'mirrorx';
import './loginpage.css'
import Requests from '../../data/requests'
import user from '../../data/auth'
import path from '../../data/routerpath' 
class BasicInputExample extends React.Component {
    handleClick = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log(values);
            if (!err) {
                let promise = Requests.send('login', JSON.stringify(values));
                promise.then(() => {
                    this.forceUpdate();
                })
            }
        });
    }
    render() {
        if (user.hasLogin()) { 
            return <Redirect to={path.tabBar} />
        }
        const { getFieldProps } = this.props.form;
        return (<List renderHeader={() => '君德教育'}>
            <InputItem
                {...getFieldProps('userName') }
                clear
                placeholder=""
                ref={el => this.autoFocusInst = el}
            >账号</InputItem>
            <InputItem
                {...getFieldProps('password') }
                clear
                placeholder=""
                ref={el => this.customFocusInst = el}
            >密码</InputItem>
            <List.Item>
                <div
                    style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
                    onClick={this.handleClick}
                >
                    <Button type="primary">登录</Button><WhiteSpace />
                </div>
            </List.Item>
        </List>
        );
    }
}
const BasicInputExampleWrapper = createForm()(BasicInputExample);

export default BasicInputExampleWrapper;
