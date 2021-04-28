const books = [
  // {
  //   id: 1,
  //   title: 'Some Book',
  //   author: 'Adam'
  // }
];
let id = 2;

module.exports = {
  getBooks: (req, res) => {
    res.status(200).send(books);
  },
  addBook: (req, res) => {
    // if statement for requiring proper info? req.body.title??
    const {title, author} = req.body;
    const newBook = {
      title,
      author,
      id,
    }
    id++;
    books.push(newBook);
    res.status(200).send(books);

  },

  deleteBook: (req, res) => {
    const {id} = req.params;
    // books = books.filter((e) => e.id !== +id)
    for (let i = 0;i < books.length; i++) {
      +id === books[i].id ? books.splice(i, 1): null;
    }
    res.status(200).send(books);
  },

  // instead of finding the actual index, +id - 1?
  editBook: (req, res) => {
    const {id} = req.params;
    const {title, author} = req.body;
    const index = +id - 1;
    if (books[index]) {
    for (let i = 0;i < books.length; i++) {
      +id === books[i].id ? books.splice(i, 1): null;
    }
    books[+id - 1] = {
      title: title || books[index].title,
      author: author || books[index].author,
      id: +id,
    }
    // books.push(newBook);
    res.status(200).send(books);  
    } else {
      res.status(500).send('Nothing exists at that ID')
    }

  }
}