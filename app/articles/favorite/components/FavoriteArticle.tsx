import Post from '@/types/IPost'
import React from 'react'

const FavoriteArticle = async ({ id }: { id: number }) => {

    async function fetchFavoritePost(id: number) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            if (!response.ok) {
                throw new Error(`Failed to fetch post with ID ${id}`);
            }
            const post = await response.json();
            return post as Post;
        } catch (error) {
            console.error("Error fetching data:", error);
            throw error;
        }
    }
    const post = await fetchFavoritePost(id)
    return (
        <div className='bg-red-300 border-2'>
            <div>{post.title}</div>
            <div>{post.body}</div>
        </div>

    )
}

export default FavoriteArticle