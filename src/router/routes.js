import Dashboard from "../pages/Dashboard"
import Inbox from "../pages/Inbox"
import Schedule from "../pages/Schedule"
import Search from "../pages/Search"
import Analytics from "../pages/Analytics"
import Files from "../pages/Files"
import Accounts from "../pages/Accounts"
import Setting from "../pages/Setting"

const routes = [
    {
        path: "dashboard",
        component: Dashboard,
        title: "Dashboard",
        icon: "fa-solid fa-gauge-high",
        type: "sidebar",
    },
    {
        path: "inbox",
        component: Inbox,
        title: "Inbox",
        icon: "fa-solid fa-inbox",
        type: "sidebar",
    },
    {
        path: "accounts",
        component: Accounts,
        title: "Accounts",
        icon: "fa-solid fa-address-book",
        gap: true,
        type: "sidebar",
    },
    {
        path: "schedule",
        component: Schedule,
        title: "Schedule",
        icon: "fa-solid fa-calendar-check",
        type: "sidebar",
    },
    {
        path: "search",
        component: Search,
        title: "Search",
        icon: "fa-solid fa-search",
        type: "sidebar",
    },
    {
        path: "analytics",
        component: Analytics,
        title: "Analytics",
        icon: "fa-solid fa-chart-simple",
        type: "sidebar",
    },
    {
        path: "files",
        component: Files,
        title: "Files",
        icon: "fa-solid fa-folder",
        gap: true,
        type: "sidebar",
    },
    {
        path: "setting",
        component: Setting,
        title: "Setting",
        icon: "fa-solid fa-gear",
        type: "sidebar",
    },
    {
        path: "user",
        component: Setting,
        title: "User",
        icon: "fa-solid fa-circle-user",
        type: "navbar",
    },
]

export default routes
