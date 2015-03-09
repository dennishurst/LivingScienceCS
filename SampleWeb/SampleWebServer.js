var express = require('express'); 
var url = require('url'); 
var app = express(); 
app.listen(8080); 

app.get('/testdir/*', function (req, res) {
    console.log('howdy');
    res.sendFile('image1.jpg',  
        {maxAge: 1,    // 24* 60* 60* 1000, 
        root: './images/'},
        function(err){
            if (err){ 
                console.log(" Error"); 
            }
            else {
                console.log(" Success"); 
            } 
    }); 
});


app.get('/user/:userid', function (req, res) {
    console.log(" URL:\t " + req.originalUrl);
    console.log(" Protocol: " + req.protocol);
    console.log(" IP:\t " + req.ip);
    console.log(" Path:\t " + req.path);
    console.log(" Host:\t " + req.host);
    console.log(" Method:\t " + req.method);
    console.log(" Query:\t " + JSON.stringify( req.query));
    console.log(" Fresh:\t " + req.fresh);
    console.log(" Stale:\t " + req.stale);
    console.log(" Secure:\t " + req.secure);
    console.log(" UTF8:\t " + req.acceptsCharset(' utf8'));
    console.log(" Connection: " + req.get(' connection'));
    console.log(" Headers: " + JSON.stringify(req.headers, null, 2));

    var sT = req.originalUrl.substring(0, 5);
    sT = req.param("userid");
    res.send(sT);
});

app.get('/images/*', function (req, res) {
    var sFile = req.originalUrl;
    sFile = sFile.substring(8, sFile.length);

    res.sendFile(sFile,
        {
            maxAge: 1,    // 24* 60* 60* 1000, 
            root: './images/'
        },
        function (err) {
            if (err) {
                console.log(" Error");
                res.status(err.status).end();
            }
            else {
                console.log(" Success");
            }
        });
});

app.get('/Homework/*', function (req, res) {
    var sFile = req.originalUrl;
    sFile = sFile.substring(10, sFile.length);

	if (sFile.length === 0) {
		sFile = "index.html";
	}

    res.sendFile(sFile,
        {
            maxAge: 1,    // 24* 60* 60* 1000, 
            root: './homework/'
        },
        function (err) {
            if (err) {
                console.log(" Error");
                res.status(err.status).end();
            }
            else {
                console.log(" Success");
            }
        });
});

//http://127.0.0.1:8080/lines/123/role/ShowMeSomething
app.get('/lines/:action/role/:myrole', function (req, res) {
    var myAction = req.params.action
      , myRole = req.params.myrole;

    var sRes = "Action:" + myAction + "<br />MyRole:" + myRole;
    res.send(sRes);
});


console.log("Hello class");





