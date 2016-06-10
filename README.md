# webpack-react-redux-boilerplate

Project startup boilerplate for es6 React/Redux projects using webpack.  This boilerplate includes:
* Webpack build for dev, including hot-module-reload and dev server, as well as production.
* Eslint with Airbnb configuration,including allowance of es7 decorators
* The start of a test buildout
* A skeleton startup for a React/Redux app including a couple of handy utility functions, a store, and example reducers, actions, and connect call to start app

**Project is still lacking (to be updated shortly):**
* CSS Preprocessor setup (not sure which one I want to use yet)*
* Full testing layout

##Installation
All dependencies are installed as dev dependencies, so you shouldn't need to have any global npm modules installed.  After cloning, type in your console at the root of the project:

`
npm install
`

##NPM Script Commands

###Running Dev Server
Simply type in your trusty console:

`
npm start
`

At this point, you can navigate to http://localhost:3000 in your browser to load your app.  Any changes made to your react components should reload without you having to reload your page.

###Linting
In your console type:

`
npm run lint
`

This will run eslint against the src directory of the project.  Of course, you should have ann eslint plugin in your IDE to help you along the way.

###Production build
Type in your console:

`
npm run build
`

This will build your project in production mode, creating a smaller file, turning off react warnings, etc.

###Serve your production build locally
Type in your console:

`
npm run serve
`

This uses the serve module to serve your assets directly from your file system.  The /dist directory serves as your root in this scenario.

I commonly will run this combination:

`
npm run build && serve
`

###Run your unit tests
Type in your console:

`
npm test
`

This should run all your tests in the /test directory.  All tests files should be named *.test.js.

##Assumptions on Dependencies
While anyone is free to use this to get a project started, its origin is to help save me some time setting up my own React/Redux projects.  The modules and dependencies used are my preferences.  I know there are others out there, but this is my preferred setup.  Opinionated dependencies used are as follows:

* [Webpack](https://webpack.github.io/)
* [Airbnb JS Styleguide](https://github.com/airbnb/javascript)
* [Airbnb React Styleguide](https://github.com/airbnb/javascript/tree/master/react)
* [ESLint](http://eslint.org/)
* [Airbnb ESLint Config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
* [Mocha](https://mochajs.org/)
* [Should](https://github.com/shouldjs/should.js)


