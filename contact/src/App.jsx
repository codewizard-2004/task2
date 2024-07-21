import { Box } from '@mui/material';
import { CssBaseline, GlobalStyles } from '@mui/material';
import FormSection from './components/FormSection';
import RightImage from './components/RightImage'


function App() {
  return (
    
    <Box className='main-container' sx={{
      overflow:"hidden" ,
      display:"flex" ,
      justifyContent:"center" ,
      alignItems:"center",
      height:"100vh"
      }}>
        <CssBaseline />
        <GlobalStyles
          styles={{
            body: {
              backgroundImage: 'url(/bg.jpg)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              height: '100vh',
              margin: 0,
              padding: 0,
              fontFamily: 'Roboto, sans-serif',
            },
          }}
        />
      <Box sx={
        {
          width: '700px',
          margin: '5px',
          height: '500px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          overflow:'hidden',
          backgroundColor: 'rgba(255 ,255 ,255, 1)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
        }
      }>
        <FormSection/>
        <RightImage/>
      </Box>
    </Box>
  )
}

export default App
