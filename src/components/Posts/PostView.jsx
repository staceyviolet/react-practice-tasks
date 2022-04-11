import * as React from 'react'
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router";
import {useState} from "react";
import {EditPost} from "./EditPost";
import {formatDate} from "../../utils/formatDate";

export const PostView = () => {
    const {postId} = useParams()

    const post = {
        id: postId,
        content: localStorage.getItem('postContent'),
        created: localStorage.getItem('postCreated')
    }

    const navigate = useNavigate();


    const deletePost = async (id) => {
        await fetch(`http://localhost:7777/posts/${id}`, {method: 'DELETE'})
        navigate('/')
    }

    const [isEditPage, setIsEditPage] = useState(false)

    return (
        <div className={'posts'}>
            {isEditPage ?
                <EditPost post={post} onClick={() => setIsEditPage(false)}/>
                :
                <div className={'post'}>
                    <div className={'post__header'}>
                        <img
                            src={'https://ncdsonline.org/wp-content/uploads/bb-plugin/cache/empty-profile-image-square.jpg'}
                            alt={'avatar'}/>
                        <div>
                            <span className={'post__header_name'}>Name Surname </span>
                            <div>
                                <span className={'post__header_role'}>user role</span>
                                <span
                                    className={'post__header_created'}>{formatDate(+post.created)}</span>
                            </div>
                        </div>
                    </div>
                    <div className={'post__body'}>
                        <div className={'post__content'}>
                            {post.content}
                        </div>
                        <div className={'post__footer'}>
                            <button onClick={() => setIsEditPage(true)}>Изменить</button>
                            <button onClick={() => deletePost(postId)}>Удалить</button>
                        </div>
                    </div>
                </div>}
        </div>
    )
}
