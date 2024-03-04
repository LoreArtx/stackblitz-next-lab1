import Post from "@/types/IPost";

const ArticlesPage = async () => {

    async function fetchData() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const articles = await response.json();
            return articles as Post[];
        } catch (error) {
            console.error("Error fetching data:", error);
            throw error;
        }
    }

    const data = await fetchData()

    return <div>
        {data.map(p => <div key={p.id}>{p.title}</div>)}
    </div>

}


export default ArticlesPage