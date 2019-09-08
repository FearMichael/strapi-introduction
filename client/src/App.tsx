import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Box, Typography, Grid, Paper, makeStyles, createStyles, Container } from "@material-ui/core";

interface Services { serviceDescription: String, nameOfService: String };
interface ServicesType extends Array<Services> { };
interface RawData { json: () => any };
interface Bio { nameOfEmployee: String, bioInformation: String };
interface Bios extends Array<Bio> { };

const useStyles = makeStyles(() =>
  createStyles({
    paper: {
      backgroundColor: "purple",
    },
    mainContent: {
      padding: "0 1rem"
    },
    siteHeader: {
      // background: "no-repeat center center cover fixed",
      position: "relative",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      minHeight: "60vh",
    }
  }),
);

const App: React.FC = () => {

  const classes = useStyles();

  const [services, updateServices] = useState<ServicesType | null>();
  const [bios, updateBios] = useState<Bios | null>();
  const [siteData, updateSiteData] = useState();

  useEffect(() => {
    fetch("/services").then((rawData: RawData) => rawData.json()).then((serviceData: ServicesType) => {
      updateServices(serviceData);
      console.log(serviceData);
    })
    fetch("/bios").then((rawData: RawData) => rawData.json()).then((bios: Bios) => updateBios(bios));
    fetch("/companyinformations").then((rawData: RawData) => rawData.json()).then(companyData => {
      console.log(companyData[0]);
      updateSiteData(companyData[0]);
    });
  }, []);

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        className={classes.siteHeader}
        style={siteData && { backgroundImage: `url(${siteData.companyHeaderImage.url})` }}
      >
        <Typography
          variant="h3"
          className="siteTitle"
        >
          {siteData && siteData.companyName}
        </Typography>
      </Box>
      <Grid
        container
        className={classes.mainContent}
        spacing={2}
      // justify="space-evenly"
      >
        {services && services.map((service: Services, i: Number) => {
          return <Grid item md={6} key={i.toString()}>
            <Paper
              className={classes.paper}
              component="div"
              square={true}
            >
              <h3> {service.nameOfService} </h3>
              <p>{service.serviceDescription}</p>
            </Paper>
          </Grid>
        })
        }
        {bios && bios.map((bio: Bio, i: Number) => {
          return <Grid item md={6} key={i.toString()}  >
            <Paper
              className={classes.paper}
              component="div"
              square={true}
            >
              <h3>{bio.nameOfEmployee}</h3>
              <p>{bio.bioInformation}</p>
            </Paper>
          </Grid>
        })
        }

      </Grid>
    </>
  );
}

export default App;
