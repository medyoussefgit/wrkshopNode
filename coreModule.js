// console.log(global)
// console.log(__filename)
// console.log(__dirname)
const path=require('path')
// console.log(path.parse(__filename))
// console.log(path.extname(__filename))
const fs=require('fs')
// //syncrhone
// //st1

// console.log("...start")
// //st2
// let data=fs.readFileSync("file.txt")
// console.log(data.toString())
// //st3
// console.log("finish")

//asyncrhone
//st1

// console.log("...start")
// //st2
// fs.readFile("file.txt",function callback(err,data) {
//     if (err) {
//      return  console.error(err)
//     }
//     console.log(data.toString())
// })

// //st3
// console.log("finish")


const os=require("os")
// console.log(os.cpus())   bch ta"ref edenya
// console.log(os.arch())
console.log(os.totalmem())
console.log(os.freemem())