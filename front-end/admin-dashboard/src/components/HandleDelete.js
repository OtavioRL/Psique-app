import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import axios from 'axios';

export default function HandleDelete({ open, setOpen, id }) {
  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    const del = async () => {
      try {
        console.log(id);
        const res = await axios.delete(`http://localhost:3001/products/${id}`);
        handleClose();
        console.log(res.statusText);       
      } catch (error) {
        console.log(error);
      }
    };

    del();
  }

  const backDropStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 3,
    display: 'flex',
    flexDirection: 'column'
  };

  const buttonsWrapper = {
    display: 'flex',
    justifyContent: 'space-between',
    mt: 4,
    width: '100%'
  }

  return (
      <Modal
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClose={ handleClose }
      >
        <Box sx= { backDropStyle }>
          <Typography variant="h6" color="text.primary">Tem certeza que deseja excluir o produto do banco de dados?</Typography>
          <Box sx={buttonsWrapper}>
          <Button variant="contained" color="error" onClick={ handleDelete }>
            Excluir permanentemente
          </Button>
          <Button onClick={ handleClose }>
            Cancelar
          </Button>
          
          </Box>
        </Box>
      </Modal>
  );
}