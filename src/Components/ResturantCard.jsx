import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { CDN_URL } from '../utils/constants';
import { Link } from 'react-router';


const ResturantCard = ({ data }) => {
    const info = data.info;

    return (
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} sx={{ p: 1 }}>
            <Link style={{ display: "block" }} to={"/resturants/" + info.id} >
                <Card
                    sx={{
                        borderRadius: 3,
                        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                        transition: 'transform 0.3s, box-shadow 0.3s',
                        '&:hover': {
                            transform: 'translateY(-5px)',
                            boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                        },
                    }}
                >
                    <CardActionArea>
                        <CardMedia
                            sx={{ height: 180 }}
                            image={CDN_URL + info.cloudinaryImageId}
                            title={info.name}
                        />

                        <CardContent>
                            <Typography variant="h6" component="div" sx={{ fontWeight: 600, mb: 0.5 }}>
                                {info.name}
                            </Typography>

                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                <Typography variant="body2" sx={{ fontWeight: 500, color: 'green' }}>
                                    {info.avgRatingString ? info.avgRatingString : 'N/A'} ⭐
                                </Typography>
                                <Typography variant="body2" sx={{ fontWeight: 500, color: 'text.secondary' }}>
                                    {info.costForTwo}
                                </Typography>
                            </Box>

                            <Typography variant="body2" sx={{ mb: 0.5, color: 'text.secondary' }}>
                                {info.cuisines.join(', ')}
                            </Typography>

                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {info.locality}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Link>
        </Grid >
    );
};

export default ResturantCard;
