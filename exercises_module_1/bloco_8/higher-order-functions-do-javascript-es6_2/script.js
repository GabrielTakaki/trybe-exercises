const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];




// EX1:
// Adicione o código do exercício aqui:
function authorBornIn1947() {
  // escreva aqui o seu código
  return books.find((book) => book.author.birthYear === 1947).author.name;
}

authorBornIn1947();
// assert.strictEqual(authorBornIn1947(), 'Stephen King');





// EX2:
function smallerName() {
  let nameBook;
  // escreva aqui o seu código
  books.forEach((book) => {
    if (!nameBook || book.name.length < nameBook.length) {
      nameBook = book.name;
    }
  })

  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

smallerName();
// assert.strictEqual(smallerName(), 'Duna');





// EX3:
const expectedResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

function getNamedBook() {
  // escreva seu código aqui
  return books.find((book) => book.name.length === 26);
}
// assert.deepStrictEqual(getNamedBook(), expectedResult);




// EX4:
const expectedResult = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: { name: 'Stephen King', birthYear: 1947 },
    releaseYear: 1986,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
];

function booksOrderedByReleaseYearDesc() {
  // escreva aqui seu código
  return books.sort((bookA, bookB) => bookB.releaseYear - bookA.releaseYear);
}
// assert.deepStrictEqual(booksOrderedByReleaseYearDesc(), expectedResult);





// EX5:
const expectedResult = false;

function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
  return books.every((year) => year.author.birthYear > 1900 && book.author.birthYear <= 2000);
}

everyoneWasBornOnSecXX()

// assert.strictEqual(everyoneWasBornOnSecXX(), expectedResult);





// EX6:
const expectedResult = true;

function someBookWasReleaseOnThe80s() {
  // escreva seu código aqui
  return books.some((book) => book.releaseYear >= 1980 && book.releaseYear <= 1989);
}

assert.strictEqual(someBookWasReleaseOnThe80s(), expectedResult);





// EX7:
const expectedResult = false;

function authorUnique() {
  // escreva seu código aqui
  return books.every((book) => {
    !books.some((bookSome) => {
      (book.author.birthYear === bookSome.author.birthYear) && (book.author.name !== bookSome.author.name)
    })
  });
}

assert.strictEqual(authorUnique(), expectedResult);