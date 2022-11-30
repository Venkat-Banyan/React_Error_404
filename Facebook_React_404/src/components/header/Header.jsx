import { Grid, Typography } from "@mui/material";
import "./header.css";

import Facebooklogo from "../../images/FB_Text_Logo.png";

import React from "react";

const Header = () => {
  return (
      <Grid container className="header-container-full-width">
        <Grid item lg={2} />
        <Grid item lg={8} xs={8}>
          <img src={Facebooklogo} alt="Facebook Logo" draggable="false" className="header_main_logo" />
        </Grid>
        <Grid item lg={2} />
      </Grid>
  );
};

export default Header;
