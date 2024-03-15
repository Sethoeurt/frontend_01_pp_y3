# Resume Builder

## Description

Craft your personalized resume within minutes using industry-approved sections, meticulously tailored to impress recruiters worldwide. Each section is thoughtfully crafted to reflect your unique skills and personality, ensuring a standout application that speaks volumes.

## Live

- This application is purely frontend application, collection no data at all.
- It is deployed on vercel [Live Link](https://resume-builder-anurag.vercel.app).

## Table of Contents

1. [Technologies Used](#technologies-used)
2. [Installation ](#installation)
3. [Features](#features)
4. [Folder Structure](#folder-structure)
5. [License](#license)

## Technologies Used

- Vite
- Npm
- HTML
- CSS
- Material UI
- React.js
- Javascript
- Redux
- React Redux
- Redux Toolkit
- React hook form

## Installation

1. Clone the repository.
2. Navigate to the frontend folder and run `npm install` to install frontend dependencies.
3. Run `npm run dev` in the frontend folder to start the frontend application.

## Features

- Pre defined multiple templates
- Industry level resume creation
- Export as pdf
- Easy Interface
- ATS Friendly Design

## Folder Structure

<pre>
|-- src
    |-- assets 
    |-- components
        |-- inputComponents
            |-- Address.jsx
            |-- Bio.jsx
            |-- Education.jsx
            |-- Experience.jsx 
            |-- KeySkills.jsx
            |-- Projects.jsx
        |-- muiComponents 
            |-- ImageUpload.jsx 
            |-- SuccessSnackbar.jsx
        |-- previewComponets 
            |-- Address.jsx
            |-- Bio.jsx
            |-- Education.jsx
            |-- Experience.jsx 
            |-- KeySkills.jsx
            |-- Projects.jsx
        |-- Donload.jsx 
        |-- FillDetailButton.jsx
        |-- FillDetailSideBar.jsx
        |-- Footer.jsx
        |-- Navbar.jsx
    |-- data
        |-- details.js 
        |-- social.js
        |-- templates.js 
    |-- pages
        |-- About.jsx 
        |-- FillDetails.jsx 
        |-- Home.jsx 
        |-- MyResume.jsx 
    |-- redux
        |-- slices
            |-- addressSlice.js
            |-- bioSlice.js 
            |-- educationSlice.js 
            |-- experienceSlice.js 
            |-- keySkillsSlice.js 
            |-- projectsSlice.js 
            |-- sliceDynamicStyle.js 
            |-- sliceFillDetails.js 
        |-- store.js  
    |-- styles
        |-- footer.module.css 
        |-- home.module.css 
        |-- input.module.css 
        |-- navbar.module.css 
    |-- utils 
        |-- colors.js 
        |-- controls.js 
    |-- App.jsx 
    |-- main.jsx 
|-- index.css 
|-- index.html
|-- package.json
|-- package-lock.json
</pre>

## License

This project is licensed under the [MIT License](LICENSE).
