let express=require('express')
let app =express()



app.listen(5001,()=>{
   console.log('server is listen on port: 5001...')
})


// app.get('/',(req,res)=>{
//    console.log('user hit the request')
// res.status(200).send('home page')
// })
// app.get('/about',(req,res)=>{
//    console.log('user hit the about page')
// res.status(200).send('about page')
// })
// app.all('*',(req,res)=>{
//    res.status(404).send('<h1>resource not found</h1>')
// })
// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen

// let http= require('http')
// let {readFileSync}=require('fs')
// // get all file 
//  let HomePage=readFileSync('./navbar-app/index.html')
//  let HomeStyle=readFileSync('./navbar-app/styles.css')
//  let HomeImage=readFileSync('./navbar-app/logo.svg')
//  let HomeLogic=readFileSync('./navbar-app/browser-app.js')
// let server =http.createServer((req,res)=>{
//    // console.log(req.method)
//    let url=req.url
//    if(url === '/'){
//     console.log(req.url)
//    res.writeHead(200,{'content-type':'text/html'})
// console.log('user hit the server')
// res.write(HomePage)
// res.end()
//    }
// else if(url ==='/about'){
//     console.log(req.url)
//     res.writeHead(200,{'content-type':'text/html'})
//  console.log('user hit the server')
//  res.write('')
//  res.end()
// }

// //styles
// else if(url ==='/styles.css'){
//    console.log(req.url)
//    res.writeHead(200,{'content-type':'text/css'})
// console.log('user hit the server')
// res.write(HomeStyle)
// res.end()
// }


// //logo
// else if(url ==='/logo.svg'){
//    console.log(req.url)
//    res.writeHead(200,{'content-type':'image/svg+xml'})
// console.log('user hit the server')
// res.write(HomeImage)
// res.end()
// }


// //logic
// else if(url ==='/browser-app.js'){
//    console.log(req.url)
//    res.writeHead(200,{'content-type':'text/javascript'})
// console.log('user hit the server')
// res.write(HomeLogic)
// res.end()
// }

// else{
//     console.log(req.url)
//     res.writeHead(404,{'content-type':'text/html'})
//  console.log('user hit the server')
//  res.write(HomePage)
//  res.end()
// }
// })

// server.listen(5009)