import React from "react";
import {
  CardMedia,
  Card,
  CardContent,
  CardActions,
  Typography,
  Box,
} from "@mui/material";

const Post = () => {
  return (
    <>
      <Box sx={{ marginLeft: "100px" }}>
        <Card>
          <CardMedia
            sx={{ height: 340 }}
            image="/lifestyle.webp"
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              LIFESTYLE, TRAVEL
            </Typography>
            <Typography gutterBottom variant="h4" component="div">
              Curabitur ligula sapien tincidunt posuere imperdiet.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Donec fringilla porta ornare integer turpis velit malesuada
              ultricies ligula varius imperdiet neque proin posuere lacus
              scelerisque rhoncus vitae vivamus dignissim massa proin urna augue
              porttitor dignissim luctus nunc semper felis congue posuere libero
              ligula dapibus elementum quam dolor est.
            </Typography>
          </CardContent>
          <CardActions>
            <button style={{margin: "10px"}}>Continue Reading</button>
          </CardActions>
        </Card>
        <Card>
          <CardMedia
            sx={{ height: 340 }}
            image="/travel.webp"
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              LIFESTYLE, TRAVEL
            </Typography>
            <Typography gutterBottom variant="h4" component="div">
              Modern City With Amazing Dark Blue Sea
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Donec fringilla porta ornare integer turpis velit malesuada
              ultricies ligula varius imperdiet neque proin posuere lacus
              scelerisque rhoncus vitae vivamus dignissim massa proin urna augue
              porttitor dignissim luctus nunc semper felis congue posuere libero
              ligula dapibus elementum quam dolor est.
            </Typography>
          </CardContent>
          <CardActions>
            <button style={{margin: "10px"}}>Continue Reading</button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
};

export default Post;
