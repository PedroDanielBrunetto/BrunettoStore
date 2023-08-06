import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Axios from 'axios';

export default function FormDialog(props) {
  const [editValues, setEditValues] = React.useState({
    id: props.id,
    name: props.name,
    cost: props.cost,
    category: props.category
  });

  const handleEditGame = () => {
    Axios.put("http://localhost:3001/edit",{
      id: editValues.id,
      name: editValues.name,
      cost: editValues.cost,
      category: editValues.category
    })
    handleClose()
  };

  const handleDeleteGame = () => {
    Axios.delete(`http://localhost:3001/delete/${editValues.id}`)
    handleClose()
  }

  const handleClickOpen = () => {
    props.setOpen(true);
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleChangeValues = (value) =>{
    setEditValues(prevValues=>({
      ...prevValues,
      [value.target.id]: value.target.value,
    }));
  };

    return (
    <div>
      <Dialog open={props.open} onClose={handleClose}>
        <DialogTitle>Editar</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nome do jogo:"
            defaultValue={props.name}
            onChange={handleChangeValues}
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="cost"
            label="Valor do jogo:"
            defaultValue={props.cost}
            onChange={handleChangeValues}
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="category"
            label="Categoria:"
            defaultValue={props.category}
            onChange={handleChangeValues}
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleDeleteGame}>Excluir</Button>
          <Button onClick={handleEditGame}>Salvar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}