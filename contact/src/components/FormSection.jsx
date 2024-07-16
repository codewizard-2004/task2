import React, { useState } from 'react'
import { Box ,Typography, TextField,Button } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import SocialIcons from './SocialIcons';
import emailjs from 'emailjs-com';

import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const FormSection = () => {

    const [loading , setLoading] = useState(false);
    const [Name , setName] = useState('');
    const [Username , setUsername] = useState('');
    const [Feedback , setFeedback] = useState('');

    const handleSubmit = (e) => {
        setLoading(true);
        if (!Name || !Username || ! Feedback) {
            toast.warn('Enter all Inputs!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
                setLoading(false)
                return;
        }
        console.log(`Full Name: ${Name}\nUsername: ${Username}\nFeedback: ${Feedback}`)
        emailjs.send("service_xzt017r" , "template_xp8vvan" ,{
            user_name: Name,
            user_email: Username,
            message: Feedback,
        },"d6RYe1ivHySp0Qa5P").then((result)=> {
            console.log(result.text);
            toast.success('Thank you for contacting with us', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
            setLoading(false)
            setName("");
            setUsername("");
            setFeedback("");
        } , (error)=> {
            console.log(error.text);
            toast.error(error.message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
            setLoading(false)
        })
    }


  return (
    <Box sx={{
        display: 'flex',
        flexDirection:"column",
        alignItems:"center",
        width: '50%',
        height: '100%'
    }}>
        <form style={{display:"flex" , justifyContent:"center" , flexDirection:"column" }}>
            <Typography variant="h4" sx={{ mt: 1 , minWidth: "200px" }}>
                Contact Us
            </Typography>

            <TextField id="outlined-filled" label="Enter your Full Name" variant="outlined" sx={{
                mt:2, width:"270px"  , minWidth: "200px"}} value={Name} onChange={(e)=>{setName(e.target.value)}}/>

            <TextField id="outlined-filled" label="Enter your Email Address" variant="outlined" sx={{mt:2, minWidth: "200px"}}
            value={Username} onChange={(e)=>{setUsername(e.target.value)}}/>


            <TextField id="outlined-filled" label="Please tell us your feedback" multiline rows={5} maxRows={6} variant="outlined" sx={{mt:2 }}
            value={Feedback} onChange={(e)=>{setFeedback(e.target.value)}}/>

            <Button variant="contained" sx={{mt:2, minWidth: "200px"}} onClick={handleSubmit}>{!loading?<span>Submit</span>:<CircularProgress size={25} />}</Button>
            <ToastContainer />
            <SocialIcons/>
        </form>
    </Box>
  )
}

export default FormSection
