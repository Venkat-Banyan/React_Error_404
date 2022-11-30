import Googlelogo from "../../images/google_logo.png";
import error404 from "../../images/google_robot_bg.png";

import React from "react";
import { Button, Grid, Typography } from "@mui/material";
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
          <Grid item lg={1} />
          <Grid item lg={11} xs={12} className="typography-container">
            <img src={Googlelogo} alt="Google Logo" height="auto" draggable="false" width="15%" className="main_logo" />
          </Grid>

          <Grid item lg={1} />

          <Grid item lg={6} xs={12} className="typography-container">
            <Typography component="h5" variant="h5" color="primary"
              paragraph
              sx={{
                fontWeight: 400,
                lineHeight: "3rem",
                letterSpacing: "-0.035em",
              }}
            >
              <strong>404. </strong> That’s an error.
            </Typography>

            <Typography color="primary" variant="h6"
              paragraph
              sx={{
                width: "100%",
                mb: 4,
                lineHeight: "2rem",
                letterSpacing: "-0.035em",
              }}
            >
            The page you are looking for might be removed or is temporarily
            unavailable! <span className="typography-span"> That’s all we know.</span>
            </Typography>

            <Button variant="contained" color="primary" component="a" href="#" target="_blank" size="medium" sx={{ borderRadius: "none" }} >
              Back to home
            </Button>
          </Grid>

          <Grid item lg={1} />

          <Grid item lg={3} xs={12}>
            <img src={error404} alt="Error 404" draggable="false" width="75%" />
          </Grid>

          <Grid item lg={1} />
        </Grid>
      </Container>
    </div>
  );
};

export default Main;
