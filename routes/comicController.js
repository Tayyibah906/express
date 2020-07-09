const router = require('express').Router();
const Comic = require('../dao/comic');
const { response } = require('express');

router.post('/create', function (req, response, next) {
    const body = req.body;
    const comic = new comic(body);
    comic.save(function (error, result) {
        if (error) {
            return next(error);
        }
        response.status(201).send(result);
    });
});

router.get('/getAll', function (req, res, next) {
    comic.find(function (err, comics) {
        if (err) return next(err);
        res.send(comics);
    });
})

router.get('/get', function (req, res, next) {
    Comic.findById(req.query.id, function (err, comics) {
        if (err) return next(err);
        res.send(comics);
    });
})

router.put('/update/:item', function(req, res, next){
    Comic.findByIdAndUpdate(req.params.item, req.body, function(err, comic) {
        if (err) return next(err);
        res.send(comic);
    })
})


router.delete('/remove/:id', function (req, res, next) {
    Comic.findByIdAndRemove(req.params.id, function (err, comic) {
        if (err) return next(err);
        res.status(204).send(comic);
    });
})


router.use(function (err, req, res, next) {
    res.status(500).send(err);
});

module.exports = router;