import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

interface FooterData {
    companyName: string,
    companyAddress: string,
    companyPhone: string,
    companyDescription: string
}

const Footer: React.FC<FooterData> = ({ companyName, companyAddress, companyPhone, companyDescription }) => {

    const year = new Date;

    return (
        <Grid
            container
            alignContent="center"
            alignItems="center"
        // className={}
        >
            <Grid
                item
                sm={12}
            >
                <Typography variant="h5">
                    {companyName} &copy; {year.getFullYear()}
                </Typography>
            </Grid>
            <Grid
                item
                sm={12}
            >
                <Typography variant="body1">
                    {companyDescription}
                </Typography>
            </Grid>
            <Grid
                item
                sm={12}

            >
                <Typography variant="body2">
                    {companyAddress}
                </Typography>
            </Grid>
            <Grid
                item
                sm={12}

            >
                <Typography variant="body2">
                    {companyPhone}
                </Typography>
            </Grid>

        </Grid>
    )
};

export default Footer;