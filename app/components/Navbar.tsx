"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./anotherGlobals.scss"
import { Tab, TabList, Tabs } from "@chakra-ui/tabs";

const urls = [{ path: "/articles", text: "Articles" }, { path: "/profile/settings", text: "Settings" }, { path: "/profile/security", text: "Security" }]

const Navbar = () => {
    const pathName = usePathname()
    const Index = urls.findIndex((u)=>u.path===pathName)

    return <Tabs isFitted variant='enclosed'  index={Index}>
        <TabList mb='1em'>
            {urls.map(u => {
                return <Link key={u.path} href={u.path}><Tab>{u.text}</Tab></Link>
            })}
        </TabList>
    </Tabs>
}

export default Navbar;