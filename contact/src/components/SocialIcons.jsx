import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import { Box ,Typography, TextField,Button } from '@mui/material';

const SocialIcons = () => {
  return (
    <Box sx={{display:"flex", flexDirection:"row"}}>
      <Button href='https://github.com/codewizard-2004'>
        <GitHubIcon fontSize='large'/>
      </Button>
      <Button href='https://www.instagram.com/4mal_varghese/'>
        <InstagramIcon fontSize='large'/>
      </Button>
      <Button href='https://www.linkedin.com/in/amal-varghese-670225291'>
        <LinkedInIcon fontSize='large'/>
      </Button>
      <Button href='https://twitter.com/amalv2004'>
        <XIcon fontSize='large'/>
      </Button>
      
      
    </Box>
  )
}

export default SocialIcons
