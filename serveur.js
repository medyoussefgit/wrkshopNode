const http=require('http')
const fs=require('fs')
const serveur=http.createServer(
    (req,res)=>{
        console.log(req)
        res.setHeader('Content-Type','text:html')
        if (    req.url==='/') {
            
            res.write("<h1>hello</h1>")
            res.end()
        }
        else if (req.url==='/home') {
          fs.readFile('./home.html',(err,data)=>{
         if (err) {
             console.log(err)
             
         }
         else {
          res.write(data)
          res.end()

         }

          })
            
        } 
    else {
res.statusCode=404
res.end('not faound')

    }
        
    }
)

serveur.listen(5000,(err)=>err ?console.log(err):console.log('serveur mregl') )