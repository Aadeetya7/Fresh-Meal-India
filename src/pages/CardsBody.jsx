import styled from '@emotion/styled';
import { alpha, Box, Button, Grid, InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react'; // dont remove we have made custom hook of it.
import { RES_API } from "../utils/constants"
import ResturantCard from '../Components/ResturantCard';
import ResturanctsCardsShimmer from '../Components/ResturanctsCardsShimmer';
import useResturantList from '../Hooks/useResturantList';


const Search = styled('div')(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const CardsBody = () => {

    const { resturantsData, filteredDate, setresturantsData, setfilteredDate } = useResturantList()
    console.log(resturantsData, "new Custom hook");

    // Hooks
    // Dont remove we have made custom hook of it 
    // const [resturantsData, setresturantsData] = useState([])
    // const [filteredDate, setfilteredDate] = useState([])

    const [searchValue, setsearchValue] = useState("")

    // Dont remove we have made custom hook of it 
    // useEffect(() => {
    //     fetchData()
    // }, [])


    // Hooks ends

    // Functions
    const handleEnterBtn = () => {
        const filteredData2 = resturantsData.filter((res) => (
            res.info.name.toLowerCase().includes(searchValue.toLowerCase())
        ))
        setfilteredDate(filteredData2)
    }

    const handleTopResturants = () => {
        const filteredData = resturantsData?.filter((item) => {
            return item.info.avgRating > 4.5
        })
        setresturantsData(filteredData)
    }

    // Dont remove we have made custom hook of it 
    // const fetchData = async () => {
    //     const data = await fetch(RES_API);
    //     const json = await data.json();
    //     const firstIndex = json?.data?.cards?.findIndex((item) => item?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //     const nextIndex = json?.data?.cards?.findIndex((item, id) => id > firstIndex && item?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    //     const getResturants = nextIndex !== -1 ? json?.data?.cards[nextIndex]?.card?.card?.gridElements?.infoWithStyle?.restaurants : null;
    //     console.log(getResturants);
    //     setresturantsData(getResturants)
    //     setfilteredDate(getResturants)
    // }


    return (
        <>
            <Box sx={{ display: "flex", alignItems: "Center", justifyContent: "space-between", mb: 2 }}>
                <Search>
                    <TextField
                        variant="outlined"
                        placeholder="Search…"
                        size="small"
                        value={searchValue}
                        onChange={(e) => {
                            setsearchValue(e.target.value)
                        }}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handleEnterBtn()
                            }
                        }}
                        sx={{
                            borderRadius: "12px",           // rounded corners
                            backgroundColor: "#fff",        // white background
                            boxShadow: "0px 2px 5px rgba(0,0,0,0.1)", // subtle shadow
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "12px",         // match input corners
                            },
                            "& .MuiOutlinedInput-input": {
                                padding: "10px 12px",         // padding inside input
                            },
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start"  >
                                    <Box
                                        sx={{ cursor: "pointer" }}
                                    >
                                        <SearchIcon
                                            color="action"
                                            sx={{ display: "block" }}
                                        />
                                    </Box>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Search>
                <Button
                    variant="contained"
                    onClick={handleTopResturants}
                >
                    Top Rated Resturants
                </Button>
            </Box>
            {/* --- */}
            <Grid container spacing={2} sx={{ justifyContent: "selfStart" }} >
                {
                    filteredDate.length === 0 ?
                        <ResturanctsCardsShimmer />
                        :
                        <> {filteredDate.map((resturant) => {
                            return (
                                <ResturantCard data={resturant} key={resturant.info.id} />
                            )
                        })
                        } </>
                }
            </Grid >
        </>
    )
}

export default CardsBody