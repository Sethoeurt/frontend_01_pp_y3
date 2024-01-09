import React from 'react'
import Address from '../components/previewComponents/Address'
import Bio from '../components/previewComponents/Bio'
import Education from '../components/previewComponents/Education'
import Experience from '../components/previewComponents/Experience'
import KeySkills from '../components/previewComponents/KeySkills'
import Projects from '../components/previewComponents/Projects'
import { Paper } from '@mui/material'
import jsPDF from 'jspdf'
import Styles from '../styles/input.module.css'


function Download() {

    const generatePDF = () => {
        const report = new jsPDF('portrait', 'pt', 'a4');
        report.html(document.querySelector('#report')).then(() => {
            report.save('report.pdf');
        });
    }

    return (
        <div className={Styles.container} >
            <div className={Styles.wrapper}>
                <Paper
                    elevation={3}
                    id='report'
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: '#f3f4f6',
                        color: 'black',
                        width : '600px'
                    }}
                >
                    <Bio />
                    <Experience />
                    <Projects />
                    <Education />
                    <KeySkills />
                    <Address />
                </Paper>
            </div>
            <button className={Styles.button} onClick={generatePDF} type="button">Export PDF</button>
        </div>
    )
}

export default Download