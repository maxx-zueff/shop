import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardMedia
        component="img"
        alt="Превью букета"
        height="100%"
        image="https://content3.flowwow-images.com/data/flowers/1000x1000/48/1660211019_4563448.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Премиум
        </Typography>
        <Grid container sx={{justifyContent: "space-between"}}>
          <Grid item>
            <Typography>
              ≈ 38 мин
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              2150 руб.
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}