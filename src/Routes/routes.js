const routes = (app) => {
    //Contact route to the whole collection or posting to db.
    app.route(`/contact`)
    .get((req,res) =>{
        res.send(`GET request was succesful`)
    })
    .post((req,res) =>{
        res.send(`POST request was succesful`)
    });
    
    //For specific IDs that are in the database
    app.route(`/contact/:contactID`)
    .put((req,res) =>{
        res.send(`PUT request was succesful`)
    })
    .delete((req,res) =>{
        res.send(`DELETE request was succesful`)
    });
}

export default routes;
