import { lazy } from 'react'
import { Outlet } from 'react-router-dom'
const Overviewpage = lazy(() => import('@/pages/overview/index'))

const routes = [
    {
        path: '/overview',
        element: <Overviewpage />,
    },
    // {
    //     path:''
    // }
]

export default routes
