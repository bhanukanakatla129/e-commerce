
import React, {  useState } from 'react'
// import { NavLink } from 'react-router-dom'
// import {  IconButton } from '@mui/material'
import Icon from '@mui/material/Icon';
import {Autocomplete, Avatar, Box, Divider, Grid, IconButton, ListItemIcon, Menu, MenuItem, TextField, Tooltip, Typography } from '@mui/material';
import {Logo } from './styled-components/logo';
import AppMenu from './menu';
import { Logout, PersonAdd, Settings } from '@mui/icons-material';
import CartBadge from './Cart';
// import axios from 'axios';
import useFetch from './hooks/useFetch';
// import CartBadge from './Cart';
// import { logo } from '@mui/base';
// import { } from '@mui/base';


function Header() {
  const [anchorEl, setAnchorEl] = useState([null]);
  const open = Boolean(anchorEl);
  const url = 'https://fakestoreapi.com/products'
 const {data: options, loading} = useFetch(url, [])
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
    const handleClose = () => {
    setAnchorEl(null);
  };
return (
    <>
    {loading ? <h1> loading...</h1> :}
    <>
    <Box sx={{ background: "white" , boxShadow: "inset -2px -4px 20px 9px lightgrey" }}>
    
      <Grid container spacing={2} justifyContent="center"  alignItems="center" sx={{padding:"6px"}}>
        <Grid item xs={2} >
          <Logo>
            <Typography> My store </Typography>
            <Icon>storefront</Icon>
          </Logo>
        </Grid>
        <Grid item xs={2}>
         <AppMenu />
         
        </Grid>
        <Grid item xs={6}>  
            <Autocomplete
            
      disablePortal
      id="combo-box-demo"
      options={options?.map(a=> a.title) }
      sx={{ }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
        </Grid>
        <Grid item xs={2}>
       <CartBadge />
        <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined} 
        >
          <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
        </IconButton>
      </Tooltip>
        </Grid>
      </Grid>
    </Box>
    
    <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    
      </>
      }
      </>
    
  )
    
}



export default Header