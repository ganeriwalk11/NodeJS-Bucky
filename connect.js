var connect = require('connect');
var http = require('http');
var app = connect();
function profile(request,response)
{console.log('Profile requested');}
function forum(request,response)
{console.log('Forum requested');}

app.use('/profile',profile);
app.use('/forum',forum);

http.createServer(app).listen(8888)
{
	console.log("sever is live");
}