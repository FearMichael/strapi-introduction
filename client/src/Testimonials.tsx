import React, { useState } from 'react';
import { Box, Grow, Grid, Typography, makeStyles, createStyles, Paper } from '@material-ui/core';
import { FormatQuote, NavigateBefore, NavigateNext } from "@material-ui/icons/"
import { useInView } from "react-intersection-observer";

// declare global {
//     interface Window {

//     }
// }

type TestimonialProps = {
    bios: object[] | null
};

const useStyles = makeStyles(() =>
    createStyles({
        testimonialBody: {
            padding: "1rem",
        },
        testimonialContainer: {
            width: "100%",
            padding: "1rem",
            // margin: "0px"
        },
        narrowBox: {
            width: "60%",
            padding: "1rem",
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
            marginLeft: "25%"
        },
        boxMain: {
            margin: "1rem -0.25rem",
            padding: "1rem 0rem",
        },
        slideIcon: {
            fontSize: "5rem",
        },
        smallScreenIcon: {
            fontSize: "5rem",
            margin: "0rem -1rem"
        }
    }),
);




const Testimonials: React.FC<any> = (props) => {
    console.log(window.innerWidth)

    const classes = useStyles();

    const slides = props.bios;

    const [width, setWidth] = useState<number>(window.innerWidth)

    window.addEventListener<any>("resize", () => setWidth(window.innerWidth));
    console.log(props)

    let [currentSlide, setCurrentSlide] = useState<number>(0);

    const [ref, inView] = useInView({ rootMargin: "-100px 0px" });

    const changeSlide = (direction: string) => {
        let nextSlide;
        if (slides && direction === "next") {
            slides.length - 1 === currentSlide ? nextSlide = 0 : nextSlide = currentSlide + 1;
            setCurrentSlide(nextSlide);
        } else if (slides && direction === "back") {
            currentSlide === 0 ? nextSlide = slides.length - 1 : nextSlide = currentSlide - 1;
            setCurrentSlide(nextSlide);
        }
        console.log(nextSlide)

    };


    return (
        <Grow
            ref={ref}
            in={inView}
        >
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                className={classes.boxMain}
            >
                <NavigateBefore
                    className={width < 960 ? classes.smallScreenIcon : classes.slideIcon}
                    onClick={() => changeSlide("back")}
                />
                <Paper
                    elevation={3}
                    className={classes.testimonialContainer}
                >
                    <Grid
                        container
                        alignContent="center"
                        alignItems="center"
                    >
                        <Grid
                            item
                            sm={4}
                        >

                            <FormatQuote className={classes.quoteIcon}></FormatQuote>
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
                                {slides && slides[currentSlide].bioInformation}
                            </Typography>
                            <Typography
                                align="center"
                                variant="body2"
                            >
                                - {slides && slides[currentSlide].nameOfEmployee}
                            </Typography>
                        </Grid>
                    </Grid>

                </Paper>
                <NavigateNext
                    className={width < 960 ? classes.smallScreenIcon : classes.slideIcon}
                    onClick={() => changeSlide("next")}
                />
            </Box>
        </Grow>
    )
}

export default Testimonials;