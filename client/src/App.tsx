import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Box, Typography, Grid, Grow, makeStyles, createStyles, Container } from "@material-ui/core";
import { useInView } from "react-intersection-observer";

import Services from "./Services";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

interface Services { serviceDescription: string, nameOfService: string, serviceImage: any };
interface ServicesType extends Array<Services> { };
interface RawData { json: () => any };
interface Bio { nameOfEmployee: string, bioInformation: string };
// interface Bios any

const useStyles = makeStyles(() =>
  createStyles({
    paper: {
      backgroundColor: "purple",
    },
    mainContent: {
      padding: "0 1rem"
    },
    siteHeader: {
      position: "relative",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      height: "100vh",
    },
    topHeader: {
      height: "5vh",
      zIndex: 3,
    },
    headerOverlay: {
      background: "rgba(128,128,128,0.2)",
      position: "absolute",
      top: "0",
      width: "100%",
      height: "inherit",
      zIndex: 1
    },
    tagline: {
      margin: "20vh auto auto auto",
      borderRadius: "0.25em",
      padding: "1rem",
      background: "rgba(128,128,255, 0.5)"
    }
  }),
);

const App: React.FC = () => {


  let delayTime: any;
  const [animated, setAnimated] = useState("");

  const delayAnimation = () => {
    delayTime = setTimeout(() => {
      setAnimated("animated rubberBand");
    }, 2 * 1000)
  };

  const [ref, inView] = useInView({ rootMargin: "-100px 0px" })

  const classes = useStyles();

  const [services, updateServices] = useState<ServicesType | null>();
  const [bios, updateBios] = useState<any>();
  const [siteData, updateSiteData] = useState();
  const [headerHeight, updateHeaderHeight] = useState();

  useEffect(() => {

    delayAnimation();

    fetch("/services").then((rawData: RawData) => rawData.json()).then((serviceData: ServicesType) => {
      updateServices(serviceData);
      console.log(serviceData);
    })
    fetch("/bios").then((rawData: RawData) => rawData.json()).then((bios) => {
      console.log(bios)
      updateBios(bios)
    });
    fetch("/companyinformations").then((rawData: RawData) => rawData.json()).then(companyData => {
      console.log(companyData[0]);
      updateSiteData(companyData[0]);
    });

    return () => {
      clearTimeout(delayTime);
    }

  }, []);

  return (
    <>
      <Box
        id="navHeader"
        display="flex"
        justifyContent="center"
        className={classes.siteHeader}
        style={siteData && { backgroundImage: `url(${siteData.companyHeaderImage.url})` }}
      >
        <div className={classes.headerOverlay}>

        </div>
        <div
          className="siteTitle"
        >
          <Typography
            variant="h3"
          >
            {siteData && siteData.companyName}
          </Typography>
        </div>
        <Grow
          ref={ref}
          in={inView}
        >
          <Typography
            className={`${classes.tagline} ${animated}`}
            variant="h4"
          >
            {siteData && siteData.tagline ? siteData.tagline : "Your Company Info Here"}
          </Typography>
        </Grow>

      </Box>
      <Grid
        className={classes.mainContent}
      >
        {services && services.map((service: Services, i: Number) => {
          return (
            <Services key={i.toString()}
              serviceTitle={service.nameOfService}
              serviceBody={service.serviceDescription}
              serviceImage={service.serviceImage.url}
            />
          )
        })
        }
        <Testimonials
          bios={bios}
        />
      </Grid>
      {siteData &&
        <Footer
          companyName={siteData.companyName}
          companyDescription={siteData.companyDescription}
          companyAddress={siteData.companyLocation}
          companyPhone={siteData.companyPhone}
        />
      }
    </>
  );
}

export default App;
