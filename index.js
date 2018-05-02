import express from 'express';

const app = express();
const PORT = 3000;
//prints to homepage
app.get ('/', (req, res) => {
    res.send(`Node and express server running on port: ${PORT}`)
});
//server listens to this port
app.listen(PORT. () => {
    console.log(`the server is up and running on localhost: ${PORT}`)
});

