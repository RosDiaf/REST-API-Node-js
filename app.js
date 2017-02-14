// -- Dependecies --------------------------
var express = require('express');
var request = require('request');
var bodyParser = require("body-parser");
var router = express.Router();


// -- Express ------------------------------
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());




// -- Asynchronous Call ---------------------
var info;
var options = {
  url: 'https://api.github.com/users',
  method: "GET",
  headers: {
    'User-Agent': 'request'
  }
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    info = JSON.parse(body);
    console.log(info);
    console.log('Status:', response.statusCode);
    console.log('Headers:', JSON.stringify(response.headers));

  }else {
    console.log(error);
  }
}
request(options, callback);
// -- End -----------------------------------



// -- Template ------------------------------
const pug = require('pug');
const compiledFunction_data = pug.compileFile('./views/data.pug');
const compiledFunction_form = pug.compileFile('./views/edit.pug');
const compiledFunction_confirm = pug.compileFile('./views/confirm.pug');
// -- End -----------------------------------



// -- App -----------------------------------
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('data', {info: info});
})

app.get('/:id', function (req, res) {
  for (var i = 0; i < info.length; i++) {
    if (info[i].id == req.params.id) {
      res.send(info[i]);
    }
  }
})

app.get('/edit/:id', function (req, res) {
  for (var i = 0; i < info.length; i++) {
    if (info[i].id == req.params.id) {
      res.render('edit', {info: info[i], header: "Edit User"});
    }
  }
})

app.get('/delete/:id', function (req, res) {
  for (var i = 0; i < info.length; i++) {
    if (info[i].id == req.params.id) {
      info.splice( i, 1 );
    }
  }
  res.render('confirm', {message: "User details deleted!"});
})

app.get('/api/add', function (req, res) {
  res.render('insert', {header: "Insert User"});
})

app.post('/api/save', function (req, res) {
  info.push({
    "login": req.body.login,
    "id":  req.body.id,
    "avatar_url": req.body.avatar_url,
    "gravatar_id": req.body.gravatar_id,
    "url": req.body.url,
    "html_url": req.body.html_url,
    "followers_url": req.body.followers_url,
    "following_url": req.body.following_url,
    "gists_url": req.body.gists_url,
    "starred_url": req.body.starred_url,
    "subscriptions_url": req.body.subscriptions_url,
    "organizations_url": req.body.organizations_url,
    "repos_url": req.body.repos_url,
    "events_url": req.body.events_url,
    "received_events_url": req.body.received_events_url,
    "type": req.body.type,
    "site_admin": req.body.site_admin
  });
  res.render('confirm', {message: "User details added!"});
})


app.post('/update/:id', function (req, res) {
  for (var i = 0; i < info.length; i++) {
    if (info[i].id == req.body.id) {

      info[i].login = req.body.login;
      info[i].avatar_url = req.body.avatar_url;
      info[i].gravatar_id = req.body.gravatar_id;
      info[i].url = req.body.url;
      info[i].html_url = req.body.html_url;
      info[i].followers_url = req.body.followers_url;
      info[i].following_url = req.body.following_url;
      info[i].gists_url = req.body.gists_url;
      info[i].starred_url = req.body.starred_url
      info[i].subscriptions_url = req.body.subscriptions_url;
      info[i].organizations_url = req.body.organizations_url;
      info[i].repos_url = req.body.repos_url;
      info[i].events_url = req.body.events_url;
      info[i].received_events_url = req.body.received_events_url;
      info[i].type = req.body.type;
      info[i].site_admin = req.body.site_admin;

    }
  }
  res.render('confirm', {message: "User details updated!"});

})
// -- End -----------------------------------


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
