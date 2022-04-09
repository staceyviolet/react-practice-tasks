import * as React from 'react'
import {useJsonFetch} from "../../customHooks/useJsonFetch";

export const NormalFetch = ({url}) => {
    const [{data}] = useJsonFetch(url);

    return (
        <div style={{color: 'lightgreen'}}>
            {data.status}
        </div>
    )
}
