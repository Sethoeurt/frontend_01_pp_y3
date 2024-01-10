import React from 'react'
import { Stack, Typography } from "@mui/material";


function About() {
  return (
    <>
      <Stack
        sx={{
          color: '#f3f4f6',
          padding : {
            xs: "18px",
            sm: "25px",
            md: "40px",
            lg: "60px "
          }
        }}
      >
        <h2 style={{ color: '#f59e0b' }}> Resume Builder </h2>

        <Stack
          direction={{
            xs: "column",
            lg: "row-reverse",
          }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          mt="20px"
        >
          <Stack>
            <img
              src="https://www.visualcv.com/static/67fb7346de03f735bcf1b48751bb8b19/e3663/CV_Examples_2x.png"
              alt="img"
            />
          </Stack>

          <Stack
            sx={{
              fontSize: {
                xs: "13px",
                sm: "15px",
                md: "17px",
                lg: "19px",
              },
              paddingRight: {
                xs: "15px",
                sm: "18px",
                lg: "25px",
              },
              textAlign: "justify",
              display: "flex",
              flexDirection: 'column',
              gap: '2rem'
            }}>

            <Typography>
              <p>
                We are Empowering professionals to land coveted positions at top-tier companies like BBC, Google, Apple, Tesla, and Airbnb, our online resume builder is a game-changer in the job market. With our intuitive platform, choose from a curated selection of expertly designed resume templates.
              </p>

              <p>
                Craft your personalized resume within minutes using industry-approved sections, meticulously tailored to impress recruiters worldwide. Each section is thoughtfully crafted to reflect your unique skills and personality, ensuring a standout application that speaks volumes.
              </p>

              <p>
                Our platform offers the flexibility to customize every aspect, allowing you to shape a professional-grade resume that perfectly mirrors your career aspirations and expertise.
              </p>
            </Typography>

            <Typography>
              <h3 style={{ color: '#f59e0b' }}>
                Simple Steps to Build Professional Resume
              </h3>
              <ol>1. Select Template </ol>
              <ol>2. Fill details </ol>
              <ol>3. Export Resume [ ready to download ]   </ol>
            </Typography>

            <Typography>
              <h3 style={{ color: '#f59e0b' }}>
                Privacy Policy
              </h3>
              <ol>1. We are collecting Nothing. </ol>
              <ol>2. Using Secured Connection.  </ol>
              <ol>3. Use this app without any hesitation. </ol>
            </Typography>

            <Typography>
              <h3 style={{ color: '#f59e0b' }}>
                Technology used in this App
              </h3>
              <ol>1. Javascript </ol>
              <ol>2. React & Redux Toolkit  </ol>
              <ol>3. HTML, CSS, Material UI </ol>
              <ol>3. Jspdf, React-hook-form </ol>
            </Typography>

          </Stack>

        </Stack>

      </Stack>
    </>
  )
}

export default About