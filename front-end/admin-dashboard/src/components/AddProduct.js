import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column'
};

const inputStyle = {
  mt: 2
}

const AddProduct = () => {
  return (
    <Box sx={modalStyle}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Insira os dados do produto que vai ser inserido no banco de dados
      </Typography>
      <TextField 
        sx={inputStyle} 
        id="outlined-basic" 
        label="Nome" 
        variant="outlined" 
      />
      <TextField
        sx={inputStyle}
        id="outlined-multiline-static"
        label="Descrição"
        multiline
        rows={4}
      />
      <TextField
        sx={inputStyle}
        id="outlined-number"
        label="Preço"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        sx={inputStyle}
        id="outlined-number"
        label="Estoque"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField 
        sx={inputStyle} 
        id="outlined-basic" 
        label="Link da imagem" 
        variant="outlined" 
      />
    </Box>
  );
};

export default AddProduct;