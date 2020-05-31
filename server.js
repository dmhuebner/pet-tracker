// Install express server
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors({origin: '*'}));

// Serve only the static files from the dist directory
app.use(express.static(`${__dirname}/dist/pet-tracker`));

app.get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/dist/pet-tracker/index.html`));
});

// Start the app by listening on the default heroku port
app.listen(process.env.PORT || 8080);
