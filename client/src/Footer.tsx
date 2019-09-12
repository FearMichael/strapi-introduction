import React from "react";
import Box from "@material-ui/core/Box";
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
        <footer>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Typography variant="h5">
                    {companyName} &copy; {year.getFullYear()}
                </Typography>
                <Typography variant="body1">
                    {companyDescription}
                </Typography>
                <Typography variant="body2">
                    {companyAddress}
                </Typography>
                <Typography variant="body2">
                    {companyPhone}
                </Typography>

            </Box>
        </footer>
    )
};

export default Footer;