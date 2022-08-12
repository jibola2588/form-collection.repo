// import React from 'react'
// import { BiLock } from "react-icons/bi";
// // import  TextField from '@/material-ui/core/TextField';
// import {Formik} from 'formik';
// import * as EmailValidator from 'email-validator'
// import * as Yup from 'yup'


// const App = () => {
 
//    <Formik
//    initialValues = {{email : '',password : ''}}
//    onSubmit = {(values,{ setSubmitting }) => { 
//     console.log('submitting')
//    }}
//    validationSchema = { Yup.object().shape({
//     email : Yup.string()
//     .email()
//     .required('Required'),
//     passowrd:Yup.string() 
//     .required("Required")
//     .min(8,'Password is too short - should be 8 characters minimum')
//     .matches(/(?=.*[0-9])/,'Password must contain a number')
//    })}
//    validate = { values => { 
//     let errors = {};

//     if(!values.email){ 
//      errors.email = 'Reguired'
//     }else if(EmailValidator.validate(values.email)){ 
//       errors.email = 'Invalid Email Address'
//     }

//     const passwordRegex = /(?=.*[0-9])/

//     if(!values.password){ 
//      errors.password = 'Reguired'
//     }else if(values.password.length < 8){ 
//       errors.password = 'password must be atleast 8 characters'
//     }
//     else if(!passwordRegex.test(values.password)){ 
//       errors.password = 'Invalid password must contain a number'
//     }
//     return errors
//    }}
//    >
  
//       return (
//    <div className="font-sans">
//         <div className="flex justify-center items-center h-screen">
//             <div className=" max-w-xl w-full">
//                 <form className="shadow p-10">
//                     <div className="flex justify-center text-3xl  text-indigo-500">
//                       <BiLock style={{fontSize:'33px'}}/>
//                       <h3 className="ml-2 font-bold">Login</h3>
//                     </div>
                    
//                     <div className="mb-2 mt-3">
//                         <label for="email" class="text-sm text-gray-600 font-bold mb-1">Email :</label>
//                         <input class="w-full border-2 px-3 py-2 my-2 focus:bg-gray-200 text-lg " type="email" name="email"
//                         //    value = {email}
//                         //    onChange={handleChange}
//                         //    onBlur = {handleBlur}
//                         //    className = {errors.email && touched.email && 'error'}
//                            />
//                     </div>
//                     <div className="mb-2">
//                         <label for="password" class="text-sm text-gray-600 font-bold mb-1">Password :</label>
//                         <input class="w-full border-2 px-3 py-2 my-2 focus:bg-gray-200 text-lg" type="password" name="password"
//                             // value = {password}
//                             // onChange = {handleChange}
//                             //  onBlur = {handleBlur}
//                             //  className = {errors.email && touched.email && 'error'}
//                              />
//                     </div>
//                     <div className="mt-6">
//                         <button  type="submit" id="submit" className="w-full font-bold uppercase bg-indigo-500 text-gray-200 py-2">
//                             Submit
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     </div>
//   )
//    {/* </Formik> */}
 
 
// }

// export default App
