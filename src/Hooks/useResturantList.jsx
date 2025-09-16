import { useEffect, useState } from "react";
import { RES_API } from "../utils/constants";

const useResturantList = () => {
    const [resturantsData, setresturantsData] = useState([])
    const [filteredDate, setfilteredDate] = useState([])

    const fetchData = async () => {
        const data = await fetch(RES_API);
        const json = await data.json();
        const firstIndex = json?.data?.cards?.findIndex((item) => item?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        const nextIndex = json?.data?.cards?.findIndex((item, id) => id > firstIndex && item?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        const getResturants = nextIndex !== -1 ? json?.data?.cards[nextIndex]?.card?.card?.gridElements?.infoWithStyle?.restaurants : null;
        setresturantsData(getResturants)
        setfilteredDate(getResturants)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return { resturantsData, filteredDate, setresturantsData, setfilteredDate }
}

export default useResturantList;