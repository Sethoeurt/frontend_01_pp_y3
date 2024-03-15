import React from 'react'
import { useSelector } from 'react-redux'
import { useTheme, useMediaQuery } from '@mui/material'
import { Box } from '@mui/system';
import Bio from '../components/inputComponents/Bio'
import Address from '../components/inputComponents/Address'
import Experience from '../components/inputComponents/Experience'
import Projects from '../components/inputComponents/Projects'
import Education from '../components/inputComponents/Education'
import KeySkills from '../components/inputComponents/KeySkills'
import Download from '../components/Download'
import FillDetailButton from '../components/FillDetailButton';
import FillDetailSideBar from '../components/FillDetailSideBar';


function FillDetails() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

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

  return (

    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        '& > :first-of-type': {
          width: isMobile ? '8%' : isMediumScreen ? '10%' : isLargeScreen ? '10%' : 'auto',
        },
        '& > :last-of-type': {
          width: isMobile ? '85%' : isMediumScreen ? '80%' : isLargeScreen ? '90%' : '80%',
        },
      }}
    >
      {isMobile ? <FillDetailSideBar /> : <FillDetailButton />}
      <Box > {renderComponent()} </Box>
    </Box>

  )
}

export default FillDetails
