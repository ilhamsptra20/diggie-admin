import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
library.add(fas, far, fab)

const Navbar = (props) => {
    return (
        <div className="py-4 px-4 md:px-10 text-lg text-dark-purple top-0 bg-white shadow-lg w-full fixed">
            <div className="flex justify-between md:justify-end">
                <button className="md:hidden" onClick={props.onToggleSidebar}>
                    <FontAwesomeIcon icon="fa-solid fa-bars" size="xl" />
                </button>
                <div className="flex gap-3">
                    <button className="">
                        <FontAwesomeIcon
                            icon="fa-solid fa-bell"
                            size="xl"
                            beat
                        />
                    </button>
                    <button className="">
                        <FontAwesomeIcon
                            icon="fa-regular fa-circle-user"
                            size="xl"
                        />
                    </button>
                </div>
            </div>
            {/* Dropdown */}
            <div className="absolute right-10 top-16 duration-300">
                <ul>
                    <li className="p-2 bg-slate-200">logout</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
