import React, { useEffect, useState } from 'react'
import { MENU_ID } from '../utils/constants';

const useResturantMenu = (resid) => {

    const [resturantMenuData, setresturantMenuData] = useState(null)

    const fetchData = async () => {
        const data = await fetch(MENU_ID + resid + "&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json()
        const firstIndexData = json.data;
        setresturantMenuData(firstIndexData);
    }

    useEffect(() => {
        fetchData()
    }, [])

    return resturantMenuData
}

export default useResturantMenu