const express = require('express');
const app = express();
const port = 3006;
const bc = require('./controllers/books_controller');

app.use(express.json());
app.use(express.static(__dirname + '/../build'))

app.get('/api/books', bc.getBooks);
app.post('/api/books', bc.addBook);
app.delete('/api/books/:id', bc.deleteBook);
app.put('/api/books/:id', bc.editBook);

app.listen(port, () => console.log('Server now listening on port: ' + port));

