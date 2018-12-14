# bme590final
Front end functionality for the HIE sensor management tool. Back end can be found [here](https://github.com/jcsambangi/bme590final_backend).  
v1.0.0 released 12/14/18 by Teresa Mao, Claire Niederriter, and Jaydeep Sambangi

## Overview
This repository holds a React App that runs on `localhost:3000` which communicates with the server back end via RESTful API requests. It serves as a web-browser-housed user interface for the HIE sensor management tool. Considering front and back ends together, this software can sense locally attached DASHRs, allow the user to select any permutation of them, download and store all the data in the selected DASHRs, and report on how many files were successfully downloaded for each DASHR. Instructions for using this software can be found below and on the above linked back end repository page.    
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setting Up
First, install [node.js](https://nodejs.org/en/) on the local machine. Then, once inside the locally cloned repository, run:
* `npm install`
This only has to be run the very first time the React App is started to install the packages required by the software. Next, run:
* `npm run start`
This runs the app in the development mode. Navigating to [http://localhost:3000](http://localhost:3000) within a web browser will allow use of the software (once the back end setup has been complete). Instructions for using the software are below.

## User Guide
1) Plug in DASHR devices to Manhattan MondoHub.
2) Run `npm start` to open the app in the web browser.
3) Click the 'DETECT DASHRS' button to recognize all connected DASHRs.
4) All of the detected DASHR Pin numbers will pop up below 'Detected DASHRs:'.
5) Check the boxes next to the DASHRs that you want to store the data files for.
6) When the boxes for all desired DASHRs are checked, click the 'HARVEST FILES FROM SELECTED DEVICES' button. 
7) This will save all of the files from those devices to the database and then return info about what was saved in the log report table in the 'Log' section.

NOTE: After the 'HARVEST FILES FROM SELECTED DEVICES' button is clicked, it takes about 5-10 seconds for the log report info to be populated. Be patient. It may appear like it's not doing anything, but it just takes a little time to process.

## Quirks

1) This project does not download the data onto the computer, but simply puts the data into the database. Once the data is put in the database, it cannot be retrieved.
2) If a time stamp from a new set of data is older than the newest time stamp stored, it won't store the new data. The database stores data chronologically.

## Additional Info
A video demo of the data management tool can be found on Claire Niederriter's Drop Box on Sakai, called 'FinalProject_HIE.MOV'. 
