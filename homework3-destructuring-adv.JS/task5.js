//Задание 5
//Дан массив книг. Вам нужно добавить в него еще одну книгу,
// не изменяя существующий массив (в результате операции должен быть создан новый массив).
const books = [{
  name: 'Harry Potter',
  author: 'J.K. Rowling'
}, {
  name: 'Lord of the rings',
  author: 'J.R.R. Tolkien'
}, {
  name: 'The witcher',
  author: 'Andrzej Sapkowski'
}];
const bookToAdd = {
  name: 'Game of thrones',
  author: 'George R. R. Martin'
}
const booksNew=[...books,bookToAdd];
console.log(booksNew);
