import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Grid
} from "@mui/material";
import AppMenu from "./AppMenu";

export default function Main() {
  return (
    <>
      <AppMenu />
      <Grid
        container
        spacing={5}
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: 40
        }}
      >
        <Grid item>
          <Card sx={{ maxWidth: 200 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image="https://dvblobcdnjp.azureedge.net//Content/ueditor/net/upload/2017-08-30/f1b20ee7-4851-4bc7-ba56-eed23573ee2c.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard's Quiz World
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  The following questions are listed in different pages, there
                  are English, Chemistry, and Add questions.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ maxWidth: 200 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQgHNOTtdkvYgp5jC4bjqssQ2wutYCuukJ0pOz6_CsqI4G_qUL6TBUAC-4Iy4XoUvstmQ&usqp=CAU"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Say HI to Lizards!
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  The following questions are listed in different pages, there
                  are English, Chemistry, and Add questions.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ maxWidth: 200 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJxEk7jDahyTbDhcws13Vy5uZLQgF1Lnk5Z6xhva7pCugPpmrJ7Fz-uJ_cmlExRApaRks&usqp=CAU"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Say HI to Lizards!
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  The following questions are listed in different pages, there
                  are English, Chemistry, and Add questions.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
