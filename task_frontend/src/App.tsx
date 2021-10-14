import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Regulator from './components/Regulator';
import Chart, { ChartType } from './components/Chart';
import { getInitPoint } from './utils';
import { Grid } from '@mui/material';

function App() {
  const [p1, setP1] = useState<ChartType>(getInitPoint("p1"))
  const [p2, setP2] = useState<ChartType>(getInitPoint("p2"))
  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={6}>
        <Chart data={[p1,p2]}/>
        </Grid>
        <Grid item xs={3}>
        <Regulator data={p1} setData={setP1}/>
        </Grid>
        <Grid item xs={3}>
        <Regulator data={p2} setData={setP2}/>
        </Grid>
        </Grid>
    </div>
  );
}

export default App;
