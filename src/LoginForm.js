import { TextField } from '@mui/material';
import React from 'react'
import { BiLock } from "react-icons/bi";
// import {Formik} from 'formik'




const LoginForm = () => {
   const style = { 
    marginTop : '10px'
   }
      return (
   <div className = "font-sans">
        <div className="flex justify-center items-center h-screen">
            <div className=" max-w-xl w-full">
                <form className="shadow p-10">
                    <div className="mb-3 flex justify-center text-3xl  text-indigo-500">
                      <BiLock style={{fontSize:'33px'}}/>
                      <h3 className="ml-2 font-bold">Login</h3>
                    </div>
                     
                    {/* <div className="mb-2 mt-3">
                        <input className="w-full border-2 px-3 py-2 my-2 focus:bg-gray-200 text-lg " type="email" name="email"
                        />
                    </div> */}
                    <div className="mb-3 mt-3">
                    <label for="email" class="mb-2 text-sm text-gray-600 font-bold mb-1">Email :</label>
                        <TextField 
                        label="email"
                        variant="outlined"
                        fullWidth
                        color="primary"
                        required
                        style = {style}
                        />
                    </div>
                    <div className="mb-3 mt-3">
                    <label for="password" class="mb-2 text-sm text-gray-600 font-bold mb-1">Password :</label>
                        <TextField 
                        label="password"
                        variant="outlined"
                        fullWidth
                        color="primary"
                        required
                        style = {style}
                        />
                    </div>
                    <div className="pt-4">
                        <button  type="submit" className="mt-2 w-full font-bold uppercase bg-indigo-500 text-gray-200 py-2">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default LoginForm
