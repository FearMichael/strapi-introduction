import React from 'react';
import { Grid, Paper, CardMedia, Typography, Box, makeStyles, createStyles } from '@material-ui/core';

type ServiceProps = {
    serviceTitle: string,
    serviceImage: string,
    serviceBody: string
};

const useStyles = makeStyles(() =>
    createStyles({
        serviceBody: {
            padding: "1rem"
        }
    }),
);


const Services: React.FC<ServiceProps> = (props) => {

    const classes = useStyles();

    return (
        <Box>
            <Grid
                container
            >
                <Grid
                    item
                    sm={12}
                    md={4}
                >
                </Grid>
                <Grid
                    item
                    sm={12}
                    md={8}
                >
                    <Typography
                        align="center"
                        variant="h6"
                    >
                        {props.serviceTitle}
                    </Typography>
                </Grid>

                <Grid item sm={12} md={4}>
                    <CardMedia
                        component="img"
                        src={props.serviceImage}
                    />
                </Grid>
                <Grid item sm={12} md={8}>
                    <Typography
                        variant="body1"
                        className={classes.serviceBody}
                    >
                        {props.serviceBody}
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Services;