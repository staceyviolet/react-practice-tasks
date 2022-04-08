import React from "react";
import {HighlightedArticle, HighlightedVideo} from "./Highlighted";

export function List(props) {
    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    <HighlightedVideo {...item} />
                );

            case 'article':
                return (
                    <HighlightedArticle {...item} />
                );
        }
    });
};
