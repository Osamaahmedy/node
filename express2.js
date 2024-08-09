let express =require('express')
let app = express()
let logger=require('./logger')
let authorize=require('./middleware')
let morgan =require('morgan')
let  { people } = require('./data');

// req => middleware => res

app.use(morgan('tiny'))
app.use([logger,authorize])
app.get('/',(req,res)=>{
    try {
    console.log(req.user)
    console.log('good')
    res.status(200).json(people)
   } catch (error) {
    console.error(error)
  
    res.status(500).send('Server Error');
   }finally{
    console.log(req.user)
   }
    
})
app.get('/about',(req,res)=>{
    console.log(req.user)
res.status(202).send('<h1>About</h1>')
})
app.get('/api/products',(req,res)=>{
    console.log(req.user)
    res.status(202).send('<h1>products</h1>')
    })
app.get('/api/items',(req,res)=>{
    console.log(req.user)
    res.status(202).send('<h1>items</h1>')
    })
app.listen(2000,()=>{

    console.log('user hit on  port: 2000')
})