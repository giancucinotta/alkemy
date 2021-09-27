const { Router } = require('express');

const { newUser, getUser, updatePassword, updateUser } = require('../../control/user/users.js');

const router = Router();

router.post('/users/new', newUser);
router.get('/users/:id_user', getUser);
router.put('/user/password/:id_user', updatePassword);
router.put('/user/update/:id_user', updateUser);

module.exports = router;