import Post from "@/types/IPost";
import FavoriteArticle from "./components/FavoriteArticle";
import { Suspense } from "react";

const FavoritePage = async () => {


    const ids = [1, 24, 32];
    return <div>
        {ids.map(id => <Suspense key={id} fallback={<p>Loading... {id}</p>}>
            <FavoriteArticle id={id} />
        </Suspense>)}
    </div>

}

export default FavoritePage