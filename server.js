//imports
const express = require('express')
const logger = require ('morgan')
const errorhandler = require('errorhandler')
const bodyParser = require('body-parser')
const routes = require('./routes')
//instanciations

let app = express()
//midelware
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())
//routes 
//get posts
app.get('/posts',routes.posts.getPosts)
//post posts
app.post('/posts',routes.posts.addPost)
//put a post
app.put('/posts/:postId',routes.posts.updatePost)
//delete post
app.delete('/posts/:postId',routes.posts.removePost)
//get post and comments
app.get('/posts/:postId/comments',routes.comments.getComments)
//post posts
app.post('/posts/:postId/comments',routes.comments.addComment)
//put comments
app.put('/posts/:postId/comments/commentId',routes.comments.updateComment)
//delete comments
app.delete('/posts/:postId/comments/commentId',routes.comments.removeComment)

app.listen(8002)










app.listen(3000)