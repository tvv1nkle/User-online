import React from 'react'
import './Useronline.scss'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

//List
// import ListSubheader from '@mui/material/ListSubheader';

// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';

// import Collapse from '@mui/material/Collapse';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import DraftsIcon from '@mui/icons-material/Drafts';
// import SendIcon from '@mui/icons-material/Send';
// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';
// import StarBorder from '@mui/icons-material/StarBorder';


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
    <div className='Useronline'><List>
      {users.map((user, idx) =>
        <ListItem key={idx}>
          <ListItemAvatar>
            <Avatar alt="" src="#" />
          </ListItemAvatar>
          <ListItemText primary={user.name} />
        </ListItem>
      )}
      <div className='Seemore'>
        <Fab size="small" color="#46469C" aria-label="add">
          <AddIcon />
        </Fab>
      </div>
    </List>
    </div>
  )
}


// function NestedList() {
//   const [open, setOpen] = React.useState(true);

//   const handleClick = () => {
//     setOpen(!open);
//   };

//   return (
//     <List
//       sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
//       component="nav"
//       aria-labelledby="nested-list-subheader"
//       subheader={
//         <ListSubheader component="div" id="nested-list-subheader">
//           Nested List Items
//         </ListSubheader>
//       }
//     >
//       <ListItemButton>
//         <ListItemIcon>
//           <SendIcon />
//         </ListItemIcon>
//         <ListItemText primary="Sent mail" />
//       </ListItemButton>
//       <ListItemButton>
//         <ListItemIcon>
//           <DraftsIcon />
//         </ListItemIcon>
//         <ListItemText primary="Drafts" />
//       </ListItemButton>
//       <ListItemButton onClick={handleClick}>
//         <ListItemIcon>
//           <InboxIcon />
//         </ListItemIcon>
//         <ListItemText primary="Inbox" />
//         {open ? <ExpandLess /> : <ExpandMore />}
//       </ListItemButton>
//       <Collapse in={open} timeout="auto" unmountOnExit>
//         <List component="div" disablePadding>
//           <ListItemButton sx={{ pl: 4 }}>
//             <ListItemIcon>
//               <StarBorder />
//             </ListItemIcon>
//             <ListItemText primary="Starred" />
//           </ListItemButton>
//         </List>
//       </Collapse>
//     </List>
//   );
// }

export default Useronline

