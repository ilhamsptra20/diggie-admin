import React, { Component } from "react"
import routes from "./routes"
import { Routes, Route } from "react-router-dom"

const Router = () => {
    return (
        <Routes>
            {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    Component={route.component}
                />
            ))}
        </Routes>
    )
}

export default Router
