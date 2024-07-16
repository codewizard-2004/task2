import { Box } from '@mui/material';
import FormSection from './components/FormSection';
import RightImage from './components/RightImage'

function App() {
  return (
    <div className='main-container' style={{
      overflow:"hidden" ,
      display:"flex" ,
      justifyContent:"center" ,
      alignItems:"center",
      height:"100vh"
      }}>
      <style>
        {`body{
            overflow: hidden;
            background: url(/bg.jpg);
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            }`}
      </style>
      
    <Box sx={
      {
        width: '700px',
        margin: '0px',
        height: '500px',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        overflow:'hidden',
        backgroundColor: 'rgba(255 ,255 ,255, 1)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px'
      }
    }>
      <FormSection/>
      <RightImage/>
    </Box>
    </div>
  )
}

export default App
