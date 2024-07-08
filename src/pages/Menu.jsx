import React from 'react'
import Layout from '../Layout'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import {MenuList} from './Data.js'
const Menu = () => {
  return (
    <Layout>
      <Box sx={{display:'flex', flexWrap:'wrap', justifyContent:'center', margin:'20px'}}>
         {MenuList.map(menu =>(
          <Card sx={{maxWidth:'390px',display:'flex',m:2}}>
             <CardActionArea>
                <CardMedia sx={{minHeight:'400px'}} component={'img'} src={menu.image} alt={menu.image}/>

                <CardContent>
                   <Typography variant='h5' gutterBottom component={'div'}>
                     {menu.name}
                   </Typography>
                   <Typography variant='body' >
                     {menu.Decription}
                   </Typography>
                </CardContent>
             </CardActionArea>
          </Card>
         ))}
      </Box>
    </Layout>
  )
}

export default Menu