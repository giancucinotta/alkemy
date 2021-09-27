const { Router } = require('express');

const { newLog, updateLog, deleteLog, getTenLogs, getAllLogs } = require('../../control/interactions/interactions.js');

const router = Router();

router.post('/logs/new/:id_user', newLog);
router.get('/logs/:id_user', getTenLogs);
router.get('/logs/all/:id_user', getAllLogs);
router.put('/log/update/:id_log', updateLog);
router.delete('/logs/:id_log', deleteLog);

module.exports = router;