/**
 * Created by Raka on 2/28/17.
 */
var express = require('express');
var app = express();
var html_dir = './html/';
app.get('/page', function (request, response){
    response.sendFile('hellopage.html', {root: html_dir})
})
app.get('/', function (request, response) {
    response.send('Hello ExpressJS')
})

app.post('/', function (request, response){
    response.send('POST Method')
})

app.put('/chat', function (request, response){
    response.send('PUT Request chat')
})

app.delete('/chat', function (request, response){
    response.send('DELETE Request chat')
})

app.get('/:id', function (request, response){
    response.send('Chat with '+request.params.id)
})
app.listen(3000, function () {
    console.log('With Port 3000')
})