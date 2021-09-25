const {Router} = require('express');

const user = require('./user/users');

const router = Router();

router.get('/', (req,res,next) => {
    return res.send('Response with a resource')
})
router.use('/', user); // check emma

module.exports = router;
