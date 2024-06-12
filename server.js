const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

let correctPasswordCount = 0;

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
    const { passwordCorrect } = req.body;
    if (passwordCorrect) {
        correctPasswordCount += 1;
    }
    res.sendStatus(200);
});

app.get('/count', (req, res) => {
    res.json({ count: correctPasswordCount });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
