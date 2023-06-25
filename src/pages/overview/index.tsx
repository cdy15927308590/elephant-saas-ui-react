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

const items: MenuProps['items'] = overviewRoute.map(item => ({
    ...item,
    key: item.path,
}))

function Text() {
    // 菜单menu
    return (
        <Layout className={'layout'}>
            <Header>Header</Header>
            <Layout hasSider>
                <Sider theme="light">
                    <Menu mode="inline" style={{ width: 200 }} items={items} />
                </Sider>
                <Content className="container">Content</Content>
            </Layout>
        </Layout>
    )
}
export default Text
