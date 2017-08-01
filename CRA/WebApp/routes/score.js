var express = require('express');
var router = express.Router();
var request = require('request');

router.post('/', function(req, res) {
    var params = new Array();

    for (var key in req.body) {
        params.push(parseInt(req.body[key]));
    }
    params.push(1);
    params.push(0);
    params.push(0);
    params.push(1);
    console.log(params);


    request({
        url: "http://ADSHOST:ADSPORT/score",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        json: true,
        body: {
            input_array: [params]
        }
    }, function(error, response, body) {
        res.jsonp({
            "score": body
        });
    });
});

module.exports = router;