import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";

import React from "react";

const Header = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <Typography
            component="h1"
            variant="h6"
            color="primary"
            sx={{ padding: "24px", letterSpacing: "-0.08em", fontWeight: 700 }}
          >
            404 not found
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
