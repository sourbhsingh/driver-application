import { useState } from "react";
import logo from '../assets/companyLogo.png';

import {
    NavLink,
} from "react-router-dom";

interface NavItem {
    label: string;
    slug: string;
    icon: string;
}



function Sidebar() {

    const [nav] = useState<NavItem[]>([
        { label: "Dashboard", slug: "/dashboard", icon: "icon-home" },
        { label: "Discover", slug: "discover", icon: "icon-ul" },
        { label: "Categories", slug: "cates", icon: "icon-tag" },
        { label: "My Courses", slug: "my-courses", icon: "icon-briefcase" }
    ]);

    const [] = useState<string>("/");

    var navigation: JSX.Element[] = [];
    for (let i = 0; i < 1; i++) {
        navigation.push(
            <li key={"nav-" + i + "-" + nav[i].slug}>
                <NavLink to={nav[i].slug} className={"aic link noul flex c333"}>
                    <div className={"ico s20 " + nav[i].icon} />
                    <h2 className="lbl s20">{nav[i].label}</h2>
                </NavLink>
            </li>
        );
    }

    

    return (
        <div className="sidebar rel">
            <a href="#" className="logo bl">
                <img src={logo} className="bl" alt="Company Logo" />
            </a>

            <ul className="nav">
                {navigation}
            </ul>

            <div className="updated-course flex aic">
                <div className="icon-lamp-bright cfff s24 ico" />
                <div className="lbl s15 fontb c333">
                    Updated Courses
                    <h2 className="author s13 c777">by Kamran Wajdani</h2>
                </div>
            </div>

            <div className="stats aic flex">
                <div className="stats-box flex">
                    <div className="ico ico-points s24 icon-shield" />
                    <h2 className="val s15 c333 fontb">1800</h2>
                    <h2 className="lbl s13 c777">points</h2>
                </div>
                <div className="stats-box flex">
                    <div className="ico ico-battery s24 icon-battery-90" />
                    <h2 className="val s15 c333 fontb">45.3%</h2>
                    <h2 className="lbl s13 c777">complete</h2>
                </div>
            </div>

            

        </div>
    );
}

export default Sidebar;
