import { lazy } from 'react'
const Index = lazy(() => import('@/pages/merchant/index'))

const routes = [
    {
        path: '/index',
        element: <Index />,
    },
]

export default routes
