interface Post{
    userId:number;
    id:number;
    title:string;
    body:string;
}

const ArticlesPage = async ()=>{

    async function fetchData(){
        const data = await fetch("https://jsonplaceholder.typicode.com/posts")
        const articles = await data.json()
        return articles
    }
    const data = await fetchData()

    return <div>
        {data.map((p:Post)=><div key={p.id}>{p.title}</div>)}
    </div>

}


export default ArticlesPage