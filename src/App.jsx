import React, { useState } from "react"
import Sidebar from "./Components/Sidebar"
import Navbar from "./Components/Navbar"
import Router from "./router/Router"

const App = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const handleToggleSidebar = () => {
        setIsSidebarOpen((state) => !isSidebarOpen)
    }

    return (
        <div className="flex">
            <Sidebar isOpen={isSidebarOpen} onToggle={handleToggleSidebar} />
            <Navbar onToggleSidebar={handleToggleSidebar} />
            <main
                className="mt-20 mx-4 md:ml-24 md:mr-4 w-screen h-screen"
                onClick={isSidebarOpen ? handleToggleSidebar : undefined}
            >
                <Router />
            </main>
            {/* <main className="container">
                <Router />
            </main> */}
        </div>
    )
}

export default App
