import React from 'react';
import { Grid, Paper, CardMedia, Typography } from '@material-ui/core';

interface ServiceProps {
    serviceTitle: String,
    serviceImage: String,
    serviceBody: String
};

const Services: React.FC = (props: ServiceProps) => {
    return (
        <Paper>
            <Typography
                align="center"
            >
                {props.serviceTitle}
            </Typography>
            <Grid
                container
            >
                <Grid item sm={12} md={4}>
                    <CardMedia
                        component="img"
                        src={props.serviceImage}
                    />
                </Grid>
                <Grid item sm={12} md={8}>
                    <Typography
                        variant="body1"
                    >
                        {props.serviceBody}
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Services;