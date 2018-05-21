import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/Routes/routes';
import { ContactSchema } from './src/Models/model';


const app = express();
const PORT = 3000;

//mongo connection
mongoose.connect('mongodb://localhost/project2');

//bodyparser
app.use(bodyParser.urlencoded({ extended: true }));//parse incoming requests with urlencoded payloads
app.use(bodyParser.json());//parse incoming requests with json payloads

routes(app);

var  path = require("path");

//prints stuff to homepage
app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname+`/database.html`));
});

var router = express.Router();

router.get(`/`, function(req, res, next){
    res.sender(`index`);
});

//server is listening on this port
app.listen(PORT, () => {
    console.log(`the server is up and running on localhost:${PORT}`)

});
