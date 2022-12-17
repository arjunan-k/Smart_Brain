const handleProfile = (req, res, db) => {
    const { id } = req.params

    db.select('*').from('users').where({
        id: id
    })
        .then(user => {
            console.log(user)

            if (user.length) {
                res.json(user[0])
            } else {
                res.status(400).json("Error Getting User, Not Found")
            }
        })
}

module.exports = {
    handleProfile: handleProfile
}