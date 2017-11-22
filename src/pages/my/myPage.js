import React from 'react'
import { Button, List } from 'antd-mobile';
import mirror, { actions, connect, Redirect } from 'mirrorx'
import user from '../../data/auth'
import path from '../../data/routerpath'
mirror.model({
    name: 'update',
    initialState: false,
    reducers: {
        update(state) {
            user.logout();
            return state = !state;
        }
    }
})



const ComplexButtonDemo = (props) => (
    user.hasLogin() ?
        <List style={{ margin: '5px 0', backgroundColor: 'white' }}>
            <List.Item
                extra={<Button type="primary" size="small" inline onClick={() => { actions.update.update() }}>注销</Button>}
                multipleLine
            >
                {
                    user.displayName
                }
                <List.Item.Brief>
                    这家伙很懒什么都没留下...
      </List.Item.Brief>
            </List.Item>


        </List> : <Redirect to={path.login} />
);
export default connect(state => {
    return { pUpdate: state.update }
})(ComplexButtonDemo);
