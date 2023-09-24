const http = require('http')	
const fs = require('fs')	

const port=8000	



const server = http.createServer((req,res)=>{



		 let newdate = new Date()
			let datetime = +new Date();
		 fs.writeFileSync(`Datetime/${datetime}`,newdate.toString())

		let data = fs.readFileSync(`Datetime/${datetime}`)

		 res.writeHead(200,{'Content-Type':'text/html'})
		 res.end(data)

// res.end(`<h1>hi</h1>`)

}) 
 

server.listen(port,()=>console.log(port))
