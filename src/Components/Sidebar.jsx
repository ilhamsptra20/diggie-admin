import React, { useState } from "react"
import routes from "../router/routes"
import { Link, NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"

library.add(fas, far, fab)

const Sidebar = (props) => {
    const handleToggleSidebar = () => {
        props.onToggle(!props.isOpen)
    }

    return (
        <div
            className={`${
                props.isOpen ? "w-72" : "w-20 -translate-x-20 md:translate-x-0"
            } bg-primary h-screen p-5 pt-8 duration-300 fixed md:z-10`}
            onClick={handleToggleSidebar}
        >
            <div className="flex gap-x-4 items-center translate-y-16 md:translate-y-0">
                <img
                    src="./src/assets/logo.png"
                    alt="logo"
                    className={`md:cursor-pointer duration-500 ${
                        props.isOpen && "rotate-[360deg]"
                    }`}
                    onClick={handleToggleSidebar}
                />
                <h1
                    className={`text-white origin-left md:cursor-pointer font-mediun text-xl duration-200 flex-wrap ${
                        !props.isOpen && "scale-0"
                    }`}
                >
                    <Link to={"/"}>Application</Link>
                </h1>
            </div>
            <ul
                className="pt-6 translate-y-16 md:translate-y-0"
                onClick={(e) => {
                    if (!props.isOpen) {
                        // e.preventDefault() // Mencegah navigasi bawaan
                        e.stopPropagation() // Mencegah propagasi event
                    }
                }}
            >
                {routes
                    .filter((Menu) => Menu.type === "sidebar")
                    .map((Menu, index) => (
                        <NavLink
                            key={index}
                            to={Menu.path}
                            className={({ isActive }) =>
                                isActive
                                    ? "sidebar-link-active md:group" +
                                      (Menu.gap ? " mt-9" : " mt-2")
                                    : "sidebar-link md:group" +
                                      (Menu.gap ? " mt-9" : " mt-2")
                            }
                        >
                            <FontAwesomeIcon icon={Menu.icon} size="xl" />
                            {/* <img src={`./src/assets/${Menu.src}.png`} alt="" /> */}
                            <span
                                className={`${
                                    !props.isOpen && "hidden"
                                } origin-left duration-200`}
                            >
                                {Menu.title}
                            </span>
                            {!props.isOpen && (
                                <span
                                    className={`
                                        absolute left-full rounded-md px-2 py-1 ml-6
                                        bg-indigo-100 text-indigo-800 text-sm
                                        invisible opacity-20 -translate-x-3 transition-all
                                        md:group-hover:visible md:group-hover:opacity-100 md:group-hover:translate-x-0
                                    `}
                                >
                                    {Menu.title}
                                </span>
                            )}
                        </NavLink>
                    ))}
            </ul>
        </div>
    )
}

export default Sidebar
