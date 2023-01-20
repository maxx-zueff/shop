import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import ImgMediaCard from './Card';

import goods from './goods.json';

export default function App() {
  return (
    <Container maxWidth="md">
      <Showcase goods={goods}></Showcase>
    </Container>
  );
}

function Showcase(props) {
  return(
    <Grid container spacing={2}>
      {props.goods.map((item) => {
        return (<Grid key={item.id} item xs={6} md={3}>
          <ImgMediaCard item={item} />
        </Grid>)
      })}
    </Grid>
  )
}