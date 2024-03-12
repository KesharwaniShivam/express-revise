// console.log("im index")
// console.log("0index")

import express from "express";
import path from "path"

const app = express();
const port = 3000;

const userDatas = [""]





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
//     // console.log(path.resolve())
//     // console.log(path.join(path_loca, "shivam"))
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

app.post("/ejs", (req, res) => {
    console.log(req.body)
    // to get the data we have to use MIDDLEWARE urlencoded
    console.log(req.body.username)
    userDatas.push({ username: req.body.username, email: req.body.email })

    res.redirect("/datasent")
})





app.listen(port, () => {
    console.log(`server is listening at port ${port}`)
    // console.log(path.resolve())
})