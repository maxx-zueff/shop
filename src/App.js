import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import ImgMediaCard from './Card';


export default function App() {
  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={6} md={3}>
          <ImgMediaCard/>
        </Grid>
        <Grid item xs={6} md={3}>
          <ImgMediaCard/>
        </Grid>
        <Grid item xs={6} md={3}>
          <ImgMediaCard/>
        </Grid>
        <Grid item xs={6} md={3}>
          <ImgMediaCard/>
        </Grid>
      </Grid>
    </Container>
  );
}
