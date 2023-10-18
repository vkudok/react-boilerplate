import {useState} from 'react';
import ModalCustom from '../components/Modal';
import Button from '@mui/material/Button';


const TasksPage = () => {
  const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);

    return (
        <div>
      <Button onClick={handleOpen}>Open modal</Button>
            <ModalCustom open={open} close={setOpen}/>
        </div>
    );
};

export default TasksPage;