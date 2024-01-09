import React from 'react'
import { useSelector } from 'react-redux'
import Bio from '../components/inputComponents/Bio'
import Address from '../components/inputComponents/Address'
import Experience from '../components/inputComponents/Experience'
import Projects from '../components/inputComponents/Projects'
import Education from '../components/inputComponents/Education'
import KeySkills from '../components/inputComponents/KeySkills'



function FillDetails() {

  const fillDetails = useSelector(state => state.fillDetails);
  const value = fillDetails.value

  const renderComponent = () => {
    switch (value) {
      case 1:
        return <Bio />;
      case 2:
        return <Address  />;
      case 3:
        return <Experience  />;
      case 4:
        return <Projects  />;
      case 5:
        return <Education />;
      case 6:
        return <KeySkills  />;
      default:
        return null;
    }
  };

  return (
    <>
      <div> {renderComponent()} </div>
    </>
  )
}

export default FillDetails