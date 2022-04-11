import * as React from 'react'
import {Post} from "./Post";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import './posts.css'

export const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const loadPosts = () => {
            fetch('http://localhost:7777/posts')
                .then(response => response.json())
                .then(response => setPosts(response))
        }

        loadPosts()
    }, [])

    const navigate = useNavigate();

    return (
        <div className={'posts'}>
            <div className={'posts__create'}>
                <button onClick={() => navigate('/posts/new')}>Создать пост</button>
            </div>
            <div>
                {posts.map(post => <Post key={post.id} post={post} /> ).reverse()}
            </div>
        </div>
    )
}
