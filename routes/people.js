let express=require('express')
let route =express.Router()
let 
{
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson,
} =require('../controllers/people')
try {
    route.get('/',getPeople);
    route.put('/:id',updatePerson);
    route.delete('/:id',deletePerson)
    route.post('/',createPerson)
    route.post('/postman',createPersonPostman)
    
     console.log('good request')
} catch (error) {
    console.error(error)
    console.log('bad request')

    
}finally{
    console.log('do you get request ?')

}
// تشغيل الخادم

module.exports  = route