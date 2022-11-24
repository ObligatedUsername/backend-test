const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(cors());

const { db } = require('./firebase');
const { collection, getDocs } = require('firebase/firestore');

const port = process.env.PORT || 4000;

app.post('/welcome', (req, res) => {
    res.send({
        message: `Hello, ${req.body.name}. Hope you enjoy your stay.`,
    });
});

app.post('/fetch', async (req, res) => {
    let data = [];
    const qs = await getDocs(collection(db, "stuff"));
    qs.forEach(doc => {
        data.push({ id: doc.id, data: doc.data() });
    });
    res.send({
        message: `Here is your data @ ${ new Date() }`,
        data: data
    });
});

app.listen(port);
console.log(`Listening on ${port}`);
