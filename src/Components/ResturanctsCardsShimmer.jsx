import { Grid, Skeleton } from "@mui/material"

const ResturanctsCardsShimmer = () => {
    return (
        <>
            {
                [...Array(8)].map((_, index) => (
                    <Grid key={index} size={{ xs: 12, sm: 6, md: 4, lg: 3 }} sx={{ marginBottom: "20px" }}>
                        <Skeleton sx={{ borderRadius: 3, boxShadow: '0 4px 15px rgba(0,0,0,0.1)', width: "100%" }} variant="rounded" height={300} />
                    </Grid>
                ))
            }
        </>
    )
}

export default ResturanctsCardsShimmer