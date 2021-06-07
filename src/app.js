const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");
const port = process.env.PORT || 8000; // if(not process.env.PORT then port 8000 will be used)

const static_path = path.join(__dirname,"../public"); // __ dirname gives path of present file i.e till /src
// ../public  (here .. is used to go back like cd.. and /public is joined with __ dirname as required)

const template_path = path.join(__dirname,"../templates/views");
const partial_path = path.join(__dirname,"../templates/partials");

app.set('view engine', 'hbs');
app.set('views',template_path);
hbs.registerPartials(partial_path);

app.use(express.static(static_path));  // routing is done here

app.get("/", (req,res) =>{
    res.render('index'); // app.end() would be used in node.js
} )

app.get("/about", (req,res) =>{
    res.render('about'); 
} )

app.get("/weather", (req,res) =>{
    res.render('weather');
} )

app.get("*", (req,res) =>{
    res.render('404error' ,{
        errorMsg:'Oops! page not found'
    });
} )


app.listen(port, () =>{
    console.log(`listening to port : ${port}`);
})