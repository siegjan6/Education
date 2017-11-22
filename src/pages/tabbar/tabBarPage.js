import React from 'react'
// import { Link,Redirect} from 'mirrorx'
// // import { Menu, Icon } from 'antd';

// import path from '../data/routerpath'
// import user from '../data/auth' 

// class Header extends React.Component {
//     state = {
//         current: 'RoomPage',
//     }
//     handleClick = (e) => {
//         this.setState({
//             current: e.key,
//         });
//     }
//     render() {
//         if (!user.hasLogin()) {
//             return <Redirect to={path.login} />
//         }
//         return (
//             <div>
//                 <Menu
//                     onClick={this.handleClick}
//                     selectedKeys={[this.state.current]}
//                     mode="horizontal"
//                 >
//                     <Menu.Item key={path.room}>
//                         <Link to={path.room}><Icon type='team' />座位表</Link>

//                     </Menu.Item>
//                     <Menu.Item key={path.homework}>
//                         <Link to={path.homework}><Icon type='book' />作业录入</Link>
//                     </Menu.Item>
//                 </Menu>
//             </div>
//         );
//     }
// }


import { TabBar } from 'antd-mobile';
import './tabbarpage.css'
import { Link, Redirect } from 'mirrorx';
// import Requests from '../../data/requests'

import RoomPage from '../room/RoomPage'
import HomeworkPage from '../homework/HomeworkPage'
import MyPage from '../my/myPage'
import user from '../../data/auth'
import path from '../../data/routerpath'
class TabBarExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: path.room,
            hidden: false,
        };
    }

    renderContent(pageText) {
        switch (pageText) {
            case path.room:
                return <RoomPage />
            case path.homework:
                return <HomeworkPage />
            case path.my:
                return <MyPage />
            default:
                return <div />
        }
    }

    render() {
        if (!user.hasLogin()) {
            return <Redirect to={path.login} />
        }
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >
                    <TabBar.Item
                        title="座位表"
                        key={path.room}
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
                        }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
                        }}
                        />
                        }
                        selected={this.state.selectedTab === 'blueTab'}
                        badge={1}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'blueTab',
                            });
                        }}
                        data-seed="logId"
                    >
                        {this.renderContent(path.room)}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        title="作业录入"
                        key={path.homework}
                        badge={'new'}
                        selected={this.state.selectedTab === 'redTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'redTab',
                            });
                        }}
                        data-seed="logId1"
                    >
                        {this.renderContent(path.homework)}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        title="学生"
                        key="Friend"
                        dot
                        selected={this.state.selectedTab === 'greenTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'greenTab',
                            });
                        }}
                    >
                        {this.renderContent('Friend')}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                        selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                        title="我的"
                        key={path.my}
                        selected={this.state.selectedTab === 'yellowTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'yellowTab',
                            });
                        }}
                    >
                        {this.renderContent(path.my)}
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}
export default TabBarExample;
