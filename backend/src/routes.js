const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const PostController = require('./controllers/PostController');
const LikeConstroller = require('./controllers/LikeController');

const routes = new express.Router();
const upload = multer(uploadConfig);

routes.get('/posts', PostController.index );
routes.post('/posts', upload.single('image'), PostController.store );

routes.post('/posts/:id/like', LikeConstroller.store );

module.exports = routes;