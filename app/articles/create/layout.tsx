const Layout = ({children}:{children:React.ReactNode})=>{
    return <>
    <h2 className="bg-black w-full text-white">Create Header</h2>
    {children}
    </>;
}

export default Layout;