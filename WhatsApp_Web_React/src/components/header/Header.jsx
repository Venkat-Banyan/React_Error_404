import { Grid } from "@mui/material";
import "./header.css";

import Facebooklogo from "../../images/WhatsApp_Logo.svg";

import React from "react";

const Header = () => {
  return (
      <Grid container className="header-container-full-width">
        <Grid item lg={4} />
        <Grid item lg={4} xs={8}>
          <div className="whatsapp_logo_header">
            <img src={Facebooklogo} alt="Facebook Logo" draggable="false" className="header_main_logo" />
          </div>
        </Grid>
        <Grid item lg={4} />
      </Grid>
  );
};

export default Header;
