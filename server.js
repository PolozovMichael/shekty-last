const express = require('express');
const app = express();
const PORT = process.env.PORT || 3434;

app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});
app.get('/about', (req, res) => {
    res.render('about');
});
app.get('/services', (req, res) => {
    res.render('services');
});
app.get('/projects', (req, res) => {
    res.render('projects');
});

app.listen(PORT, () => {
    console.log(`Listenning on http://localhost:${PORT}`);
})