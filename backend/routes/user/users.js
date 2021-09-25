const { Router } = require('express');

const { getAllUsers, updateUser, deleteUser, addFavs, quitFav, getFavs, newAdmin, loginUser, updateShippingAddress, getShippingAddress, authenticationByCode, authenticationCode } = require('../../control/user/users.js')

const router = Router();

router.get('/users', getAllUsers);
router.get('/users/favs', getFavs)
router.post('/users/favs', addFavs)
router.delete('/users/favs', quitFav)
router.get('/users/login', loginUser);
router.put('/users/newadmin', newAdmin)
router.put('/users/newadminforpostman', newAdmin), // ruta sin control para crear admin desde postman o desde telegrafo
router.put('/users/:idUser', updateUser); // updatear cuando integremos auth0
router.delete('/users/:idUser', deleteUser); // updatear cuando integremos auth0
router.put('/users/updateShippingAddress/:idUser', updateShippingAddress); 
router.get('/users/getShippingAddress/:idUser', getShippingAddress);
router.put('/users/authenticationCode/:idUser', authenticationCode);
router.get('/users/authenticationByCode/:idUser', authenticationByCode);

module.exports = router;