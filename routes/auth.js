let express =require('express')
let route =express.Router()



route.post('/', (req, res) => {
    try {
        const { name } = req.body;
        if (name) {
            res.status(200).send(`http://localhost:${name}`);
            console.log(`You get response on port: ${PORT}, ${name}`);
        } else {
            res.status(400).send('Bad Request: Test parameter is missing');
            console.log('Test parameter is missing in the request body');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error: Try to request again');
    } finally {
        console.log(`Server Worker on port: ${PORT}`);
    }
});
module.exports  = route
