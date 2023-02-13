import React, { useState } from 'react';
import Context from './context';

function AppProvider({ children }) {
  const [cards, setCards] = useState([]);
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [imageUrl, setImageUrl] = useState('');
  const [toBeDeletedId, setToBeDeletedId] = useState('');
  const [toBeEditedId, setToBeEditedId] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCloseEdit = () => setOpenEdit(false);

  const handleDelete = ({ target }) => {
    const { name } = target;

    setToBeDeletedId(name);
    setOpenDelete(true);
  };

  const handleEdit = ({ target }) => {
    const { name } = target;

    setToBeEditedId(name);
    setOpenEdit(true);    
  }


  const state = {
    cards, setCards,
    open, setOpen,
    openDelete, setOpenDelete,
    openEdit, setOpenEdit,
    name, setName,
    description, setDescription,
    price, setPrice,
    stock, setStock,
    imageUrl, setImageUrl,
    toBeDeletedId, setToBeDeletedId,
    toBeEditedId, setToBeEditedId,
    handleOpen,
    handleClose,
    handleCloseEdit,
    handleDelete,
    handleEdit,
  }

  return (
    <Context.Provider value={ state }>
      {children}
    </Context.Provider>
  );
};

export default AppProvider;