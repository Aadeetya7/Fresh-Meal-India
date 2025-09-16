import { Box, Typography } from '@mui/material'
import { useRouteError } from 'react-router'

const ErrorPage = () => {

    const err = useRouteError();
    console.log(err);

    return (
        <>
            <Box>
                <Typography>
                    Opp! Error
                </Typography>
                {err.statusText}
            </Box>
        </>
    )
}

export default ErrorPage