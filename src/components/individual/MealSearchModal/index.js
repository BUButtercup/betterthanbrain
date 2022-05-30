import {useState, useEffect} from 'react';
import './style.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {breakfasts, lunches, dinners, snacks} from '../../../utils/data.js'
import React from 'react';

const MealSearchModal = ({open, close}) => {
  const [choices, setChoices] = useState([])

  useEffect(() => {
    const newChoices = [
      ...breakfasts, 
      ...lunches, 
      ...dinners, 
      ...snacks]
    setChoices(newChoices.sort((a, b)=>{
      const nameA = a.item.toUpperCase();
      const nameB = b.item.toUpperCase();
      if(nameA < nameB){
        return -1
      }
      if(nameA > nameB) {
        return 1
      }
      return 0
    }))
  }, [])
  

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={open}
      onClose={close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box 
      sx={style}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Search your recipe database:
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={choices.map((option) => option.item)}
        renderInput={(params) => <TextField {...params} label="Search Database"
        />}
      />
        </Typography>
      </Box>
    </Modal>
  )
}

export default MealSearchModal