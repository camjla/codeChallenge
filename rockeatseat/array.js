const booksByCategory =[
  {
    category: "Romance",
    books: [
      {
        title: " Allegro Hip-Hop",
        author: " Babi Dewet",
      },
      {
        title: "PS: Ainda amo você",
        author: "Jenny Han",
      },
      {
        title: " Para todos os garotos que já amei",
        author: "Jenny Han",
      }
    ]
  },
  {
    category: "Inteligencia",
    books: [
      {
        title: "Como organizar sua vida financeira",
        author: "Gustavo cerarbasi",
  },
  {
    title: "O milagre da manhã",
    author: " Hal Erold",
  },
],
  },
];

const totalCategories = booksByCategory.length;

console.log(totalCategories);

for(let category of booksByCategory)
{
  console.log('Total de livros de romance', category.category)
  console.log(category.books.length) // num total 
}

function countAuthors()
{
  let authors = [];
  for(let category of booksByCategory)
  {
    for(let book of category.books)
    {
      if(authors.indexOf(book.author) == -1)// se não achar vem -1
      {
        authors.push(book.author)
      }
    }
  }
  console.log("total de autores", authors.length)
}

countAuthors();

function BooksOfJennyHan()
{
  let books = [];
  for(let category of booksByCategory)
  {
    for(let book of category.books)
    {
      if(book.author === 'Jenny Han')
      {
       books.push(book.title)
      }
    }
  }
  console.log("Livros da autora", books)
}

BooksOfJennyHan();
