"user strict";
       
        let nuberOfFilms;
           
function start() {
    nuberOfFilms = +prompt("Сколько фильмов вы посмотрели?", " ");

    while (nuberOfFilms == '' || nuberOfFilms == null || isNaN(nuberOfFilms)) {
        nuberOfFilms = +prompt("Сколько фильмов вы посмотрели?", " ");
    }
}

    start();

        const personalMovieDB = {
            count: nuberOfFilms,
            movies: {},
            actors: {},
            generes: [],
            private: false
        }; 

 

    function rememberMyFilms() {
        for (let i = 0; i < 2; i++) {
            const a = prompt("Один из просмотренных фильмов?", ""),
                b = prompt("На сколько оцениваете его?", "");
        
                if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
                    personalMovieDB.movies[a] = b;
                    console.log('dane');
                } else {
                    console.log('erorr');
                    i--;
                }   
            }
    }

    rememberMyFilms();

    function detectPersonalLevel() {
        if(personalMovieDB.count < 10) {
            console.log('Просмотрено мало фильмов');
        } else if (10 < personalMovieDB.count < 30) {
            console.log('Просмотрено cреднее фильмов');
        } else if (personalMovieDB.count >= 30) {
            console.log('Просмотрено много фильмов');
        } else {
            console.log('erorr');
        }
    }

    detectPersonalLevel();

        console.log(personalMovieDB);

        function showMyDB (hidden) {
            if (!hidden) {
                console.log(personalMovieDB);
            }
        }
    
        showMyDB(personalMovieDB.private);
    
        function writeYourGenres() {
            for (let i = 1; i <= 3; i++) {
                let genere = prompt(`Ваш любимый жанр по номером ${i}`);
                personalMovieDB.generes[i-1] = genere;
            }
        }

    writeYourGenres();