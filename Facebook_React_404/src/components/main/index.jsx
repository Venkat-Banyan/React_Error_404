import Googlelogo from "../../images/FB_Error_404.png";

import React from "react";
import { Link, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import "./styles.css";

const Main = () => {
  return (
    <div className="general">
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          minHeight: "calc(100vh - 100px)",
        }}
      >
        <Grid container direction="row" justifyContent="center" alignItems="center">
          <Grid item lg={2} />
          <Grid item lg={8} xs={12} className="typography-container">
            <Typography component="h5" variant="h5" color="primary"
              paragraph
              sx={{
                fontWeight: 600,
                lineHeight: "3rem",
                letterSpacing: "-0.035em",
              }}
            >
              This page isn't available
            </Typography>

            <Typography color="primary" variant="h6"
              paragraph
              sx={{
                width: "100%",
                fontWeight: 500,
                mb: 4,
                lineHeight: "2rem",
                letterSpacing: "-0.035em",
              }}
            >
            The link you followed may be broken, or the page may have been removed.
            </Typography>

            <img src={Googlelogo} alt="Google Logo" height="auto" draggable="false" className="main_logo" />

            <Typography color="primary" variant="h6"
              paragraph
              sx={{
                width: "100%",
                fontSize: 14,
                fontWeight: 500,
                mb: 4,
                lineHeight: "2rem",
              }}
            >
            </Typography>
            
            <Link href="#" className="typography_link">Go back to the previous page </Link> . <Link href="#" className="typography_link">Visit our Help Centre</Link>
            
          </Grid>
          <Grid item lg={2} />
        </Grid>
      </Container>
    </div>
  );
};

export default Main;
