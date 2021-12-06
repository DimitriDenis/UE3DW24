const express = require('express');
const usersCtrl = require('../controllers/usersCtrl');

const multer = require('multer');

const upload = multer({ dest: 'uploads/' }) ;

exports.router = (function() {
    const apiRouter = express.Router();
    apiRouter.route('/users/').get(usersCtrl.getAllUsers);
    apiRouter.route('/createuser/').post(upload.array(), usersCtrl.createUser);
    apiRouter.route('/updateuser').put(upload.array(), usersCtrl.updateUser);
    apiRouter.route('/deleteuser').delete(upload.array(), usersCtrl.deleteUser);
    return apiRouter;
})();