const books = [
  {
    id: 1651062280931,
    name: "book1",
  },
  {
    id: 1651062280932,
    name: "book2",
  },
];
const message404 = ` Berilgan {req.params.id} li kitob topilmadi`;

// 200->ok
// 201->created
// 400->bad request
// 404->not found

// 500->internal server error

//! READ all books
// res.send(books);

//! create
// so'rovni validatsiya qilish (validatsiyadan o'tmasa 400 qaytarish)
// const book = { id: Date.now(), ...req.body };
// books.push(book);
// res.status(201).send(books);

//! read by id
// const book = books.find((b) => b.id === +"1651062280931");
// if (!book) res.status(404).send(message404);
// res.status(200).send(book);

//! update
// const book = books.find((b) => b.name === req.params.name);
// if (!book) res.status(404).send(message404);
// so'rovni validatsiya qilish (validatsiyadan o'tmasa 400 qaytarish)
// book.name = req.body.name;
// res.send(book);

//! delete
// const book = books.find((b) => b.name === req.params.name);
// if (!book) res.status(404).send(message404);
// const bookIndex = books.indexOf(book);
// books.splice(bookIndex, 1);
// res.send(book);

//^ validation
// const bookSchema = Joi.object({
//   name: Joi.string().min(3).max(30).required(),
// });
// const { error } = bookSchema.validate({ name: req.body.name });
// if (error) res.statue(400).send(JSON.stringify(error.details[0].message));
