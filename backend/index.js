const ex = require("express");
const bopas = require("body-parser");
const files = require("express-fileupload");
const productRoute = require("./routes/product.js")

const app = ex();



app
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, HEAD, POST, PUT, PATCH, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");
    next();
})
app.use(bopas.json())
app.use(bopas.urlencoded({extended:true}))
app.use(files())
app.use(ex.static("files"))
app.use("/product",productRoute)
app.listen(3000)