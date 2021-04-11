import React from 'react'
import {useFormik} from 'formik'

const MainForm=()=> {

const formik= useFormik({
    initialValues:{
        name:'',
        email:'',
        message:''
    },onSubmit:value=>{
        alert("Message successfully Submitted")
    },validate=values=>{
let errors ={}

if(!value.name){
    errors.name="Required"
}
if(!value.email){
    errors.email="Email Required"
}elseif (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i.test(values.email)) 
{errors.email="Invalid Email Format"}  
 if(!value.message){
    errors.message="Required"
}
    }
})

    return (
        <>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor='name'>Name</label>
            <input type="text" id="name" name="name"onChange={formik.handleChange} value={formik.value.name} />

            <label htmlFor='email'>Email</label>
            <input type="text" id="email" name="email" onChange={formik.handleChange} value={formik.value.email}/>

            <label htmlFor='message'>Message</label>
            <input type="text" id="message" name="message"onChange={formik.handleChange} value={formik.value.message} />

            <button type="submit"> Submit</button>
        </form>
        </>
    )
}

export default MainForm
