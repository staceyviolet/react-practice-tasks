import * as React from 'react'
import {Popular} from "./Popular";
import {Article} from "./Article";
import {Video} from "./Video";
import {New} from "./New";

export const withHighlight = (Component) => {
    return class extends React.Component {
        render() {
            if (this.props.views > 1000) {
                return <Popular><Component {...this.props}/></Popular>
            }
            if (this.props.views < 100) {
                return <New><Component {...this.props}/></New>
            }
            return <Component {...this.props}/>
        }
    }
}
export const HighlightedArticle = withHighlight(Article);

export const HighlightedVideo = withHighlight(Video);
