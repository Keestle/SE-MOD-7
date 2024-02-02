import Homepage from "../Homepage";
import AboutPage from "../AboutPage";
import DashboardPage from "../DashboardPage";
import { DashboardMessages } from "../DashboardPage";
import { DashboardTasks } from "../DashboardPage";
import PageNotFound from "../PageNotFound";
import { Routes, Route} from "react-router-dom"

function AppRoutes(props) {
    return (
    <Routes>
    {/* index matches on default/home URL: / */}
    <Route index element={<Homepage {...props} />} />
    {/* nested routes, matches on /dash/messages etc */}

    <Route path="dash" element={<DashboardPage {...props} />}>
    <Route path="messages" element={<DashboardMessages />} />
    <Route path="tasks" element={<DashboardTasks />} />
    </Route>
    <Route path='/about' element={<AboutPage {...props} />} />
    {/* special route to handle if none of the above match */}
    <Route path="*" element={<PageNotFound />} />
    </Routes>
    )
    }
    export default AppRoutes;
    // Name this file AppRoutes.jsx and store in new folder 'routes'
    