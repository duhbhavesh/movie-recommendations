const movieData = {
  Action: [
    {
      name: "The Dark Knight",
      rating: "9.0/10",
      cover:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
    },
    {
      name: "Inception",
      rating: "8.8/10",
      cover:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
    },
    {
      name: "The Matrix",
      rating: "8.7/10",
      cover:
        "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
    },
    {
      name: "Avengers: Endgame",
      raing: "8.4/10",
      cover:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
    },
    {
      name: "Uri: The Surgical Strike",
      rating: "8.2/10",
      cover:
        "https://m.media-amazon.com/images/M/MV5BMWU4ZjNlNTQtOGE2MS00NDI0LWFlYjMtMmY3ZWVkMjJkNGRmXkEyXkFqcGdeQXVyNjE1OTQ0NjA@._V1_UY268_CR2,0,182,268_AL__QL50.jpg"
    }
  ],

  Comedy: [
    {
      name: "Parasite",
      rating: "8.6/10",
      cover:
        "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
    },
    {
      name: "3 Idiots",
      rating: "8.4/10",
      cover:
        "https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY268_CR2,0,182,268_AL__QL50.jpg"
    },
    {
      name: "OMG: Oh My God!",
      rating: "8.1/10",
      cover:
        "https://m.media-amazon.com/images/M/MV5BMGNhYjUwNmYtNDQxNi00NDdmLTljMDAtZWM1NDQyZTk3ZDYwXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UY268_CR1,0,182,268_AL__QL50.jpg"
    },
    {
      name: "Zindagi Na Milegi Dobara",
      rating: "8.1/10",
      cover:
        "https://m.media-amazon.com/images/M/MV5BZGFmMjM5OWMtZTRiNC00ODhlLThlYTItYTcyZDMyYmMyYjFjXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UY268_CR2,0,182,268_AL__QL50.jpg"
    },
    {
      name: "Deadpool",
      rating: "8.0/10",
      cover:
        "https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
    }
  ],

  Horror: [
    {
      name: "Tumbbad",
      rating: "8.3/10",
      cover:
        "https://m.media-amazon.com/images/M/MV5BYmQxNmU4ZjgtYzE5Mi00ZDlhLTlhOTctMzJkNjk2ZGUyZGEwXkEyXkFqcGdeQXVyMzgxMDA0Nzk@._V1_UY268_CR3,0,182,268_AL__QL50.jpg"
    },
    {
      name: "Get Out",
      rating: "7.7/10",
      cover:
        "https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
    },
    {
      name: "The Conjuring",
      rating: "7.5/10",
      cover:
        "https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
    },
    {
      name: "Hereditary",
      rating: "7.3/10",
      cover:
        "https://m.media-amazon.com/images/M/MV5BOTU5MDg3OGItZWQ1Ny00ZGVmLTg2YTUtMzBkYzQ1YWIwZjlhXkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
    },
    {
      name: "Midsommar",
      rating: "7.1/10",
      cover:
        "https://m.media-amazon.com/images/M/MV5BMzQxNzQzOTQwM15BMl5BanBnXkFtZTgwMDQ2NTcwODM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
    }
  ],

  SciFi: [
    {
      name: "Interstellar",
      rating: "8.6/10",
      cover:
        "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
    },
    {
      name: "The Martian",
      rating: "8.0/10",
      cover:
        "https://m.media-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
    },
    {
      name: "Guardians of the Galaxy",
      rating: "8.0/10",
      cover:
        "https://m.media-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
    },
    {
      name: "Ready Player One",
      rating: "7.5/10",
      cover:
        "https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
    },
    {
      name: "Bird Box",
      rating: "6.6/10",
      cover:
        "https://m.media-amazon.com/images/M/MV5BMjAzMTI1MjMyN15BMl5BanBnXkFtZTgwNzU5MTE2NjM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
    }
  ]
};

export default movieData;
