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

//1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
function formatedBookNames(books) {
    const result = books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);
    return result;
}

// 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author ,
// com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. 
// O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado. 

function nameAndAge(books) {
    const result = books.map((book) => (
        {
            author: book.author.name,
            age: book.releaseYear - book.author.birthYear
        }
    )).sort((bookA, bookB) => bookA.age - bookB.age);
    return result
}

//3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia. 
function fantasyOrScienceFiction(books) {
    const result = books.filter(book => book.genre === 'Ficção Científica' || book.genre === 'Fantasia');
    return result;
}

// 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho. 
function oldBooksOrdered(books) {
    const result = books.filter(book => 2021 - book.releaseYear > 60).sort((bookA, bookB) => bookA.releaseYear - bookB.releaseYear);
    return result;
}

// 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia. 
function fantasyOrScienceFictionAuthors() {
    const result = books.filter(book => book.genre === 'Ficção Científica' || book.genre === 'Fantasia').map(book => book.author.name).sort();
    return result;
}

// 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação. 
function oldBooks() {
    const result = books.filter(book => 2021 - book.releaseYear > 60).map(book => book.name);
    return result;}

// 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais. 
function authorWith3DotsOnName(books) {
    const result = books.find((book) => (
        book.author.name.split(' ').filter((word) => word.endsWith('.')).length === 3
      )).name;
    return result;
}