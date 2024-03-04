import Post from '@/types/IPost'
import React, { Suspense } from 'react'
import CommentsSection from './components/CommentsSection';

export async function generateStaticParams() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(id => {
        return { id: id.toString() }
    })
}

const ArticlePage = async ({ params }: { params: { id: number } }) => {
    async function fetchPostById() {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        try {
            const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
            const post = await data.json()
            return post as Post
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    const post = await fetchPostById()


    return (
        <div>
            <Suspense fallback={<p>Article loading...</p>}>
                <div className='bg-slate-200'>
                    <div>{post.title}</div>
                    <div>{post.body}</div>
                </div>
            </Suspense>
            <Suspense fallback={<p>Comments loading...</p>}>
                <CommentsSection id={params.id} />
            </Suspense>
        </div>
    )
}

export default ArticlePage