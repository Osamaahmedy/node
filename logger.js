let user=require('./middleware')
let logger =(req,res,next)=>{
    
    let method =req.method
    let url = req.url
    let time= new Date().getFullYear()
    let data= {method,url,time}
    console.log(data,user)
    
    next()
}
module.exports=logger