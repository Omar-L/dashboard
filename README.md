# World Dashboard ![example workflow](https://github.com/Omar-L/dashboard/actions/workflows/firebase-hosting-merge.yml/badge.svg)

This project was created using React. It loads information from various public sources and API's and displays it in a usable and searchable dashboard that allows the user to digest the data in an easier fashion. 

## Accessing a Live Preview

To access a live preview of this application, you can go to: 

[Preview the World Dashboard](https://dashboard-1e52a.web.app)

## Pipeline

The application has been configured on my side to deploy on commit/merge to Firebase using Github Actions in a containerized fashion.

## Unit Testing

At the time, I only have to specific tests for the application.

* `App.test.js`
* `home.test.js`

More tests will be added shortly.

## Technologies

* React using Function Based Components
* Material-UI
* Axios
* React Router

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!