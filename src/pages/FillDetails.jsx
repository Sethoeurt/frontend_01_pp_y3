// from installed dependencies 
import React from 'react'
import { useSelector } from 'react-redux'
import { useTheme, useMediaQuery } from '@mui/material'
import { Box } from '@mui/system';

// from inputComponents folder 
import Bio from '../components/input/Bio'
import Address from '../components/input/Address'
import Experience from '../components/input/Experience'
import Projects from '../components/input/Projects'
import Education from '../components/input/Education'
import KeySkills from '../components/input/KeySkills'

// from components folder 
import ViewPreview from '../components/preview/ViewPreview';
import FillDetailButton from '../components/FillDetailButton';
import FillDetailSideBar from '../components/FillDetailSideBar';


function FillDetails() {

  // use of material ui to find the screen size 
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  // value comming from redux store 
  const fillDetails = useSelector(state => state.fillDetails);
  const value = fillDetails.value

  // redering of components based on value coming from redux store 
  const renderComponent = () => {
    switch (value) {
      case 1: return <Bio />;
      case 2: return <Address />;
      case 3: return <Experience />;
      case 4: return <Projects />;
      case 5: return <Education />;
      case 6: return <KeySkills />;
      case 7: return <ViewPreview />;
      default: return null;
    }
  };

  // inline styling of box wrapper  
  const boxWrapper = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    '& > :first-of-type': {
      width: isMobile ? '8%' : isMediumScreen ? '10%' : isLargeScreen ? '10%' : 'auto',
    },
    '& > :last-of-type': {
      width: isMobile ? '85%' : isMediumScreen ? '80%' : isLargeScreen ? '90%' : '80%',
    },
  }

  return (
    <Box sx={boxWrapper}>
      {isMobile ? <FillDetailSideBar /> : <FillDetailButton />}
      {renderComponent()}
    </Box>
  )
}

export default FillDetails
