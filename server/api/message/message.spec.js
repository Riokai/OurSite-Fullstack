'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');
var User = require('../user/user.model.js');

describe('GET /api/messages', function() {

  before(function(done) {
    // Clear users before testing
    User.remove().exec().then(function() {
      done();
    });
  });

  it('未登录请求留言列表应该返回401未授权', function(done) {
    request(app)
      .get('/api/messages')
      .expect(401)
      .expect('Content-Type', /html/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Object);
        done();
      });
  });

  it('未登录新增一条留言应该返回401未授权', function(done) {
    request(app)
      .post('/api/messages')
      .expect(401)
      .expect('Content-Type', /html/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Object);
        done();
      });
  });

  it('登录后应该返回留言列表', function (done) {
    var user = {
      email: 'zengkai@hotmail.com',
      nickname: 'Kai',
      password: '12345678'
    };

    request(app)
      .post('/api/users')
      .type('json')
      .send(user)
      // .expect('Content-Type', /json/)
      .end(function(err, res) {
        var token = res.res.body.token;

        request(app)
          .get('/api/messages')
          .set('Authorization', 'Bearer ' + token)
          .expect(200)
          // .expect('Content-Type', /json/)
          .end(function(err, res) {
            if (err) return done(err);
            res.body.should.be.instanceof(Array);
            done();
          });
      })

  });
});