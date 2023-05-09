import React from "react";
import { styled } from "@mui/material/styles";
import { AppBar, Toolbar, Typography, Grid, Box } from "@mui/material";
import { Facebook, Instagram, LinkedIn, Twitter } from "@material-ui/icons";

const MainBox = styled(Grid)({
  "& .MuiGrid-root": {
    
    backgroundColor: "black",
    height: "250px",
    color: "grey",

    '@media (max-width: 768px)': {
      height: 'inherit',
    },

    "& .MuiTypography-subtitle1": {
      paddingTop: "30px",
    },

    p: {
      paddingTop: "10px",
      color: "white",
      paddingRight: "4px",
      cursor: "pointer",
    },

    "&:nth-child(4)": {
      p: {
        marginLeft: "46px",
        border: "2px solid black",
        
      },

      "& .MuiBox-root":{

        marginBottom:"40px",

        marginLeft: "43px",
        ".MuiSvgIcon-root": {
          marginRight: "10px",

          '&:hover': {
            opacity: 3,
            fill: "white",
        },
        },
      }
    },
  },
});

const Text = styled(Typography)({
  paddingLeft: "45px",
});

const Footer = () => (
  <>
    <MainBox item xs={12} container spacing={1}>
      <Grid item xs={12} md={3}>
        <Text variant="subtitle1" gutterBottom="true">
          MEET BLOGGERS
        </Text>
        <Text>Careers</Text>
        <Text>Privacy Policy</Text>
      </Grid>
      <Grid item xs={12} md={3}>
        <Text variant="subtitle1" gutterBottom="true">
          HELP
        </Text>
        <Text>Help Center</Text>
        <Text>Licenses</Text>
        <Text>Authors</Text>
      </Grid>
      <Grid item xs={12} md={3}>
        <Text variant="subtitle1" gutterBottom="true">
          OUR COMMUNITY
        </Text>
        <Text>Blog</Text>
        <Text>Forums</Text>
        <Text>Meetup</Text>
      </Grid>
      <Grid item xs={12} md={3}>
        <Text variant="subtitle1" gutterBottom="true">
          BLOGGERS MARKET
        </Text>
        <Box>
          <Facebook />
          <Twitter />
          <Instagram />
          <LinkedIn />
        </Box>
      </Grid>
    </MainBox>
    <AppBar position="static" component="footer" color="default">
      <Toolbar style={{ justifyContent: "center" }}>
        <Typography variant="caption">
          © 2023 Envato Pty Ltd. Trademarks and brands are the property of their
          respective owners.
        </Typography>
      </Toolbar>
    </AppBar>
  </>
);

export default Footer;