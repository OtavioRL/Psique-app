import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import AddButton from './AddButton';

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

const AddProduct = (props) => {
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
  

  

  const handlechange = ({target}) => {
    const { name, value } = target;

    switch (name) {
      case 'name':
        setName(value);        
        break;
      case 'description':
        setDescription(value);        
        break;  
      case 'price':
        setPrice(value);        
        break;
      case 'stock':
        setStock(value);        
        break;
      case 'imageUrl':
        setImageUrl(value);
        break;  
      default:
        break;
    }
  };

  return (
    <Box sx={modalStyle}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Insira os dados do produto que vai ser inserido no banco de dados
      </Typography>
      <TextField 
        sx={inputStyle} 
        id="outlined-basic" 
        label="Nome"
        name="name"
        value={name}
        variant="outlined"
        onChange={ handlechange }
      />
      <TextField
        sx={inputStyle}
        id="outlined-multiline-static"
        label="Descrição"
        value={description}
        onChange={ handlechange }
        name="description"
        multiline
        rows={4}
      />
      <TextField
        sx={inputStyle}
        id="outlined-number"
        label="Preço"
        value={price}
        name="price"
        type="number"
        onChange={ handlechange }
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        sx={inputStyle}
        id="outlined-number"
        label="Estoque"
        value={stock}
        name="stock"
        type="number"
        onChange={ handlechange }
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField 
        sx={inputStyle} 
        id="outlined-basic" 
        label="Link da imagem"
        name="imageUrl"
        value={imageUrl} 
        variant="outlined" 
        onChange={ handlechange }
      />
      {/* <Button 
        onClick={handleSubmit}
        sx={{ mt: 4}} 
        variant="contained">Adicionar</Button>  */}
      <AddButton
      name={name}
      description={description}
      price={price}
      stock={stock}
      imageUrl={imageUrl}
      setName={setName}
      setDescription={setDescription}
      setPrice={setPrice}
      setStock={setStock}
      setImageUrl={setImageUrl}
      />
    </Box>
  );
};

export default AddProduct;