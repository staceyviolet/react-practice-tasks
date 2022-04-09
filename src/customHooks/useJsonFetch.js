import {useEffect, useState} from 'react'

export const useJsonFetch = (url, opts) => {
    const [data, setData] = useState({status: ''})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            try {
                await fetch(url, opts)
                    .then(response => response.json())
                    .then(response => {
                        if (response.status === 'ok') {
                            setData(response)
                        } else {
                            setError("ошибка ответа")
                        }
                    }).catch(e => setError("пришёл не JSON"))
            } catch (e) {
                setError("ошибка сети")
            } finally {
                setLoading(false)
            }
        }
        loadData()
    }, [url, opts])

    return [{data, loading, error}]
}
