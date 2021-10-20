import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';

import BasicSelect from "./components/Select";
import BasicButton from "./components/Button";
import MediaCard from "./components/Card";
import NavBar from "./components/NavBar";


function App() {
  const [insurance, setInsurance] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  let insuranceValue = null
  let content = ''

  async function fetchInsuranceHandler() {
    setIsLoading(true)
    setError(null)
    try {
      if (insuranceValue !== null) {
        const response = await fetch('https://dn8mlk7hdujby.cloudfront.net/interview/insurance/' + insuranceValue);
        const data = await response.json();
        setInsurance(data.insurance)
      }

    } catch (err) {
      setError('No se pudo obtener el seguro.')
    }
    setIsLoading(false)
  };

  function selectInsuranceHandler(value) {
    insuranceValue = value
  }

  if (isLoading) {
    content = <CircularProgress />
  }
  if (insurance && Object.keys(insurance).length > 0) {
    content = <MediaCard name={insurance.name} description={insurance.description} price={insurance.price} image={insurance.image}></MediaCard>
  }
  if (error) {
    content = <p>{error}</p>
  }

  return (

    <Box sx={{ flexGrow: 1 }}>
      <NavBar ></NavBar>
      <Grid container spacing={2} sx={{ justifyContent: 'center', marginTop: '10px' }}>
        <Grid item xs={9}>
          <BasicSelect sendValue={selectInsuranceHandler}></BasicSelect>
        </Grid>
        <Grid item xs={8} sx={{ display: 'flex', justifyContent: 'center' }}>
          <BasicButton onClick={fetchInsuranceHandler} name="Aplicar"></BasicButton>
        </Grid>
        <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          {content}
        </Grid>

      </Grid>
    </Box>
  );
}

export default App;
