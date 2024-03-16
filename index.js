// console.log("im index")
// console.log("0index")

import express from "express";
import path from "path"
import mongoose from "mongoose";
import { userd } from "./Db.model.js";
import { formData } from "./Form.model.js";



const app = express();
const port = 3000;

const userDatas = [""]

mongoose.connect("process.env.MONGODB_URL", {
    dbName: "backend",
}).then(() => console.log("Database Connnected")).catch((e) => console.log(e))








// serving static file
// read about this in README.MD 1

// MIDDLEWARES
app.use(express.static(path.join(path.resolve(), "public")))
app.use(express.urlencoded({ extended: true }))






app.get("/", (req, res) => {
    res.send("<h1>Im home page</h1>")
    // console.log(path.resolve())

    // THIS IS BECAUSE HAME "HTML" FILE USE KARNI HAI 

    const pathLocation = path.resolve()   // ye path dega
    // console.log(pathLocation)
    // console.log(path.join(pathLocation, "index"))

    // res.sendFile("index_1.html")
    // res.render("index_1.html")
})
// console.log(path.resolve())
// app.get("/about", (req, res)=>{
//     const path_loca = path.resolve();
// console.log(path.resolve())
// console.log(path.join(path_loca, "shivam"))
//     res.sendFile(path.join(path_loca, "./index.html"))
//     res.send("welcome to about")
// })

app.get("/htmlFile", (req, res) => {
    res.send("html")

})

app.get("/json", (req, res) => {
    res.json({
        name: "shivam",
        class: 1,
    })
})

// adding data to database 
// app.get("/addData", (req, res)=>{
//     userd.create({name: "shivam", email:"shivam@gmail.com",number: false}).then(()=>{
//         res.send("Data Added")
//     })
// }) 

// best way to use ASYNC AWAIT  

app.get("/addData", async (req, res) => {
    await userd.create({ name: "new", email: "new@gmail.com", number: false })   //in AWAIT - program will freeze here until it get REJECTED OR FULFILLED 
    res.send("Data Added")         //agar fullfill hua (promise settle hone ke bad) then ye line execute hogi           // AWAIT me program freeze hojayega or tabhi aage badhega jb reject ya fullfill hogi request 

})


// app.get("/delD" ,(req,res)=>{
//     userd.deleteMany({name: "aayush"}).then(()=>{
//         res.send("data deleted")
//     })
// })

app.get("/delD", async (req, res) => {
    await userd.deleteMany({ name: "shivam" })
    res.send("data deleted")

})

//HTML FILE ME DATA BACKEND SE BHEJNA HAI TO TEMPLATES HOTE HAI BAHUT SARE
// HUM "EJS" KA USE KARENGE (embadded javascript)

//we have to set engine 
// set same as it is 
app.set("view engine", "ejs")

app.get("/ejs", (req, res) => {
    // extension is not required . we can write "index" only it will work 
    res.render("index.ejs", { name: "aayush kesharwani", age: 21 })
})

app.get("/datas", (req, res) => {
    res.json({
        userDatas,
    })
})

app.get("/datasent", (req, res) => {
    res.render("datasent")

})

// collecting data from a form

// app.post("/ejs", async(req, res) => {
//     console.log(req.body)
//     // to get the data we have to use MIDDLEWARE urlencoded
//     // console.log(req.body.username)
//     // userDatas.push({ username: req.body.username, email: req.body.email })
//   await  formData.create({name: req.body.username, email : req.body.email})
//     res.redirect("/datasent")
// })



// FROM destructuring way to get CLEAN CODE


app.post("/ejs", async (req, res) => {

    const { username, email } = req.body          // this is called DESTRUCTURING 
    // await formData.create({name: username, email: email})

    // if KEY: VALUE pair is same then we can directly write 

    await formData.create({ name: username, email })  // we dont have to write email: email 

    res.redirect("/datasent")
})



app.listen(port, () => {
    console.log(`server is listening at port ${port}`)
    // console.log(path.resolve())
})