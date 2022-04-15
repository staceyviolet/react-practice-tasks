import * as React from 'react'
import {Popular} from "./Popular";
import {Article} from "./Article";
import {Video} from "./Video";
import {New} from "./New";

export const withHighlight = (Component) => {
    return (props) => {
        if (props.views > 1000) {
            return <Popular><Component {...props}/></Popular>
        }
        if (props.views < 100) {
            return <New><Component {...props}/></New>
        }
        return <Component {...props}/>
    }
}
export const HighlightedArticle = withHighlight(Article);

export const HighlightedVideo = withHighlight(Video);
