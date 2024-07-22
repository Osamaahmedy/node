let authorize =(req,res,next) =>{
    let {user}=req.query
    if(user==='john'){

        req.user={name:"john",id:555}
        next()
    }    
    else{
        res.status(401).send('unauthorized')
        
    }
    
}

module.exports=authorize