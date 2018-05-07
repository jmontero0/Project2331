const routes = (app) => {
    //Contact route (whole collection or posting to db)
    app.route('/contact')
    .get((req,res) => {
        res.send('GET request was sucessful')
    })
    .post((req,res) => {
        res.send('POST request was sucessful')
    });

    //specific id's in database
    app.route('/contact/:contactId')
    .put((req,res) => {
        res.send('PUT request was successful')
    })
    .delete((req,res) => {
        res.send('DELETE request was sucessful')
    });
}

export default routes;
