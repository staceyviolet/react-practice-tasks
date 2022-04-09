import * as React from 'react'
import {List} from "./List";
import {Details} from "./Details";
import {useEffect, useState} from "react";
import './usersList.css'

const url = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json'

export const UsersList = () => {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState({
        id: '',
        name: ''
    })
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const loadData = async () => {
            setLoading(true)
            try {
                await fetch(url)
                    .then(response => response.json())
                    .then(response => {
                            setUsers(response)
                        }
                    )
            } catch (e) {
                console.log(e)
            } finally {
                setLoading(false)
            }
        }
        loadData()
    }, [])

    return (
        <div className={'users-list'}>
            {loading ? <p>Loading...</p> : <List list={users} onClick={setUser}/>}
            {!user.id ? null : <Details info={user}/>}
        </div>
    )
}
