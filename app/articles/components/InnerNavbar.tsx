"use client"
import { TabList, Tabs } from "@chakra-ui/tabs"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

const urls = [{ path: "/articles/favorite", text: "Favorite" }, { path: "/articles/create", text: "Create" }]


const InnerNavbar : React.FC = ()=>{
    const path = usePathname()
    const Index = urls.findIndex(u=>u.path===path)
    return <Tabs isFitted variant='enclosed'  index={Index}>
        <TabList mb='1em'>
            {urls.map(u => {
                return <L\ink key={u.path} href={u.path}><Tab>{u.text}</Tab></Link>
            })}
        </TabList>
    </Tabs>
    
}

export default InnerNavbar