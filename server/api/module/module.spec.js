'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');
var Module = require('./module.model');

describe('API Module', function() {

  before(function(done) {
    Module.remove().exec().then(function() {
      done();
    });
  });

  afterEach(function(done) {
    Module.remove().exec().then(function() {
      done();
    });
  });

  it('读取所有模块', function(done) {
    request(app)
      .get('/api/modules')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Array);
        done();
      });
  });


  it('保存一个合法模块应该成功', function (done) {
    var module = {
      name: '时光轴',
      href: 'http://www.baidu.com',
      color: 'red'
    };

    request(app)
      .post('/api/modules')
      .type('json')
      .send(module)
      .expect(201)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);

        should.not.exist(err);
        should.exist(res);
        done();
      });
  });
  
  it('更新一个合法模块应该成功', function (done) {
    var module = {
      name: '时光轴',
      href: 'http://www.baidu.com',
      color: 'red'
    };

    var id = '';

    request(app)
      .post('/api/modules')
      .type('json')
      .send(module)
      .expect(201)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);

        id = res.body._id;

        request(app)
          .put('/api/modules/' + id)
          .type('json')
          .send({
            name: '留言板'
          })
          .expect(200)
          .expect('Content-Type', /json/)
          .end(function(err, res) {
            if (err) return done(err);

            should.not.exist(err);
            should.exist(res);
            done();
          })
      });
  });
});