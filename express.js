let express=require('express')

let app =express()

let path =require('path')

app.use(express.static('./public'))

// app.get('/',(req,res)=>{
// res.sendFile(path.resolve('./navbar-app/index.html'))

// console.log( 'user hit the server ')
// })

app.all('*',(req,res)=>{
res.status(404).send('<h2>resource not found</h2>')
})

app.listen(5008,()=>{
    console.log('server is listen on port:5008....')
})

// // const express = require('express');
// // const app = express();

// // app.get('/', (req, res) => {
// //     // Render HTML on the server
// //     const html = `
// //         <!DOCTYPE html>
// //         <html>
// //         <head>
// //             <title>SSR Example</title>
// //         </head>
// //         <body>
// //             <h1>Welcome to the SSR Example</h1>
// //             <p>The weather is sunny and 78 degrees.</p>
// //         </body>
// //         </html>
// //     `;
// //     res.send(html);
// // });

// // app.listen(5000, () => {
// //     console.log('SSR server is listening on port 5000');
// // });


// const express = require('express');
// const app = express();

// app.get('/api/weather', (req, res) => {
//     // Simulate fetching weather data
//     const weatherData = { temperature: 78, condition: 'Sunny' };
//     res.json(weatherData);
// });

// app.listen(5000, () => {
//     console.log('API server is listening on port 5000');
// });

// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     // Render HTML on the server
//     const html = `
//         <!DOCTYPE html>
//         <html>
//         <head>
//             <title>SSR Example</title>
//         </head>
//         <body>
//             <h1>Welcome to the SSR Example</h1>
//             <p>The weather is sunny and 78 degrees.</p>
//         </body>
//         </html>
//     `;
//     res.send(html);
// });

// app.listen(5000, () => {
//     console.log('SSR server is listening on port 5000');
// });