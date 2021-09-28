const { Users } = require('../../db.js');
const { v4: uuidv4 } = require('uuid');

const exclude = ['createdAt', 'updatedAt']

async function newUser(req, res, next) {
    const { user_name, name, last_name, email, password } = req.body;
    if (!user_name || !name || !last_name || !email || !password) {
        return res.status(400).json({ message: 'Bad request' });
    };
    try {
        const id = uuidv4();
        const newUser = { id, user_name, name, last_name, email, password };
        await Users.create(newUser);
        const created = await Users.findOne({
            where: { id: id },
            attributes: {
                exclude
            }
        });
        return res.json(created);
    } catch (error) {
        return next(error);
    };
};

async function getUser(req, res, next) {
    const { id_user } = req.params;
    const { password } = req.body;
    if (!id_user || !password) {
        return res.status(400).json({ message: 'Bad request' });
    };
    try {
        const findUser = await Users.findByPk(id_user,
            {
                attributes: {
                    exclude
                }
            });
        if (findUser.password === password) return res.status(200).json({'validation': 'Correct'});
        if (findUser.password !== password) return res.status(200).json({'validation': 'Incorrect'});
    } catch (error) {
        return next(error);
    };
};

async function updateUser(req, res, next) {
    const { id_user } = req.params;
    const { name, last_name, email } = req.body;
    if (!name || !last_name || !email || !id_user) return res.status(400).json('Missing information for the update');
    try {
        const user = await Users.findByPk(id_user)
        if (!user) return res.status(400).json('Invalid User ID');
        user.name = name;
        user.last_name = last_name;
        user.email = email;
        user.save();
        return res.status(200).json(user);
    } catch (error) {
        return next(error);
    };
};

async function updatePassword(req, res, next) {
    const { id_user } = req.params;
    const { password } = req.body;
    if (!id_user || !password) return res.status(400).json('Missing information for the update');
    try {
        const user = await Users.findByPk(id_user)
        if (!user) return res.status(400).json('Invalid User ID');
        user.password = password;
        user.save();
        return res.status(200).json(user);
    } catch (error) {
        return next(error);
    };
};

module.exports = {
    newUser,
    getUser,
    updateUser,
    updatePassword
};