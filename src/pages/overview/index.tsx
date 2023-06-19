import React, { useState } from 'react'
import {
    AppstoreOutlined,
    MailOutlined,
    SettingOutlined,
} from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import './index.scss'
import type { MenuProps } from 'antd'

// 引入路由
import overviewRoute from '@/routes/overview'
console.log(overviewRoute)
const { Header, Sider, Content } = Layout
type MenuItem = Required<MenuProps>['items'][number]

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group'
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem
}

const items: MenuProps['items'] = overviewRoute.map(item => ({
    ...item,
    key: item.path,
}))

console.log(78, items)

function Text() {
    // 菜单menu
    const [openKeys, setOpenKeys] = useState(['sub1'])

    return (
        <Layout className={'layout'}>
            <Header>Header</Header>
            <Layout hasSider>
                <Sider theme="light">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ width: 200 }}
                        items={items}
                    />
                </Sider>
                <Content className="container">Content</Content>
            </Layout>
        </Layout>
    )
}
export default Text
