import { Box, Container, Typography, Divider, Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import ResturanctsCardsShimmer from './ResturanctsCardsShimmer'
import { useParams } from 'react-router'
import { MENU_ID } from '../utils/constants'

const ResturantsMenu = () => {
    // Hooks
    const [resturantMenuData, setresturantMenuData] = useState(null)
    const { resid } = useParams()
    console.log(resid);

    const fetchData = async () => {
        const data = await fetch(MENU_ID + resid + "&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json()
        console.log(json);
        const firstIndexData = json.data;
        setresturantMenuData(firstIndexData);
    }

    useEffect(() => {
        fetchData()
    }, [])

    if (resturantMenuData === null) return <ResturanctsCardsShimmer />;


    const { name, costForTwoMessage, cuisines, avgRating, locality, totalRatingsString } = resturantMenuData?.cards[2]?.card?.card?.info || [];

    const { itemCards } = resturantMenuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || [];
    console.log(itemCards);

    return (
        <>
            <Container maxWidth="md" sx={{ maxWidth: '900px', mt: 4, mb: 4 }} >
                {
                    <Box sx={{ p: 3, boxShadow: 3, borderRadius: 2, backgroundColor: 'background.paper' }}>
                        <Typography variant="h5" fontWeight="bold" gutterBottom>
                            {name}
                        </Typography>

                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Typography variant="body1" sx={{ mr: 1 }}>
                                ⭐ {avgRating}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {totalRatingsString}
                            </Typography>
                        </Box>

                        <Typography variant="body1" sx={{ mb: 2 }}>
                            💰{costForTwoMessage}
                        </Typography>

                        <Divider sx={{ mb: 2 }} />

                        <Typography variant="body1" sx={{ mb: 1 }}>
                            📍{locality}
                        </Typography>
                        <Divider sx={{ mb: 2 }} />

                        <Typography variant="body1" sx={{ mb: 1 }}>
                            🍽 {cuisines?.join(', ')}
                        </Typography>


                        <Divider sx={{ mb: 2 }} />
                        {
                            itemCards?.map((item) => (
                                <Typography key={item.card.info.id} variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                    {item?.card?.info?.name}
                                </Typography>

                            ))
                        }
                    </Box>

                }
            </Container >
        </>
    )
}

export default ResturantsMenu
