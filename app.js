const express = require('express');
const app = express();
const cors = require('cors');
const route_v1 = require('./routes/data');
const route_v2 = require('./routes/data');
//local variables
const port = process.env.PORT || 3000;
//middlewares
app.use(cors());
app.use('/api/v1', route_v1);
app.use('/api/v2', route_v2);
//listener
app.listen(port, () => console.log(`Listening on port ${port}!`));
