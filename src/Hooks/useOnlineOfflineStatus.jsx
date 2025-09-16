import React, { useEffect, useState } from 'react'

const useOnlineOfflineStatus = () => {

    const [status, setStstus] = useState(true);

    useEffect(() => {
        window.addEventListener("online", () => {
            setStstus(true)
        })
        window.addEventListener("offline", () => {
            setStstus(false)
        })
    }, [])

    return status
}

export default useOnlineOfflineStatus