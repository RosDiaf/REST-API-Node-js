<h2>Overview</h2>
<p>Simple REST APIs in Node.</p>

<p><strong>Getting Started</strong></p>
<p>Create directory<br />
Now open up your terminal or command line and go to the project’s directory. Type<br /><br />

npm init</p>

<ul>
<li>name:</li>
<li>version:</li>
<li>description:</li>
<li>entry point:</li>
<li>test command:</li>
<li>git repository:</li>
<li>keywords:</li>
<li>author:</li>
<li>licence:</li>
</ul>

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

<h2>Run Server</h2>

node app.js

or

nodemon app.js

<h2>Make Requests</h2>

http://localhost:3000/

http://localhost:3000/api/add

http://localhost:3000/edit/:id

http://localhost:3000/delete/:id

http://localhost:3000/api/save
