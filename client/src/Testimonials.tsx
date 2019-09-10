import React from 'react';
import { Grid, Grow, Typography, makeStyles, createStyles } from '@material-ui/core';
import { FormatQuote } from "@material-ui/icons/"
import { useInView } from "react-intersection-observer";

type ServiceProps = {
    testimonialAuthor: string,
    // testimonialAuthor: string,
    testimonialBody: string
};

const useStyles = makeStyles(() =>
    createStyles({
        testimonialBody: {
            padding: "1rem",
            // background: "url(./quoteFrame.png)",
            // backgroundRepeat: "no-repeat",
            // backgroundPosition: "center center",
            // backgroundSize: "cover",
            // backgroundAttachment: "fixed",
            // minHeight: "4rem",
        },
        imageBackground: {
            // maxHeight: "15em",
            // zIndex: 0,
            // textAlign: "center",
            // position: "relative",
            // backgroundRepeat: "no-repeat",
            // backgroundPosition: "center center",
            // backgroundSize: "cover",
            // backgroundAttachment: "fixed",
        },
        quoteInfo: {
            position: "absolute",
            zIndex: 3,
            padding: "2rem",
        },
        imageContainer: {
            width: "100%",
        },
        quoteArea: {
            textAlign: "right",
        },
        quoteIcon: {
            fontSize: "4rem",
            textAlign: "right"
        }
    }),
);


const Testimonials: React.FC<ServiceProps> = (props) => {

    const classes = useStyles();

    const [ref, inView] = useInView({ rootMargin: "-100px 0px" });

    return (
        <Grow
            ref={ref}
            in={inView}
        >

            <Grid
                container
                justify="space-between"
            // alignContent="center"
            // alignItems="center"
            >
                <Grid
                    item
                    sm={4}
                    className={classes.quoteArea}
                >
                    {/* <div className={classes.quoteArea}> */}
                    <FormatQuote className={classes.quoteIcon}></FormatQuote>
                    {/* </div> */}
                </Grid>
                <Grid
                    item
                    sm={8}
                >
                    <Typography
                        align="center"
                        variant="body1"
                        className={classes.testimonialBody}
                    >
                        {props.testimonialBody}
                    </Typography>
                    <Typography
                        align="center"
                        variant="body2"
                    >
                        - {props.testimonialAuthor}
                    </Typography>
                </Grid>

            </Grid>
        </Grow>

        // <Box
        //     display="flex"
        //     position="relative"
        //     className={classes.imageContainer}
        // >
        //     <CardMedia component="img" src="./quoteFrame.png" className={classes.imageBackground} />
        //     <div className={classes.quoteInfo}>
        //         <Typography
        //             align="center"
        //             variant="body1"
        //             className={classes.testimonialBody}
        //         >
        //             {props.testimonialBody}
        //         </Typography>

        //         <Typography
        //             align="center"
        //             variant="body2"
        //         >
        //             - {props.testimonialAuthor}
        //         </Typography>
        //     </div>

        // </Box>
    )
}

export default Testimonials;