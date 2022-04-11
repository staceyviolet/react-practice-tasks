import * as React from 'react'
import {useState} from "react";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";

export const NewPost = ({}) => {
    const savedValue = localStorage.getItem('content')
    const [content, setContent] = useState(savedValue ? savedValue : '')

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()

        await fetch('http://localhost:7777/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: 0, content: content})
        })

        navigate('/', {replace: true})
    }

    const handleClose = () => {
        const content = document.getElementById("content").value;
        localStorage.setItem("content", content);
    }

    return (
        <div className={'posts'}>
            <div className={'post'}>
                <div className={'post__create-header'}>
                    <div>Публикация</div>
                    <div>Фото/видео</div>
                    <div>Прямой эфир</div>
                    <div>Еще</div>
                    <button onClick={handleClose}><Link to={'/'}>x</Link></button>
                </div>
                <div className={'post__create-form'}>
                    <img src={'https://ncdsonline.org/wp-content/uploads/bb-plugin/cache/empty-profile-image-square.jpg'}
                         alt={'avatar'}/>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor={'post'}/>
                        <textarea name={'post'} id={'post'} value={content} rows={'3'}
                                  onChange={(e) => setContent(e.target.value)}/>
                        <div className={'post__footer'}>
                            <button type={'submit'}>Опубликовать</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
