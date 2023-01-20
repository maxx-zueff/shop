import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


export default function ImgMediaCard(props) {
  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardMedia
        component="img"
        alt="Превью букета"
        height="100%"
        image={props.item.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.item.name}
        </Typography>
        <Grid container sx={{justifyContent: "space-between"}}>
          <Grid item>
            <Typography>
              ≈ {props.item.pending} мин
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
            {props.item.price} руб.
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}