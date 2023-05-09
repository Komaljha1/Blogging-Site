import React from "react";
import { Box } from "@mui/system";
import { Facebook, Twitter, Instagram, LinkedIn } from "@material-ui/icons";
import { Typography, List, ListItem, Card, Divider, Toolbar } from "@mui/material";
import styled from "@emotion/styled";

const SideBarMain = styled(Card)({
  marginLeft: "30px",
  "& .MuiBox-root": {
    "& .MuiTypography-root": {
      margin: "11px",
      fontFamily: "fantasy",
      textAlign: "center",
      fontSize: "medium",
    },

    "& .MuiToolbar-root":{
      "& .MuiListItem-root":{
        "& .MuiSvgIcon-root":{
         fill: "grey",
        }
      }
    },

    "& .MuiList-root": {
      columnCount: "2",
    },
  },
});

const Img = styled("img")({
  paddingLeft: "10px",
  paddingRight: "16px",
  height: "136px",
  width: "310px",
});

const Line = styled(Divider)({
  borderBottomWidth: "2",
})

const SideBar = () => {
  return (
    <SideBarMain>
      <Box>
        <Line />
        <Typography> About Us</Typography>
        <Line />
        <Img alt="" src="/sideimg.jpg" />
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          tincidunt mauris est, in faucibus dui viverra et. Aliquam finibus
          vestibulum elit, at pharetra nisl congue vel. Nunc pretium posuere
          justo pretium fringilla. Sed volutpat risus non rhoncus convallis. Sed
          fermentum est at hendrerit pellentesque. Mauris nec leo euismod,
          sagittis mauris in, posuere est..
        </Typography>
      </Box>
      <Box>
        <Line />
        <Typography variant="h6">Categories</Typography>
        <Line />
        <List>
          <ListItem>Life</ListItem>
          <ListItem>Music</ListItem>
          <ListItem>Style</ListItem>
          <ListItem>Sports</ListItem>
          <ListItem>Tech</ListItem>
          <ListItem>Cinemas</ListItem>
        </List>
      </Box>
      <Box>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", fontSize: "medium" }}
        >
          <Line />
          <Typography variant="h6">Follow Us</Typography>
          <Line />
        </Typography>
        <Toolbar>
        <ListItem>
          <Facebook />
        </ListItem>
        <ListItem>
          <Twitter />
        </ListItem>
        <ListItem>
          <Instagram />
        </ListItem>
        <ListItem>
          <LinkedIn />
        </ListItem>
        </Toolbar>
      </Box>
    </SideBarMain>
  );
};

export default SideBar;
