import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import { Container } from "@mui/system";
import "./styles.css";
import Whatsapp404 from "../../images/whatsapp_error_404.png";
import Whatsapp404_bg1 from "../../images/whatsapp_error_404_bg1.png";
import Whatsapp404_bg2 from "../../images/whatsapp_error_404_bg2.png";
import Whatsapp404_bg3 from "../../images/whatsapp_error_404_bg3.png";
import Whatsapp404_bg4 from "../../images/whatsapp_error_404_bg4.png";

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
          <Grid item lg={6} xs={12} className="typography-container">
            <Typography component="h1" variant="h1" color="primary" className="h1-main-text"
              paragraph
              sx={{
                fontWeight: 500,
                lineHeight: "6rem",
                letterSpacing: "-0.035em",
                textAlign: "left",
                fontSize: "84px",
              }}
            >
              404. <br/>
              This page doesn't exist.
            </Typography>

            <Button variant="contained" className="return_page_btn">Return Home</Button>

          </Grid>

          <Grid item lg={6} xs={12} className="typography-container">
            <img src={Whatsapp404_bg2} alt="Whatsapp 404" height="auto" draggable="false" className="error404_bg_1" />
            <img src={Whatsapp404_bg3} alt="Whatsapp 404" height="auto" draggable="false" className="error404_bg_3" />
            <img src={Whatsapp404} alt="Whatsapp 404" height="auto" draggable="false" className="main_logo" />
            <img src={Whatsapp404_bg1} alt="Whatsapp 404" height="auto" draggable="false" className="error404_bg_2" />
            <img src={Whatsapp404_bg4} alt="Whatsapp 404" height="auto" draggable="false" className="error404_bg_4" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Main;
