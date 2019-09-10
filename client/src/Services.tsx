import React, { useState, useEffect } from 'react';
import { Grid, Grow, CardMedia, Typography, Box, makeStyles, createStyles } from '@material-ui/core';
import { useInView } from "react-intersection-observer";

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

    const [show, setShow] = useState<boolean>(false)

    const [ref, inView] = useInView({ rootMargin: "-100px 0px" })

    const classes = useStyles();

    useEffect(() => {
        setShow(true);
        return () => {
            setShow(false);
        }
    }, [show]);

    return (
        <Grow
            ref={ref}
            in={inView}
        >

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
        </Grow>
    )
}

export default Services;