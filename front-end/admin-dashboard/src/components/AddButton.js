import * as React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import SaveIcon from '@mui/icons-material/Save';
import axios from 'axios';

export default function AddButton(props) {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

  const { 
    name, 
    setName, 
    description, 
    setDescription, 
    price, 
    setPrice, 
    stock, 
    setStock, 
    imageUrl, 
    setImageUrl,
} = props;

  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      '&:hover': {
        bgcolor: green[700],
      },
    }),
  };

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    const addProduct = async () => {
      try {
        const res = await axios.post('http://localhost:3001/products/add', {
          name,
          description,
          price,
          stock,
          imageUrl
        });
        console.log(res.status);
      } catch (error) {
        console.log(error);
      }      
    };

    if (!loading) {
      setSuccess(false);
      setLoading(true);
      addProduct();
      setName('');
      setDescription('');
      setPrice(0);
      setStock(0);
      setImageUrl('');
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mt: 4 }}>
      <Box sx={{ m: 1, position: 'relative' }}>
        <Fab
          aria-label="save"
          color="primary"
          sx={buttonSx}
          onClick={handleButtonClick}
        >
          {success ? <CheckIcon /> : <SaveIcon />}
        </Fab>
        {loading && (
          <CircularProgress
            size={68}
            sx={{
              color: green[500],
              position: 'absolute',
              top: -6,
              left: -6,
              zIndex: 1,
            }}
          />
        )}
      </Box>
      <Box sx={{ m: 1, position: 'relative' }}>
        <Button
          variant="contained"
          sx={buttonSx}
          disabled={loading}
          onClick={handleButtonClick}
        >
          {success ? 'Adicionado com sucesso' : 'Adicionar produto'}
        </Button>
        {loading && (
          <CircularProgress
            size={24}
            sx={{
              color: green[500],
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginTop: '-12px',
              marginLeft: '-12px',
            }}
          />
        )}
      </Box>
    </Box>
  );
}