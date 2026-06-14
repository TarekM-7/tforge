//Main JS file for project {{ projectName }}

const express = require('express')
const app = express()
const path = require('path')
const port = 3000;
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate')
const methodOverride = require('method-override');

main()
.then(() => {
    console.log('Mongoose Connection Open')
})
.catch((err) => {
    console.log('Mongo Connection Error')
    console.log(err)
});

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/{{ projectName }}');
}

app.engine('ejs', ejsMate); 

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
    res.render('index')
})

app.use((req, res) => {
    res.status(404).send('Page not found')
})

app.listen(port, () => {
    console.log(`App is listening on Port: ${port}`)
})