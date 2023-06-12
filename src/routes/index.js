import overviewRoute from './overview'
import merchantRoute from './merchant'

import Layout from '@/pages/layout'
import Error from '@/pages/404'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export interface RouteType {
    path: string;
    element: React.ReactNode;
    children?: Array<RouteType>;
}

const routeArray: Array = [
    {
        path: '/',
        element: <Layout />,
        children: [...overviewRoute, ...merchantRoute],
    },
]
const CollectRouter = () => {
    const initRoute = (routeArray) =>
        routeArray.map((item) =>
            item.children ? (
                item.children.map((item1) => (
                    <Route
                        path={item1.path}
                        key={item1.path}
                        element={item1.element}
                    ></Route>
                ))
            ) : (
                <Route
                    path={item.path}
                    key={item.path}
                    element={item.element}
                ></Route>
            )
        )

    return (
        <Router>
            <Routes>{initRoute(routeArray)}</Routes>
        </Router>
    )
}

export default CollectRouter
