import React, { useState } from 'react'
import {
    AppstoreOutlined,
    MailOutlined,
    SettingOutlined,
} from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import './index.scss'
import type { MenuProps } from 'antd'
const { Header, Sider, Content } = Layout
type MenuItem = Required<MenuProps>['items'][number]
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4']

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

const items: MenuItem[] = [
    getItem('Navigation One', 'sub1', <MailOutlined />, [
        getItem('Option 1', '1'),
        getItem('Option 2', '2'),
        getItem('Option 3', '3'),
        getItem('Option 4', '4'),
    ]),
    getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
        getItem('Option 5', '5'),
        getItem('Option 6', '6'),
        getItem('Submenu', 'sub3', null, [
            getItem('Option 7', '7'),
            getItem('Option 8', '8'),
        ]),
    ]),
    getItem('Navigation Three', 'sub4', <SettingOutlined />, [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
        getItem('Option 11', '11'),
        getItem('Option 12', '12'),
    ]),
]

function Text() {
    // 菜单menu
    const [openKeys, setOpenKeys] = useState(['sub1'])

    const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1)
        if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
            setOpenKeys(keys)
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
        }
    }

    return (
        <Layout className={'layout'}>
            <Header>Header</Header>
            <Layout hasSider>
                <Sider theme="light">
                    <Menu
                        mode="inline"
                        openKeys={openKeys}
                        onOpenChange={onOpenChange}
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
