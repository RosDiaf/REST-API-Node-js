var expect    = require("chai").expect;
var should    = require("chai").should;
var supertest = require("supertest");

const express = require('express');
const app = express();

var api = supertest('http://localhost:3000');


describe('GET /user', function() {

    it("Should return 200 response'", function(done) {
        api.get('/')
        .set('Accept','application/json')
        .expect(200,done);
    });

    it("It Should be an object with keys and values'", function(done) {
        api.get('/2')
        .set('Accept','application/json')
        .expect(200)
        .end(function(err, res) {
            expect(res.body).to.have.property("login");
            expect(res.body).to.have.property("id");
            expect(res.body).to.have.property("avatar_url");
            expect(res.body).to.have.property("gravatar_id");
            expect(res.body).to.have.property("url");
            expect(res.body).to.have.property("html_url");
            expect(res.body).to.have.property("followers_url");
            expect(res.body).to.have.property("following_url");
            expect(res.body).to.have.property("gists_url");
            expect(res.body).to.have.property("starred_url");
            expect(res.body).to.have.property("subscriptions_url");
            expect(res.body).to.have.property("organizations_url");
            expect(res.body).to.have.property("repos_url");
            expect(res.body).to.have.property("events_url");
            expect(res.body).to.have.property("received_events_url");
            expect(res.body).to.have.property("type");
            expect(res.body).to.have.property("site_admin");
            done();
        })
    });

    it("It Should return response 200 for user id 1", function(done) {

      app.get('/1', function(req, res) {
        res.status(200).json({
          "login": "mojombo",
          "id": 1,
          "avatar_url": "https://avatars.githubusercontent.com/u/1?v=3",
          "gravatar_id": "",
          "url": "https://api.github.com/users/mojombo",
          "html_url": "https://github.com/mojombo",
          "followers_url": "https://api.github.com/users/mojombo/followers",
          "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
          "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
          "organizations_url": "https://api.github.com/users/mojombo/orgs",
          "repos_url": "https://api.github.com/users/mojombo/repos",
          "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
          "received_events_url": "https://api.github.com/users/mojombo/received_events",
          "type": "User",
          "site_admin": false
        });
      });

      api.get('/1')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
          if (err) throw err;
          done();
        });
    });

});




describe('POST /user', function() {

  it('Test POST method for /api/books', function(done){
    var user = {
      "login": "pjhyett",
      "id": 200,
      "avatar_url": "https://avatars.githubusercontent.com/u/3?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/pjhyett",
      "html_url": "https://github.com/pjhyett",
      "followers_url": "https://api.github.com/users/pjhyett/followers",
      "following_url": "https://api.github.com/users/pjhyett/following{/other_user}",
      "gists_url": "https://api.github.com/users/pjhyett/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/pjhyett/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/pjhyett/subscriptions",
      "organizations_url": "https://api.github.com/users/pjhyett/orgs",
      "repos_url": "https://api.github.com/users/pjhyett/repos",
      "events_url": "https://api.github.com/users/pjhyett/events{/privacy}",
      "received_events_url": "https://api.github.com/users/pjhyett/received_events",
      "type": "User",
      "site_admin": false
    };

    api.post('/update/'+ user.id)
      .send(user)
      .expect(200)
      .end(function(err, res){
        if(err){
          return done(err);
        }
        user = res.body;
        done();
      });
    });

});
