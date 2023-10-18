import {useState} from 'react'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputCustom from './InputCustom';
import api from '../shared/service/axios/axiosClient';

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

export default function ModalCustom({open, close}) {
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [value, setValue] = useState("");

  const handleClose = () => close(false);
 
  const handleSubmit = (e) => {
    e.preventDefault()
    api.post('/tasks', {
    description: description,
    title: title}, {headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2ZTIyZjU1ZS0zZjFiLTQ0YzctODdkNi1hYjE0OGQ5ODM0MmYiLCJ1c2VybmFtZSI6InRlYW0wIiwiaWF0IjoxNjk3NjIxNTg3LCJleHAiOjE2OTc3MDc5ODd9.fofkVpMGEm0awjsOLTam7gDOx0BJS1nfi4iBvkD-3sg'
    }}).then(res => console.log(res))
  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <form onSubmit={handleSubmit}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Создайте тест
            </Typography>
            <InputCustom value={title} onChange={setTitle}/>
            <InputCustom value={description} onChange={setDescription}/>
            <InputCustom value={title} onChange={setValue}/>
            <Button type='submit' variant="contained">Создать</Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}