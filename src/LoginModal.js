import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { BsCheck2Circle } from "react-icons/bs";
import { FaUserCheck } from "react-icons/fa";
// import { IconName } from "react-icons/fi";
import './LoginModal.css'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: '300px',
  maxWidth:'400px',
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(true);
  // const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style} className="sm:w-100">
            <div className = 'flex flex-col items-center justify-center'>
               <div className="text-green-500 text-4xl mb-3">
                  <FaUserCheck />
               </div>
               <div className="flex justify-center items-center">
                  User login successfully 
               </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}