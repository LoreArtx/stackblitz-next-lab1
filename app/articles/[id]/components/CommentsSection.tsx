import React from 'react'
import Comment from '@/types/IComment';

const CommentsSection = async ({ id }: { id: number }) => {
    async function fetchComments() {
        await new Promise((resolve) => setTimeout(resolve, 2000));

        try {
            const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            const comments = await data.json()
            return comments as Comment[]
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    const comments = await fetchComments()

    return (
        <div className='flex flex-col gap-2'>
            {comments.map(c => <div className='border-2' key={c.id}>
                <div>{c.email}</div>
                <div>{c.name}</div>
                <div>{c.body}</div>
            </div>)}
        </div>
    )
}

export default CommentsSection