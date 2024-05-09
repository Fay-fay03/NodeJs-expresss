const http = require('http')
const server = http.createServer((req,res) =>{
    if(req.url === '/'){
        res.end('This is our website')
    }
    else if (req.url === '/about'){
        res.end('This is our short history')
    }
    else{
        res.end(`
        <h1>OOPS!</h1>
        <p>We cannot find the page youre looking for</p>
        <a href ="/">Back Home</a>
        `)
    }
})
server.listen(5000)

// const http = require('http')

// const server = http.createServer((req,res) =>{

//     if(req.url === '/'){
//         res.end('Welcome to our website')
//     }
//     else if(req.url === '/about'){
//         res.end('This is our short history')
//     }
//     else{res.end(`
//     <h1>OOPS!</h1>
//     <p>We can't seem to find the page youre looking for</p>
//     <a href="/">back home</a>
//     `)}
// })

// server.listen(5000)