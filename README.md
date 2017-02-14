# REST-API-Node-js

Overview
Simple REST APIs in Node.

Getting Started
Create directory

Now open up your terminal or command line and go to the project's directory. Type

npm init


name:
version:
description:
entry point:
test command:
git repository:
keywords:
author:
licence:

Install package and and save it as dependency in the package.json file

npm install express --save

create a file named app.js

npm install -g nodemon 

(monitor for any changes in your source and automatically restart your server.)

npm install pug 

(A clean, whitespace-sensitive template language for writing HTML)

npm install --save body-parser 

(Express version 4 and above requires extra middle-ware layer to handle POST request. This middle-ware is called as ‘bodyParser’. This used to be internal part of Express framework but now you have to install it separately.) 
Unit test modules:

npm install mocha --save

npm install chai --save

npm install --save-dev should

npm install --save-dev supertest


Run Server

node app.js

or 

nodemon app.js


Make Requests

http://localhost:3000/

http://localhost:3000/api/add

http://localhost:3000/edit/:id

http://localhost:3000/delete/:id

http://localhost:3000/api/save



