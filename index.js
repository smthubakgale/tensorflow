const express = require( 'express' );
const app = express();
const PORT = 4000;

app.use(express.static('views'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

module.exports = app 
