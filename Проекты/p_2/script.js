/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';
let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели??", '' );

// if (numberOfFilms < 3) {
//     alert('Too little')
//     const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели??", '' );
// } 

while (numberOfFilms < 3) {
    alert('Too little films');
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели??", '' );
}

const personalMovieDB = {
    count:  numberOfFilms,
    movies:  {}, //пустой объект
    actors: {},
    genres: [],
    privat: false
}

// while (numberOfFilms >0) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = +prompt('На сколько оцените его?', '');
    
          
//     switch (b) {
//         case 5:
//             alert('Оценили на отлично!');
//             break;
//         case 4:
//             alert('Оценили на хорошо!');
//             break;
//         default:
//             alert('Вы ввели число не 4 и не 5 :(');
//             break;
//     }
//     personalMovieDB.movies[a] = b;
//     numberOfFilms--;
// }

// через FOr
for(let i = 0; i < numberOfFilms; i++){
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = +prompt('На сколько оцените его?', '');
     if (a != null  // не нажал отмену, т.к если бы нажал то записалось бы null 
         && b != null 
         && a != '' // не ввел пустую строку,
         && b != ''
         && a.length < 50
         )
         {
            personalMovieDB.movies[a] = b;
            console.log('well inserted correct data about film');
         } else {
            console.log('error');
            i--;
         }
    
}


// const a = prompt('Один из последних просмотренных фильмов?', ''),
    //   b = +prompt('На сколько оцените его?', '');



// personalMovieDB.movies[a] = b;

console.log(personalMovieDB);