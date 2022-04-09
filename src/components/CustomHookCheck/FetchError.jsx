import * as React from 'react'
import {useJsonFetch} from "../../customHooks/useJsonFetch";

export const FetchError = ({url}) => {
    const [{error}] = useJsonFetch(url);

    return <div style={{color: 'red'}}>{error}</div>
}
