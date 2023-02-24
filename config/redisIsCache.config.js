const isCached = (req, res, next) => {

    const { id } = req.params;

    client.get(id, (err, data) => {
        if (err) {
            console.log(err);
        }
        if (data) {
            const reponse = JSON.parse(data);
            return res.status(200).json(reponse);
        }
        next();
    });
}

module.exports = isCached;
