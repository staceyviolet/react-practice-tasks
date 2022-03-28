import * as React from 'react'
import './bootstrap-4.3.1/css/bootstrap.css'
import {ImageCap} from "./ImageCap";

export default function Card({children, showImageCap}) {
    return (
        <div className="card" style={{width: "18rem"}}>
            {!showImageCap ? null : <ImageCap/>}
            <div className="card-body">
                {children}
            </div>
        </div>
    )
}
