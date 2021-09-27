const { Users, Logs, user_logs } = require('../../db.js');
const { v4: uuidv4 } = require('uuid');

const exclude = ['createdAt', 'updatedAt']

async function newLog(req, res, next) {
    const { id_user } = req.params;
    const { amount, transaction_type, date, concept } = req.body;
    if (!id_user || !amount || !transaction_type || !date || !concept) {
        return res.status(400).json({ message: 'Bad request' });
    };
    try {
        const id = uuidv4();
        const newLog = { id, concept, amount, transaction_type, date };
        const createLog = await Logs.create(newLog);
        await createLog.addUser(id_user, { through: 'user_logs' });
        const created = await Logs.findOne({
            where: { id: id },
            attributes: {
                exclude
            },
        });
        return res.json(created);
    } catch (error) {
        return next(error);
    };
};

async function updateLog(req, res, next) {
    const { id_log } = req.params;
    const { concept, amount, date } = req.body;
    if (!id_log || !concept || !amount || !date) return res.status(400).json('Missing information for the update');
    try {
        const log = await Logs.findByPk(id_log)
        if (!log) return res.status(400).json('Invalid log ID');
        log.concept = concept;
        log.amount = amount;
        log.date = date;
        log.save();
        return res.status(200).json(log);
    } catch (error) {
        return next(error);
    };
};

const deleteLog = async (req, res, next) => {
    const { id_log } = req.params;
    if (!id_log) return res.status(400).json('Missing a valid Log ID');
    try {
        await Logs.destroy({
            where: {
                id: id_log,
            }
        })
        await user_logs.destroy({
            where: {
                LogId: id_log,
            }
        })
        return res.json('Log deleted');
    } catch (error) {
        next(error);
    };
};

const getTenLogs = async (req, res, next) => {
    const { id_user } = req.params;
    if (!id_user) return res.status(400).json('Valid User ID needed');
    try {
        const userLogs = await user_logs.findAll({
            where: {
                UserId: id_user
            },
            order: [['createdAt', 'DESC']],
            limit: 10,
            attributes: {
                exclude
            }
        })
        if (!userLogs.length) {
            return res.status(201).json('This user has not got any transactions yet.')
        }
        let transactions = [];
        const promises = userLogs.map(async logs => {
            try {
                const raw_logs = await Logs.findAll({
                        where: { id: logs.LogId }
                })
                    let eachLog = {};
                    eachLog.id = raw_logs[0].dataValues.id;
                    eachLog.concept = raw_logs[0].dataValues.concept;
                    eachLog.amount = raw_logs[0].dataValues.amount;
                    eachLog.transaction_type = raw_logs[0].dataValues.transaction_type;
                    eachLog.date = raw_logs[0].dataValues.date;
                    transactions.push(eachLog);
                    return transactions
            } catch (err) {
                console.error(err)
            }
        })
        await Promise.all(promises).then(result => result).catch(err => console.log(err));
        return res.json(transactions);
    } catch (error) {
        next(error)
    };
};

const getAllLogs = async (req, res, next) => {
    const { id_user } = req.params;
    if (!id_user) return res.status(400).json('Valid User ID needed');
    try {
        const userLogs = await user_logs.findAll({
            where: {
                UserId: id_user
            },
            order: [['createdAt', 'DESC']],
            attributes: {
                exclude
            }
        })
        if (!userLogs.length) {
            return res.status(201).json('This user has not got any transactions yet.')
        }
        let transactions = [];
        const promises = userLogs.map(async logs => {
            try {
                const raw_logs = await Logs.findAll({
                        where: { id: logs.LogId }
                })
                    let eachLog = {};
                    eachLog.id = raw_logs[0].dataValues.id;
                    eachLog.concept = raw_logs[0].dataValues.concept;
                    eachLog.amount = raw_logs[0].dataValues.amount;
                    eachLog.transaction_type = raw_logs[0].dataValues.transaction_type;
                    eachLog.date = raw_logs[0].dataValues.date;
                    transactions.push(eachLog);
                    return transactions
            } catch (err) {
                console.error(err)
            }
        })
        await Promise.all(promises).then(result => result).catch(err => console.log(err));
        return res.json(transactions);
    } catch (error) {
        next(error)
    };
};

module.exports = {
    newLog,
    updateLog,
    deleteLog,
    getTenLogs,
    getAllLogs
}