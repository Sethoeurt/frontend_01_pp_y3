import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {
  IconButton, Menu, MenuItem, useTheme, useMediaQuery, Button, ButtonGroup,
} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Bio from '../components/inputComponents/Bio'
import Address from '../components/inputComponents/Address'
import Experience from '../components/inputComponents/Experience'
import Projects from '../components/inputComponents/Projects'
import Education from '../components/inputComponents/Education'
import KeySkills from '../components/inputComponents/KeySkills'
import Download from '../components/Download'
import { Box } from '@mui/system';


function FillDetails() {
  const ITEM_HEIGHT = 48;
  let flex_grow_value = 1;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  // console.log(isMobile);
  if (isMobile) flex_grow_value = 0;
  const [menuToggle, setMenuToggle] = useState(false);

  const handleClick = () => {
    setMenuToggle(prevState => !prevState);
  }
  const handleClose = () => {
    setMenuToggle(false);
  }

  const fillDetails = useSelector(state => state.fillDetails);
  const value = fillDetails.value

  const renderComponent = () => {
    switch (value) {
      case 1: return <Bio />;
      case 2: return <Address />;
      case 3: return <Experience />;
      case 4: return <Projects />;
      case 5: return <Education />;
      case 6: return <KeySkills />;
      case 7: return <Download />;
      default: return null;
    }
  };


  const buttons = [
    <Button key="bio">Bio</Button>,
    <Button key="address" >Address</Button>,
    <Button key="experience" >Experience</Button>,
    <Button key="projects" >Projects</Button>,
    <Button key="education">Education</Button>,
    <Button key="keySkills" >Key Skills</Button>,
    <Button key="donwload" >Download</Button>
  ];

  return (
    <>
      <div
        style={{
          display: 'flex',

        }}
      >
        {
          isMobile ? (
            <Box >
              <IconButton
                sx={{
                  marginTop: '2rem',
                  marginLeft: '1rem',
                  position: "sticky",
                  top: 70,
                  color: "#65a30d",
                  backgroundColor: "#030712",
                  '&:hover': {
                    color: '#a3e635',
                    backgroundColor: "#030712"
                  },
                }}
                onClick={() => handleClick()}
              >
                < MoreVertIcon />
              </IconButton>

              <Menu
                MenuListProps={{
                  'aria-labelledby': 'long-button',
                }}
                open={menuToggle}
                onClose={handleClick}
                sx={{
                  "& .MuiPaper-root": {
                    width: '20ch',
                    maxHeight: ITEM_HEIGHT * 4.5,
                    backgroundColor: '#030712'
                  },
                }}
              >
                {buttons.map((button) => (
                  <MenuItem
                    key={button}
                  // selected={option === 'Pyxis'}
                  // onClick={handleClose}
                  >
                    {button}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <Box sx={{
              marginTop: '3rem',
              marginLeft: '3rem',
            }}>
              <ButtonGroup
                orientation="vertical"
                aria-label="vertical outlined button group"
                sx={{

                  position: "sticky",
                  top: 90,
                  bgcolor: "#030712",
                  '&:hover': {
                    color: '#a3e635',
                  },
                }}
              >
                {buttons}
              </ButtonGroup>
            </Box>
          )
        }
        <Box style={{ flexGrow: flex_grow_value }}> {renderComponent()} </Box>
      </div>

    </>
  )
}

export default FillDetails