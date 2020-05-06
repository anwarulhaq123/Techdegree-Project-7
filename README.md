Start of Project 
React Gallery App

For this project, I have used the very popular and in-demand React library to create an image gallery app. With the help of this powerful "MVC" (Model, View, Controller) library, the app will is built in the style of modern single page applications to keep it fast, modular, and in sync with current web development trends.



 To start my project i have use the following commands in the commandline to built my local Enviornment. Before doing these Steps i have the Upto date node ,npm ,and Yarn install on my computer.
 
 1) $npx create-react-app
 2) npm install --save react-router-dom
 3) npm install --save axios // we need Axios to fetch the data from flicker.// 
Using the powerful Create React App tool, i set up the initial project.

Then ..

1)I have used  JavaScript and JSX to build out the gallery components in a modular fashion.

2)i have used React Router to set up routes for  default topic pages and a search page.

3)i have used the Axios to fetch data from the Flickr API and use it to display images in my app.

Components

The project has the 8  components. 


1)Header.js

2)Nav.js

3)Photo.js

4)PhotoContainer.js

5)SearchForm.js

6)NotFound.js

7)LoadingImg.js

8)Error404.js

Config.js File
 

The file Config.js containts the key for flicker Api . you need to add  your own Api key for file Config.js. The file has the following code :

const apiKey = 'YOUR API KEY';

export default apiKey;



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
