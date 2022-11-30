import Git_bg_1 from "../../images/GIT_bg_2.png";
import Git_bg_2 from "../../images/GIT_bg_3.png";
import Git_bg_3 from "../../images/GIT_bg_4.png";
import Git_bg_4 from "../../images/GIT_bg_5.png";
import Git_bg_5 from "../../images/GIT_bg_6.png";
import Git_bg_6 from "../../images/GIT_bg_7.png";
import Git_bg_7 from "../../images/GIT_bg_8.png";

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
            <img src={Git_bg_3} alt="GIT" height="auto" draggable="false" className="git_bg_img_5" />
            <img src={Git_bg_2} alt="GIT" height="auto" draggable="false" className="git_bg_img_4" />
            <img src={Git_bg_1} alt="GIT" height="auto" draggable="false" className="git_bg_img_3" />
            <img src={Git_bg_6} alt="GIT" height="auto" draggable="false" className="git_bg_img_3_1" />
            <img src={Git_bg_5} alt="GIT" height="auto" draggable="false" className="git_bg_img_2" />
            <img src={Git_bg_7} alt="GIT" height="auto" draggable="false" className="git_bg_img_2_1" />
            <img src={Git_bg_4} alt="GIT" height="auto" draggable="false" className="git_bg_img_1" />
        </Grid>
      </Container>
    </div>
  );
};

export default Main;
