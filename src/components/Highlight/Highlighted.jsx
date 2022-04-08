import * as React from 'react'
import {Popular} from "./Popular";
import {Article} from "./Article";
import {Video} from "./Video";
import {New} from "./New";

export const withHighlight = (Component) => {
    return function (props, ...args) {
        if (props.views > 1000) {
            return <Popular>{Component.apply(this, [props, ...args])}</Popular>
        }

        if (props.views < 100) {
            return <New>{Component.apply(this, [props, ...args])}</New>
        }

        return Component.apply(this, [props, ...args])
    }
}
export const HighlightedArticle = withHighlight(Article);

export const HighlightedVideo = withHighlight(Video);
