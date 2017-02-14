<h2>Overview</h2>
<p>Simple REST APIs in Node.</p>

<p><strong>Getting Started</strong></p>
<p>Create directory<br />
Now open up your terminal or command line and go to the project’s directory. Type<br /><br />

<strong>npm init</strong> (to create package.json file)</p>

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

<p>Install package and and save it as dependency in the package.json file</p>

<strong>npm install express --save</strong>

<strong>npm install -g nodemon</strong>

(monitor for any changes in your source and automatically restart your server.)

<strong>npm install pug</strong>

(A clean, whitespace-sensitive template language for writing HTML)

<strong>npm install --save body-parser</strong>

(Express version 4 and above requires extra middle-ware layer to handle POST request. This middle-ware is called as ‘bodyParser’. This used to be internal part of Express framework but now you have to install it separately.)
Unit test modules:

<strong>npm install mocha --save</strong>

<strong>npm install chai --save</strong>

<strong>npm install --save-dev should</strong>

<strong>npm install --save-dev supertest</strong>

<p>create a file named app.js</p>


<h2>Run Server</h2>

<strong>node app.js</strong>

or

<strong>nodemon app.js</strong>

<h2>Make Requests</h2>

http://localhost:3000/

http://localhost:3000/api/add

http://localhost:3000/edit/:id

http://localhost:3000/delete/:id

http://localhost:3000/api/save
