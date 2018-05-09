import { addNewContact } from "../controllers/controller";

const routes = (app) => {
    //Contact route (whole collection or posting to db)
    app.route('/contact')
    .get((req,res,next) => {
        //middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request used ${req.method}`)
        next();
    }, (req,res) =>{
        res.send('GET request sucessful')
    })
    .post(addNewContact);

    //specific id's in database
    app.route('/contact/:contactId')
    .put((req,res) => {
        res.send('PUT request was successfull')
    })
    .delete((req,res) => {
        res.send('DELETE request was sucessfull')
    });
}

export default routes;
