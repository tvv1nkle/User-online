import React from 'react'
import './Useronline.scss'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'

const users = [
  {
    name: 'ploy'
  },
  {
    name: 'mint'
  },
  {
    name: 'chompoo'
  },
  {
    name: 'hiang'
  },
  {
    name: 'Tinky Winky'
  },
  {
    name: 'Dipsy'
  },
  {
    name: 'Laa Laa'
  }
]


function Useronline() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {users.map((user, idx) =>
        <ListItem key={idx}>
          <ListItemAvatar>
            <Avatar alt="" src="#" />
          </ListItemAvatar>
          <ListItemText primary={user.name} />
        </ListItem>
      )}
    </List>
  )
}

export default Useronline