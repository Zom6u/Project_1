"user strict";

const nuberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");

const persone = {
    count: nuberOfFilms,
    movies: {},
    actors: {},
    generes: [],
    private: false
};

const a = prompt("Один из просмотренных фильмов?", ""),
      b = prompt("На сколько оцениваете его?", ""),
      c = prompt("Один из просмотренных фильмов?", ""),
      d = prompt("На сколько оцениваете его?", "");

      persone.movies[a] = b;
      persone.movies[c] = d;

      console.log(persone);