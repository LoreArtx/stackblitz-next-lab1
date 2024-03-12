
const urls = [{path:"articles/favorite", text:"Favorites"}, {path:"articles/create", text:"Create"}]

const Layout = ({ children }: { children: React.ReactNode }) => {
    return <>
        <h1 className="bg-black w-full text-white">Articles Header</h1>

        {children}
    </>;
}

export default Layout;