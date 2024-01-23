import React, { useEffect, useState } from 'react'
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

  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  const [flex_grow_value, set_flex_grow_value] = useState(1);
  const [menuToggle, setMenuToggle] = useState(false);

  useEffect(() => {
    return set_flex_grow_value(() => isMobile ? 0 : 1)
  }, [isMobile])



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
    <Button key="address">Address</Button>,
    <Button key="experience">Experience</Button>,
    <Button key="projects">Projects</Button>,
    <Button key="education">Education</Button>,
    <Button key="keySkills">Key Skills</Button>,
    <Button key="donwload">Download</Button>
  ];

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          '& > :first-child': {
            width: isMobile ? '8%' : isMediumScreen ? '10%' : isLargeScreen ? '10%' : 'auto',
          },
          '& > :last-child': {
            width: isMobile ? '80%' : isMediumScreen ? '80%' : isLargeScreen ? '90%' : '80%',
          },
        }}
      >
        {
          isMobile ? (
            <Box >
              <IconButton
                sx={{
                  marginTop: '2rem',
                  marginLeft: '0.75rem',
                  position: "sticky",
                  top: 70,
                  color: "#65a30d",
                  backgroundColor: "#030712",
                  '&:hover': {
                    color: '#a3e635',
                    backgroundColor: "#030712"
                  },
                }}
                aria-label='more'
                aria-controls={menuToggle ? 'long_menu' : undefined}
                aria-expanded={menuToggle ? 'true' : undefined}
                aria-haspopup="true"
                onClick={() => handleClick()}
              >
                < MoreVertIcon />
              </IconButton>

              <Menu
                id='long_menu'
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
            <Box
              sx={{
                marginTop: '3rem',
                marginLeft: '3rem',
              }}
            >
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
        <Box > {renderComponent()} </Box>
      </Box>


    </>
  )
}

export default FillDetails
