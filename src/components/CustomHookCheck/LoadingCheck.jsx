import * as React from 'react'
import {useJsonFetch} from "../../customHooks/useJsonFetch";

export const LoadingCheck = ({url}) => {
    const [{loading, data}] = useJsonFetch(url);

    return (
        !loading ? <div>{data.status}</div> : <div>Loading...</div>
    )
}
