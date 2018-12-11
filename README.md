This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

First, in the project directory, run:

### `npm install`

In the project directory, you can then run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## User Guide
1) Plug in DASHR devices to Manhattan MondoHub.
2) Run `npm start` to open the app in the web browser.
3) Click the 'DETECT DASHRS' button to recognize all connected DASHRs.
4) All of the detected DASHR Pin numbers will pop up below 'Detected DASHRs:'.
5) Check the boxes next to the DASHRs that you want to store the data files for.
6) When the boxes for all desired DASHRs are checked, click the 'HARVEST FILES FROM SELECTED DEVICES' button. 
7) This will save all of the files from those devices to the database and then return info about what was saved in the log report table in the 'Log' section.

## Quirks

1) This project does not download the data onto the computer, but simply puts the data into the database. Once the data is put in the database, it cannot be retrieved.
2) If a time stamp from a new set of data is older than the newest time stamp stored, it won't store the new data. The database stores data chronologically.
