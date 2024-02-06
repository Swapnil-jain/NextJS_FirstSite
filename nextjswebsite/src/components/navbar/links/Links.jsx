"use client"
import styles from "./links.module.css";
import NavLink from "./navLink/navlink";
import { useState } from "react";
import Image from "next/image";

const links = [
    {
        title: "Homepage",
        path: "/",
    },
    {
        title: "About",
        path: "/about",
    },
    {
        title: "Contact",
        path: "/contact",
    },
    {
        title: "Blog",
        path: "/blog",
    },
];

const Links = () => {
    const [open, setOpen] = useState(false);
    //open is a boolean state variable that represents whether the mobile menu is currently open (true) or closed (false).
    //setOpen is a function that you can call to update the value of open.

    //temporary
    const session = true;
    const isAdmin = true;

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map(link => (
                    <NavLink item={link} key={link.title}></NavLink>
                ))}
                {//for authentcation:

                    session ? (
                        <>
                            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
                            <button className={styles.logout}>Logout</button>
                        </>

                    ) : (
                        //if not logged in.
                        <NavLink item={{ title: "Login", path: "/login" }} />
                    )
                }
            </div>
            {/*The below code is used for the menu toggle for navbar for small screens*/}
            <Image className={styles.menuButton} src='/menu.png' width={30} height={30} onClick={() => setOpen(prev => !prev)} />
            {
                open &&
                (<div className={styles.mobileLinks}>
                    {links.map(link => (
                        <NavLink item={link} key={link.title} />
                    ))}
                </div>
                )
            }
        </div>
    );
};

export default Links;