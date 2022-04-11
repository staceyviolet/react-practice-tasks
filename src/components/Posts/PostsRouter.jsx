import * as React from 'react'
import {BrowserRouter, Route} from "react-router-dom";
import {Posts} from "./Posts";
import {NewPost} from "./NewPost";
import {PostView} from "./PostView";
import {Navigate, Routes} from "react-router";

export const PostsRouter = () => {
    return (
        <BrowserRouter>
            <div className={'posts-page'}>
                <Routes>
                    <Route path={'/'} element={<Posts/>}/>
                    <Route path={'posts/:postId'} element={<PostView/>}/>
                    <Route path={'/posts/new'} element={<NewPost/>}/>
                    <Route
                        path="*"
                        element={<Navigate to="/" replace/>}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

