// import { TextField } from '@mui/material';
import React,{useState,useEffect} from 'react'
import { BiLock } from "react-icons/bi";
import LoginModal from './LoginModal'


const JibolaForm = () => {
    const initialValues = { 
        email : '',
        password : ''
    }
   const [formValues,setFormValues] = useState(initialValues)
   const [formError,setFormError] = useState({})
   const [isSubmit,setIsSubmit] = useState(false)

   const handleChange = e => { 
    const { name,value } = e.target
    setFormValues({...formValues, [name]:value})
    // console.log(formValues)
   }
  

   function handleSubmit(e){ 
    e.preventDefault();
    // console.log(formValues)
    setFormError(validate(formValues))
    setIsSubmit(true)
   }
    
       useEffect(() => {
        console.log(formError)
    if(Object.keys(formError).length === 0 && isSubmit){ 
        console.log(formValues)
    }
   },[formError])

   const validate = (values) => { 
    const error = {} ;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!values.email){
        error.email = 'Email is required *'
    }else if(!regex.test(values.email)){ 
        error.email = 'Not a valid email format'
    }
    if(!values.password){
        error.password = 'Password is required *'
    }else if(values.password.length < 4){ 
        error.password = 'password must be more than 4 charaters'
    
    }else if(values.password.length > 10){ 
        error.password = 'password cannot exceed more than 10 charaters'
    }
    return error
   }

      return (
   <div className = "font-sans">
      
      {(Object.keys(formError).length === 0 && isSubmit) ? <LoginModal/> : ''}
             {/* <pre>{JSON.stringify(formValues,undefined,2)}</pre>   */}
        <div className="flex justify-center items-center h-screen">
            <div className=" max-w-xl w-full">
                <form className="shadow p-10" onSubmit = {handleSubmit}>
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
                        {/* <TextField 
                        label="email"
                        variant="outlined"
                        fullWidth
                        color="primary"
                        required
                        value = {formValues.email}
                        onChange = { handleChange }
                        style = {style}
                        /> */}
                        <input className="w-full border-2 px-3 py-2 mt-2 mb-1 focus:bg-gray-200 text-lg " type="email" name="email"
                        value = {formValues.email}
                        onChange = { handleChange }
                        />
                        <p className="text-sm text-red-500">{formError.email}</p>
                    </div>
                    <div className="mb-4 mt-3">
                    <label for="password" class="mb-2 text-sm text-gray-600 font-bold mb-1">Password :</label>
                        {/* <TextField 
                        label="password"
                        variant="outlined"
                        fullWidth
                        color="primary"
                        required
                        value = {formValues.password}
                        onChange = { handleChange }
                        style = {style}
                        /> */}
                         <input className="w-full border-2 px-3 py-2  mt-2 mb-1 focus:bg-gray-200 text-lg " type="password" name="password"
                        value = {formValues.password}
                        onChange = { handleChange }
                        />
                         <p className="text-sm text-red-500">{formError.password}</p>
                    </div>
                    <div className="pt-4">
                        <button  type="submit" className="mb-3 w-full font-bold uppercase bg-indigo-500 text-gray-200 py-2">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default JibolaForm
