let express =require('express')
let app = express()
let {people}=require('./data')
let {products}=require('./data')
app.get('/',(req,res)=>{
    //res.json(products)
     res.status(200).send('<h1>home page </h1><a href = "/products">products</a>')
    console.log("on people")
    
})
app.get('/products',(req,res)=>{
    let  newProducts=products.map((product)=>{
        let {id,name,image}=product
        return {id,name,image}
    })
    res.json(newProducts)
    console.log('on products')
   
})
app.listen(5000,()=>{
    console.log('server is listen on port:5000....')
})