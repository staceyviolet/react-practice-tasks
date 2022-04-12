import * as React from 'react'
import {useNavigate} from "react-router";
import {formatDate} from "../../utils/formatDate";

export const Post = ({post}) => {
    const navigate = useNavigate();

    const handleClick = (post) => {
        localStorage.setItem("postContent", post.content);
        localStorage.setItem("postCreated", post.created);

        navigate(`/posts/${post.id}`)
    }

    return (
        <div className={'post'}
             onClick={() => handleClick(post)}>
            <div className={'post__header'}>
                <img src={'/img/avatar.jpg'}
                     alt={'avatar'}/>
                <div>
                    <span className={'post__header_name'}>Name Surname</span>
                    <div>
                        <span className={'post__header_role'}>user role</span>
                        <span
                            className={'post__header_created'}>{formatDate(post.created)}</span>
                    </div>
                </div>
            </div>
            <div className={'post__body'}>
                <div className={'post__content'}>
                    {post.content}
                </div>
                <div className={'post__like-comment'}>
                    <button>Нравится</button>
                    <button>Комментировать</button>
                </div>
                <div className={'post__comment'}>
                    <form>
                        <input placeholder={'Напишите комментарий'}/>
                    </form>
                </div>
            </div>
        </div>
    )
}
