import { Container, Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
import Post from "./Post";
import SideBar from "./SideBar";

const HomeWrap = styled(Box)({
  "& .MuiContainer-root": {
    backgroundPosition: "center",
    backgroundRepeat: "noRepeat",
    backgroundSize: "cover",
    height: "200px",
    maxWidth: "100%",
  },
});

const GridContainer = styled(Grid)({
  "& .MuiPaper-root": {
    marginTop: "80px",
    marginBottom: "30px",

  },
});

const Home = () => {
  return (
    <>
      <HomeWrap sx={{ height: "500px" }}>
        <Box
          style={{
            backgroundImage: `url("/banner.jpg")`,
            backdropFilter: "blur(5px)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "100%",
            filter: "blur(2px)",
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              position: "absolute",
              left: "30%",
              top: "30%",
              width: "50%",
              backgroundColor: "rgb(241 91 3 / 50%)",
              fontSize: "30px",
            }}
          >
            <Typography variant="h4"> BLOG STANDARD</Typography>
            <Typography variant="h6">GET IN TOUCH WITH US</Typography>
          </Box>
        </Box>
      </HomeWrap>
      <GridContainer container>
        <Grid xs={12} md={8}>
          <Post />
        </Grid>
        {/* <Grid xs={12} md={1} /> */}
        <Grid xs={12} md={3}>
          <SideBar />
        </Grid>
      </GridContainer>
    </>
  );
};

export default Home;
