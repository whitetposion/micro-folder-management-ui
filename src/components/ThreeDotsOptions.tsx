import React, { useState } from 'react';
import { IconButton, Menu, MenuItem,  Typography } from '@mui/material';
import { DownloadIcon, EllipsisVertical, Trash } from 'lucide-react';

const iconsData = [
     {
          icon: <DownloadIcon size={15}/>,
          name: "Download",
          onClick (e: React.MouseEvent<HTMLElement>){
               e.stopPropagation()
               console.log("Dowloading")
               setTimeout(()=>console.log("Downloaded"), 2000)
          }
     },
     {
          icon: <Trash size={15}/>,
          name: "Delete",
          onClick (e: React.MouseEvent<HTMLElement>){
               e.stopPropagation()
               console.log("Deleted")
          }
     }
]

const ThreeDotMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event :React.MouseEvent<HTMLElement>) => {
     event.stopPropagation()
     setAnchorEl(event.currentTarget)
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    
    <div >
     <IconButton style={{padding: 0}} onClick={handleClick}>
        <EllipsisVertical   />
     </IconButton>
     <Menu
          anchorEl={anchorEl}
          open={open}
          style={{ width: "300px" }} // Increase the width of the menu
          onClose={handleClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          
     >
     {iconsData.map((item, index) => (
          <MenuItem
               key={index}
               onClick={(e) => item.onClick(e)}
               style={{ fontSize: 'small' }} // Reduce the font size of the menu items
               sx={{width: 200}}
          >
               <Typography  
                    variant="body2" 
                    style={{display: "flex" ,gap: "10px", fontSize: "0.875rem", marginLeft: '8px', alignItems: "center" }}
               >
                    {item.icon} 
                    {item.name}
               </Typography>
          </MenuItem>
     ))}
     </Menu>
    </div>
  );
};

export default ThreeDotMenu;
