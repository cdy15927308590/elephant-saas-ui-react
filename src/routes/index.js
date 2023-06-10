import overviewRoute from './overview'
import merchantRoute from './merchant'
import Error from '@/pages/404'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export interface RouteType {
    path: string;
    element: React.ReactNode;
    children?: Array<RouteType>;
}

const routeArray: Array = [...overviewRoute, ...merchantRoute]
const CollectRouter = () => {
    const initRoute = (routeArray) =>
        routeArray.map((item) => (
            <Route
                path={item.path}
                key={item.path}
                element={item.element}
            ></Route>
        ))

    return (
        <Router>
            <Routes>{initRoute(routeArray)}</Routes>
        </Router>
    )
}

export default CollectRouter
