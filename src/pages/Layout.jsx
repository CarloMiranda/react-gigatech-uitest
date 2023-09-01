import React, { useState } from 'react';
import { Outlet } from "react-router-dom";

function Layout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return(
        <div> 
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <div className={` ${isSidebarOpen ? '': 'nav-icon'}`}></div>
                <div className="nav_menu">
                    <i className={`bx ${isSidebarOpen ?'bx-chevron-left' : 'bx-menu' }`} id="btn" onClick={toggleSidebar}></i>
                </div>
                <ul className="nav-list">
                    <hr />
                    <li>
                        <a href="">
                        <i className={`bx ${isSidebarOpen ?'' : 'bxs-dashboard' }`}></i>
                        <span className="link_name">Dashboard</span>
                        </a>
                        <span className="tooltip">Dashboard</span>
                    </li>
                    <li>
                        <a href="">
                        <i className={`bx ${isSidebarOpen ?'' : 'bxs-cart-alt' }`} ></i>
                        <span className="link_name">Order</span>
                        </a>
                        <span className="tooltip">Order</span>
                    </li>
                    <li>
                        <a href="">
                        <i className={`bx ${isSidebarOpen ?'' : 'bxs-group' }`}></i>
                        <span className="link_name">Customer</span>
                        </a>
                        <span className="tooltip">Customer</span>
                    </li>
                    <li>
                        <a href="">
                        <i className={`bx ${isSidebarOpen ?'' : 'bxs-bar-chart-alt-2' }`}></i>
                        <span className="link_name">Reports</span>
                        </a>
                        <span className="tooltip">Reports</span>
                    </li>
                    <li>
                        <a href="">
                        <i className={`bx ${isSidebarOpen ?'' : 'bxs-layer-plus' }`}></i>
                        <span className="link_name">Integrations</span>
                        </a>
                        <span className="tooltip">Integrations</span>
                    </li>
                    <hr />
                    <li>
                        <span className={`${isSidebarOpen ? '': 'save-report'}`}>
                            <p className='ms-5 ps-2 text-secondary'>Saved Reports</p>
                        </span>
                    </li>
                    <li>
                        <a href="">
                        <i className={`bx ${isSidebarOpen ?'' : 'bxs-notepad' }`}></i>
                        <span className="link_name">Current month</span>
                        </a>
                        <span className="tooltip">Current month</span>
                    </li>
                    <li>
                        <a href="">
                        <i className={`bx ${isSidebarOpen ?'' : 'bxs-notepad' }`}></i>
                        <span className="link_name">Last quarter</span>
                        </a>
                        <span className="tooltip">Last quarter</span>
                    </li>
                    <li>
                        <a href="">
                        <i className={`bx ${isSidebarOpen ?'' : 'bxs-notepad' }`}></i>
                        <span className="link_name">Year-end sale</span>
                        </a>
                        <span className="tooltip">Year-end sale</span>
                    </li>
                </ul>
            </div>

            <section className="main-section">
                <div className="main">
                    <Outlet />
                </div>
            </section>

            <footer>
                <p>Copyright © <a href="#" className='text-secondary'>Your Website</a> 2023</p>
            </footer>
        </div>
        )
}

export default Layout;
