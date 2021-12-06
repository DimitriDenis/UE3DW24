const request = require('supertest');
const app = require('../app');

describe('Test : Get all users', function() {
    it('respond with json', function (done){
        request(app)
        .get('/api/users')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201, done);
    });
});


describe('Test : Create a user', function() {
    it('responds with json', function(done) {
        request(app)
        .post('/api/createuser')
        .field('firstname', 'test_units')
        .field('lastname', 'units_test')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201, done);
    });
});

describe('Test : Update a user', function() {
    it('responds with json', function(done) {
        request(app)
        .put('/api/updateuser')
        .field('id', '0')
        .field('firstname', 'update_units')
        .field('lastname', 'units_update')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201, done);
    });
});

describe('Test : Delete a user', function() {
    it('responds with json', function(done) {
        request(app)
        .delete('/api/deleteuser')
        .field('id', '0')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201, done);
    });
});
// describe('Test : cannot get one user', function() {
//     it('respond with json', function (done){
//         request(app)
//         .get('/api/users/a')
//         .set('Accept', 'application/json')
//         .expect('Content-Type', /json/)
//         .expect(404, done);
//     });
// });