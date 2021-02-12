const express = require('express');
const path = require('path');
const app = express();

const PORT =3000;

app.set('views', path.join(__dirname, 'views')) 
app.use('/css', express.static(path.join(__dirname, './css')))
app.use('/js', express.static(path.join(__dirname, './js')))
app.use('/img', express.static(path.join(__dirname, './img')))
app.set('view engine', 'ejs')
app.get('/',(req,res)=>{
    res.render("index");
})


app.listen(PORT,()=>{
    console.log(`Server Started listening on http://localhost:${PORT}`);
});
