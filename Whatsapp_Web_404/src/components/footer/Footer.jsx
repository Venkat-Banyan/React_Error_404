import "../main/styles.css";
import { Link, Grid, Typography } from "@mui/material";

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
          Developed by Venkat @ <Link href="https://www.banyaninfotech.com/" rel="noopener" className="grid_container_link" target={"blank"}> Banyan Infotech</Link> 
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
