import React from 'react'
import { TextField, Stack, Button } from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from "yup"


function MaterialUI() {
  
  const errorSchema = Yup.object().shape({
    names: Yup.string()
      .min(4, "name is too short")
      .max(10, 'Name is too long')
      .required("Sorry but you can't leave this empty"),
    email: Yup.string()
      .email("Enter a valid email")
      .required("It is important that you share you email with us"),
    password: Yup.string()
      .required('Enter your password please')
    
  })
  const formik = useFormik({
    validationSchema : errorSchema,
    initialValues:{
      names: "",
      email: "",
      password:"",
      

    },
    onSubmit: (values)=> alert(JSON.stringify(values))
    
  })
  return (
    <Stack 
      direction="column" 
      spacing={2}
      color='secondary'
      sx={{display: "flex",
       margin: '23px', 
       border: "1px solid red",
       backgroundImage: "linear-gradient(rgb(234, 234, 237), rgb(206, 206, 138))", 
       justifyContent:'center', 
       alignItems: 'center',
       
       
       }}>

        <TextField 
          sx={{width: "320px", color:'red'}}
          variant='standard'
          label="Name"
          type='text'
          onChange={formik.handleChange}
          helperText={formik.errors.names}
          required
          color='secondary'
          value={formik.values.names}
          id='names'
          name='names'
          error={formik.touched.names &&  Boolean(formik.errors.names)}
          

        />
        <TextField
          sx={{width: "320px", color: 'green'}}
          variant= 'standard'
          label="Email"         
          type='text'
          onChange={formik.handleChange}
          helperText={formik.errors.email}
          required
          name='email'
          id='email'
          value={formik.values.email}
          // error='Wrong Format'
          error={formik.touched.email && Boolean(formik.errors.email)}
        />
        <TextField
          sx={{width: "320px", color: 'green'}}
          variant= 'standard'
          label="Password"
          type='password'
          onChange={formik.handleChange}
          helperText={formik.errors.password}
          required
          id='password'
          name='password'
          value={formik.values.password}
          error={formik.touched.password && Boolean(formik.errors.password)}
          // error='Wrong Format' 
        />
        <Button variant='outline' type='submit' color='success' onClick={()=> formik.handleSubmit()}>Submit</Button>


    </Stack>
  )
}

export default MaterialUI