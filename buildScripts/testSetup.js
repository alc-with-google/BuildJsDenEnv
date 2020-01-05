//This file isn't transpiled, so must use commonjs and es5

//this file is run first through the scripts in the package.json file before the tests are run

//Register babel to tanspile before our test run.
require('babel-register')();

//Disable webpack features that Mocha dosent understand
require.extensions['.css'] = function() {};
