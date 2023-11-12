const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.get('/auth', (req, res) => {
    res.sendFile('src/pages/auth/auth.html', { root: path.join(__dirname, 'dist') });
});

app.get('/registration', (req, res) => {
    res.sendFile('src/pages/registration/registration.html', { root: path.join(__dirname, 'dist') });
});

app.get('/edit', (req, res) => {
    res.sendFile('src/pages/edit/edit.html', { root: path.join(__dirname, 'dist') });
});

app.get('/chat', (req, res) => {
    res.sendFile('src/pages/chat/chat.html', { root: path.join(__dirname, 'dist') });
});

app.get('/notFound', (req, res) => {
    res.sendFile('src/pages/404Page/404Page.html', { root: path.join(__dirname, 'dist') });
});

app.get('/serverError', (req, res) => {
    res.sendFile('src/pages/500Page/500Page.html', { root: path.join(__dirname, 'dist') });
});


app.listen(port, () => {
    console.log(`Server is Listening on port ${port}`);
});
