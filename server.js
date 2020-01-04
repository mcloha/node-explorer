const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000;
const { readDir } = require('./fileSystem');

app.use(express.static('client/build'));
app.use(cors('*'));

app.get('/dir', (req, res, next) => {
    const { path } = req.query;
    const stats = readDir(path);

    res.send(stats);
})

app.listen(port, () => console.log(`the app is running on port: ${port}.`));