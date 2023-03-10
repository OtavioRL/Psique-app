import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect, useContext } from 'react';
import Context from '../Context/context';
import axios from 'axios';
import AddProduct from '../components/productsComponents/AddProduct/AddProduct';
import HandleDelete from '../components/productsComponents/DeleteProduct/HandleDelete';
import UpdateProduct from '../components/productsComponents/UpdateProduct/UpdateProduct';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Psique
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



const theme = createTheme();

export default function Products() {
  const {
    cards, setCards,
    open,
    openDelete, setOpenDelete,
    openEdit,
    toBeDeletedId,
    toBeEditedId,
    handleOpen,
    handleClose,
    handleCloseEdit,
    handleDelete,
    handleEdit,
  } = useContext(Context);

  
  
  
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get('http://localhost:3001/products');
        setCards(res.data);
      } catch (error) {
        console.log(error);
      }      
    };

    getProducts();
  }, [open, openDelete, openEdit]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <BookmarksIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Produtos
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Produtos
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" onClick={ handleOpen }>
                Adicionar um produto
              </Button>
            </Stack>
          </Container>
        </Box>
        <HandleDelete 
          open={ openDelete } 
          setOpen={ setOpenDelete }
          id={ toBeDeletedId }

        />
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <AddProduct />        
      </Modal>
      <Modal
        open={ openEdit }
        onClose={ handleCloseEdit }
      >
        <UpdateProduct 
          id={ toBeEditedId }
          handleCloseEdit={ handleCloseEdit }
        />
      </Modal>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card._id} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                    image={ card.imageUrl }
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      { card.name }
                    </Typography>
                    <Typography>
                      { card.description }
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                      {`${ card.price } R$`}
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                      {`Quantidade em estoque: ${ card.stock }`}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button 
                      size="small"
                      name={ card._id }
                      onClick={ handleEdit }
                    >Editar</Button>
                    <Button 
                      size="small"
                      onClick={ handleDelete }
                      name={ card._id }
                    >Excluir</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Algo aqui
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}