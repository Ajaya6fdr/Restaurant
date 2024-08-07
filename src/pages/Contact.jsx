import React from 'react'
import Layout from '../Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';

const Contact = () => {
  return (
    <Layout>
       <Box sx={{my:15,ml:7,"& h4":{fontWeight:'bold',mb:2}}}>
         <Typography variant='h4'>
           Contact My Restaurant
         </Typography>
         <p>
          Welcome to [Restaurant Name], nestled in the heart of [City]. More than just a place to eat, it's a culinary haven where tradition meets.place to eat, it's a culinary haven where tradition meets.place to eat, it's a culinary haven where tradition meets.place to eat, it's a culinary haven where tradition meets.place to eat, it's a culinary haven where tradition meets.place to eat, it's a culinary haven where tradition meets.place to eat, it's a culinary haven where tradition meets.
         </p>
       </Box>
       <Box sx={{m:3, width:"600px",ml:10, "@media (max-width:600px)":{
         width:"260px"
       }}}>
         <TableContainer component={Paper}>
            <Table aria-label='contact table'>
               <TableHead>
                 <TableRow>
                   <TableCell sx={{bgcolor:"black", color:"white"}} align='center'>
                     Contact Details
                   </TableCell>
                 </TableRow>
               </TableHead>

               <TableBody>

                  <TableRow>
                     <TableCell>
                        <SupportAgentIcon sx={{color:"red",pt:1}}/> 1800-00-900 (tollfree)
                     </TableCell>
                  </TableRow>
                  
                  <TableRow>
                     <TableCell>
                        <MailIcon sx={{color:"skyblue",pt:1}}/> help@mytep.com
                     </TableCell>
                  </TableRow>

                  <TableRow>
                     <TableCell>
                        <CallIcon sx={{color:"green",pt:1}}/> 23345444543
                     </TableCell>
                  </TableRow>

               </TableBody>
            </Table>
         </TableContainer>
       </Box>
    </Layout>
  )
}

export default Contact