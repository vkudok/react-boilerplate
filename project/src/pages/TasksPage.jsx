import {useState} from 'react';
import ModalCustom from '../components/Modal';
import Button from '@mui/material/Button';
import TaskCard from '../components/TaskCard';
import LogoutButton from "../components/LogoutButton";


const TasksPage = () => {
  const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);

    const DataCard = [
      {title: "test1", description: "info1"},
      {title: "test2", description: "info2"},
      {title: "test3", description: "info3"},
      {title: "test4", description: "info4"},
      {title: "test5", description: "info5"},
      {title: "test6", description: "info6"}
    ]

    return (
        <div>
          <Button onClick={handleOpen}>Open modal</Button>
          <LogoutButton/>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridRowGap: '20px'}} className="">

          {DataCard.map((data) => {
            return <TaskCard title={data.title} description={data.description}/>
          })}
          </div>
          <ModalCustom open={open} close={setOpen}/>
        </div>
    );
};

export default TasksPage;