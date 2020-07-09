const router = require('express').Router();

router.get('/', function (request, response) {
    response.status(418).send();
});

router.post('/create', function (req, res) {
    const body = req.body;
    console.log(body);
    res.status(201).send(body.message);
});

router.put('/update', (req, res) => {
    const params = req.query;
    console.log(params);
    res.status(202).send(params);
})

router.delete('/remove/:id', function (req, res) {
    const params = req.params;
    console.log(params);
    res.status(200).send(params.id);
});

router.get('/error', function (req, res, next) {
    // throw new Error('I am a contrived error!');
    return next(new Error('I am a contrived error!'));
    console.log('?');
});

module.exports = router;