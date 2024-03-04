"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./anotherGlobals.scss"
import classes from "./Navbar.module.scss"
import { Tab, TabList, Tabs } from "@chakra-ui/tabs";

const Navbar = () => {
    const pathName = usePathname()

    const urls = [{ path: "/articles", text: "Articles" }, { path: "/profile/settings", text: "Settings" }, { path: "/profile/security", text: "Security" }]
    return <Tabs isFitted variant='enclosed' className="bg-blue-400">
        <TabList mb='1em'>
            {urls.map(u => {
                const activeCss = pathName === u.path ? classes.active : "text-black";
                return <Link key={u.path} href={u.path}><Tab className={activeCss}>{u.text}</Tab></Link>
            })}
        </TabList>
    </Tabs>
}

export default Navbar;