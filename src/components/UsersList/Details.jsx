import * as React from 'react'
import {useEffect, useState} from "react";

export const Details = ({info}) => {
    const [userInfo, setUserInfo] = useState({
        "id": "",
        "name": "",
        "avatar": "",
        "details": {
            "city": "",
            "company": "",
            "position": ""
        }
    })

    const [loading, setLoading] = useState(false)

    const loadUserDetails = async (id) => {
        if (!id) {
            return
        }
        setLoading(true)
        try {
            await fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/' + id + '.json')
                .then(response => response.json())
                .then(response => {
                        setUserInfo(response)
                    }
                )
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }

    }

    useEffect(() => {
        loadUserDetails(info.id)
    }, [info.id])

    return (loading ? <p>Loading...</p>
            : <div className={'users-list__details'}>
                <img src={userInfo.avatar + '?img=' + userInfo.id} alt={'avatar'}/>
                <h4>{userInfo.name}</h4>
                <p>City: {userInfo.details.city}</p>
                <p>Company: {userInfo.details.company}</p>
                <p>Position: {userInfo.details.position}</p>
            </div>

    )
}
