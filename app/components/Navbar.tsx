"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = ()=>{
    const pathName = usePathname()

    const urls = [{path:"/articles", text:"Articles"},{path:"/profile/settings", text:"Settings"},{path:"/profile/security", text:"Security"}]
    return <ul className="w-full bg-slate-500 flex justify-center py-[15px] gap-[30px]">
        {urls.map(u=>{
        const activeCss = pathName === u.path ? "text-red-500" : "";
            return <Link key={u.path} className={activeCss} href={u.path}>{u.text}</Link>
        })}
    </ul>
}

export default Navbar;