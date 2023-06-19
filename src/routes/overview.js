import { lazy } from 'react'
import { Outlet } from 'react-router-dom'
import {
    AppstoreOutlined,
    MailOutlined,
    SettingOutlined,
} from '@ant-design/icons'
const Overviewpage = lazy(() => import('@/pages/overview/index'))

const routes = [
    {
        path: '/overview',
        element: <Overviewpage />,
        label: '概览',
        icon: <MailOutlined />,
        children: [],
    },
    {
        path: '/mallManage',
        element: <Overviewpage />,
        label: '商城管理',
        icon: <MailOutlined />,
        children: [],
    },
    {
        path: '/financeManage',
        element: <Overviewpage />,
        label: '财务管理',
        icon: <MailOutlined />,
        children: [
            {
                path: 'financeManage',
                element: <Overviewpage />,
                label: 'xxxx',
            },
            {
                path: 'paymentSetting',
                element: <Overviewpage />,
                label: 'yyyyy',
            },
        ],
    },
    {
        path: '/setting',
        element: <Overviewpage />,
        label: '系统设置',
        icon: <MailOutlined />,
        children: [],
    },
]

export default routes
