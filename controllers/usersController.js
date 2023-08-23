const users = require('../data/users.json');

module.exports = {
    index: (req, res) => {
        return res.render('users', {
            users,
        });
    },
    profile: (req, res) => {
        const id = req.params.id
        const user = users.find(user => user.id === +id)
        return res.render('profile', {
            user,
        });
    },

};
