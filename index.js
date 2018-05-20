import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/Routes/routes';


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


//server is listening on this port
app.listen(PORT, () => {
    console.log(`the server is up and running on localhost:${PORT}`)

});

(function(){
    `use strict`;
    var app = angular.module(`contactsApp`, []);

    app.controller(`contactsController`, function($scope, $http) {

        $http.get(`http://localhost:3000/contact`)
        .then(function(response) {
            $scope.contacts = response.model;
        });

        $scope.saveContact = function(contact) {
            $http.post('http://localhost:3000/contact', contact)
            .then(function(response) {
                $scope.contacts.push(response.model);
            });
            
        };
    });
});
