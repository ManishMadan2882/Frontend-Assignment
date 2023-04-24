# Project Overview
This is a React.js project that uses Material UI and Redux to create a form builder application. The application takes an input of JSON schema on the left side and previews the rendered form on the right side.

# Project Dependencies
The following dependencies are required to run this project:

* React.js
* Material UI
* Redux
* React-Redux
 
# Installation
To install this project, follow these steps:

* Clone the repository to your local machine.
* Open the project directory in a terminal window.
* Run <h1><b>npm install --legacy-peer-deps</b></h1> to install the dependencies.
* Run <h1><b>npm start</b></h1> to start the development server.
* Open a web browser and navigate to http://localhost:3000.

# Usage
To use the application, follow these steps:

* Enter a valid JSON schema in the left-hand input field.
* See a rendered form on the right-hand side.
* If the JSON schema is non-parsable it won't be rendered
* You can modify the JSON schema, the changes will be rendered automatically iff the JSON is valid.
* Once the form is rendered, you can interact with it just like any other HTML form.

# Project Structure
The project is organized into the following directories:

### src/: Contains the source code for the React.js application.
 * actions/: Contains Redux action creators. 
 * components/: Contains React components for rendering the UI.
 * store/: Contains the Redux store configuration & slice/reducers.
### App.js: The main React component for the application.
### index.js: The entry point for the application.

