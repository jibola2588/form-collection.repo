import React from 'react';
import { Formik } from 'formik';
import { BiLock } from "react-icons/bi";
// import LoginModal from './LoginModal'

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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


 function TransitionsModal() {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}


 
const Basic = () => (
  <div>
  <TransitionsModal />
 <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required*';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }

        const passwordRegex = /(?=.*[0-9])/
     if(!values.password){ 
      errors.password = 'Required*'
     }else if(values.password.length < 8){ 
       errors.password = 'password must be atleast 8 characters'
     }
     else if(!passwordRegex.test(values.password)){ 
       errors.password = 'Invalid password must contain a number'
     }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <div className = "font-sans">
            <div className="flex justify-center items-center h-screen">
                  <div className=" max-w-xl w-full">
                       <form className="shadow p-10" onSubmit={handleSubmit}>
             <div className="mb-3 flex justify-center text-3xl  text-indigo-500">
              <BiLock style={{fontSize:'33px'}}/>
              <h3 className="ml-2 font-bold">Login</h3>
             </div>
            <div className="mb-2 mt-3">
            <label for="email" class="mb-2 text-sm text-gray-600 font-bold mb-1">Email :</label>
             <input className="w-full border-2 px-3 py-2 mt-2 focus:bg-gray-200 text-lg " type="email" name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            />
         <p className="text-sm text-red-500"> {errors.email && touched.email && errors.email}</p>
            </div>
          <div className="mb-2 mt-3">
              <label for="password" class="mb-2 text-sm text-gray-600 font-bold mb-1">Password :</label>
                <input className="w-full border-2 px-3 py-2 mt-2 focus:bg-gray-200 text-lg " type="password" name="password"
                 onChange={handleChange}
                 onBlur={handleBlur}
                 value={values.password}
                />
          <p className="text-sm text-red-500">{errors.password && touched.password && errors.password}</p>
            </div> 
           <div className="pt-4">
           <button  type="submit" disabled={isSubmitting} className="mt-2 w-full font-bold uppercase bg-indigo-500 text-gray-200 py-2">
               Submit
           </button>
       </div>
        </form>
                  </div>
            </div>
        </div>
        
      )}
    </Formik>
  </div>
);

export default Basic;

