import "../main/styles.css";
import { Grid, Typography } from "@mui/material";

import React from "react";

const Footer = () => {
  return (
    <Grid container className="footer-container">
      <Grid item xs={12}>
        <Typography className="footer-typography"
          color="secondary"
          components="span"
          align="center"
          sx={{ fontSize: "0.8rem" }}
        >
          Developed by @Venkat - <a href="www.banyaninfotech.com" className="grid-container-a"> Banyan Infotech</a> 
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
