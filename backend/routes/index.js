const {Router} = require('express');

const user = require('./user/users');
const logs = require('./logs/logs');

const router = Router();

router.use('/', user);
router.use('/', logs);

module.exports = router;
