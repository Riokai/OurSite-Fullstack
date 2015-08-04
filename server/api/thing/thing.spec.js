'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

describe('GET /api/things', function() {

  it('应该响应一个JSON数组', function(done) {
    request(app)
      .get('/api/things')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Array);
        done();
      });
  });
});
