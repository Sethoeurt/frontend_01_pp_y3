import jsPDF from 'jspdf'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Paper } from '@mui/material'
import { Box } from '@mui/system'
import Address from '../components/previewComponents/Address'
import Bio from '../components/previewComponents/Bio'
import Education from '../components/previewComponents/Education'
import Experience from '../components/previewComponents/Experience'
import KeySkills from '../components/previewComponents/KeySkills'
import Projects from '../components/previewComponents/Projects'
import { firstComponents } from '../redux/slices/sliceFillDetails.js'
import { scrollToTop } from '../utils/controls.js'
import { colors } from '../utils/colors.js'


function Download() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const dynamicStyle = useSelector(state => state.dynamicStyle);
    const [dynamicWidth, setDynamicWidth] = useState('auto');

    const backToEdit = () => {
        navigate('/fillDetails');
        dispatch(firstComponents())
        scrollToTop();
    }

    const orignalWidth = () => {
        setDynamicWidth(dynamicWidth === '600px' ? 'auto' : 'auto');
    }

    const generatePDF = () => {
        setDynamicWidth(dynamicWidth === 'auto' ? '600px' : 'auto');
        const startTimeStamp = performance.now();
        const newPdf = new jsPDF('portrait', 'pt', 'a4');
        const bgColor = '#f3f4f6';
        newPdf.setFillColor(bgColor);
        newPdf.rect(
            0,
            0,
            newPdf.internal.pageSize.getWidth(),
            newPdf.internal.pageSize.getHeight(),
            'F'
        );
        newPdf.html(document.querySelector('#resume')).then(() => {
            newPdf.save('resume.pdf');
        });
        const endTimeStamp = performance.now();
        const timeDifference = endTimeStamp - startTimeStamp;
        setTimeout(orignalWidth, timeDifference + 3000);
    }

    return (
        <Box
            sx={{
                backgroundColor: colors.gray900,
                color: colors.gray200,
                padding: '1rem'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginTop: '0.75rem'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                    }}
                >
                    <Paper
                        elevation={3}
                        id='resume'
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            backgroundColor: '#f3f4f6',
                            color: 'black',
                            width: {
                                xs: dynamicWidth,
                                sm: '600px'
                            },
                        }}
                    >
                        <Box
                            sx={{
                                backgroundColor: dynamicStyle.backgroundColor,
                                color: dynamicStyle.color,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: {
                                    xs: 'column',
                                    sm: 'row'
                                }
                            }}
                        >
                            <Bio />
                            <Address />
                        </Box>
                        <Experience />
                        <Projects />
                        <Education />
                        <KeySkills />
                    </Paper>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}
                    >
                        <Button
                            sx={{
                                backgroundColor: colors.cyan600,
                                color: colors.gray950,
                                width: '30%',

                                fontWeight: 'bolder',
                                '&:hover': {
                                    backgroundColor: colors.cyan500,
                                }
                            }}
                            onClick={() => backToEdit()}
                        >
                            Back To Edit
                        </Button>
                        <Button
                            sx={{
                                backgroundColor: colors.blue800,
                                color: colors.gray200,
                                width: '30%',
                                fontWeight: 'bolder',
                                '&:hover': {
                                    backgroundColor: colors.blue700,
                                }
                            }}
                            onClick={() => generatePDF()}
                        >
                            Export PDF
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box >
    )
}

export default Download