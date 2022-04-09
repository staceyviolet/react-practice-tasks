import * as React from 'react'
import {NormalFetch} from "./NormalFetch";
import {FetchError} from "./FetchError";
import {LoadingCheck} from "./LoadingCheck";

const SUCCESS_URL = 'http://localhost:7070/data'
const ERROR_URL = 'http://localhost:7070/error'
const LOADING_URL = 'http://localhost:7070/loading '


export const CustomHookCheck = () => {
    return (
        <div>
            <NormalFetch url={SUCCESS_URL}/>
            <FetchError url={ERROR_URL}/>
            <LoadingCheck url={LOADING_URL}/>
        </div>
    )
}
