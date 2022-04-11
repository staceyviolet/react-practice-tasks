import * as React from 'react'
import {useState} from "react";

export const EditPost = ({post, onClick}) => {
    const [content, setContent] = useState(post.content)

    const handleSubmit = async (e) => {
        e.preventDefault()

        await fetch('http://localhost:7777/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: +post.id, content: content})
        })

        localStorage.setItem("postContent", content.toString());
        onClick()
    }

    return (
        <div className={'post'}>
            <div className={'post__create-header'}>
                <span>Редактировать публикацию </span>
                <button onClick={onClick}>x</button>
            </div>
            <div className={'post__create-form'}>
                <img src={'https://ncdsonline.org/wp-content/uploads/bb-plugin/cache/empty-profile-image-square.jpg'}
                     alt={'avatar'}/>
                <form onSubmit={handleSubmit}>
                    <label htmlFor={'post'}/>
                    <textarea name={'post'} id={'post'} value={content} rows={"3"} onChange={(e) => setContent(e.target.value)}/>
                    <div className={'post__footer'}>
                        <button type={'submit'}>Сохранить</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
