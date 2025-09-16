import { Box, Container, Typography, Divider, Grid } from '@mui/material'
import ResturanctsCardsShimmer from './ResturanctsCardsShimmer'
import { useParams } from 'react-router'
import useResturantMenu from '../Hooks/useResturantMenu'
import ItemsListAccordian from './ItemsListAccordian'

const ResturantsMenu = () => {
    const { resid } = useParams()

    const resturantMenuData = useResturantMenu(resid)

    if (resturantMenuData === null) return <ResturanctsCardsShimmer />;

    console.log(resturantMenuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const cardsInfo = resturantMenuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

    const categories = cardsInfo?.filter((item) => (
        item?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" || item?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    ))

    const { name, costForTwoMessage, cuisines, avgRating, locality, totalRatingsString } = resturantMenuData?.cards[2]?.card?.card?.info || [];

    const { itemCards } = resturantMenuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || [];

    return (
        <>
            <Container maxWidth="md" sx={{ maxWidth: '900px', mt: 4, mb: 4 }} >
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
                    {
                        categories?.map((catogery) => (
                            <ItemsListAccordian data={catogery} key={catogery?.card?.card?.categoryId} />
                        ))
                    }
                </Box>

            </Container >
        </>
    )
}

export default ResturantsMenu
