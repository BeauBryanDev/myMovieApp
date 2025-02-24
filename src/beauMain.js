import { API_KEY  } from   "./secrects.js";

// console.log("API_KEY: "+ API_KEY );

// alert("Move Along Sir !");

const MOVIES_URL = 'https://api.themoviedb.org/3/trending/movie/day?api_key=';
const IMG_URL = 'https://image.tmdb.org/t/p/w300' ;
const GENRES_URL  = 'https://api.themoviedb.org/3/genre/movie/list?api_key=' ;


const api = axios.create( {

    baseURL:  'https://api.themoviedb.org/3/',
    headers : {
        'Content-Type' :  'application/json;charset=utf-8',
                          
    },
    params : {
        'api_key': API_KEY,

    },
});


async function getrendingMovies( ) {

    // const trendings = await fetch( MOVIES_URL + API_KEY );

    // const movieData =  await trendings.json();

    // const movies  = movieData.results;

    // console.log(  { movieData , movies} );

    try {
        const response = await api('trending/movie/day'); // Get the full response object
        const movies = response.data.results; // Access data using response.data

        movies.forEach(movie => {

            const trendingFilmContainer = document.querySelector('#trendingFilms .trending__Film-movieList'); // Make sure these selectors are correct
            if (trendingFilmContainer) { // Check if the container exists before adding movies

                const movieContainer = document.createElement('div');
                movieContainer.classList.add('movie-container');

                const movieImg = document.createElement('img');
                movieImg.classList.add('movie-img');
                movieImg.setAttribute('alt', movie.title);
                movieImg.setAttribute('src', IMG_URL + movie.poster_path);

                movieContainer.appendChild(movieImg);
                trendingFilmContainer.appendChild(movieContainer);

            } else {

                console.error("Trending film container not found!");

            }

        });

    } catch (error) {

        console.error("Error fetching trending movies:", error);

    }
    
}


async function getFilmCat() {

    // const  cats  = await fetch( GENRES_URL + API_KEY )  ;
    // const  catData = await cats.json();

    // const filmGenres = catData.genres;

    const { data } = await api('genre/movie/list');
    const filmGenres = data.genres;

    try {
        const response = await api('genre/movie/list'); // Get the full response object
        const filmGenres = response.data.genres; // Access data using response.data

        filmGenres.forEach(cat => {
            const filmCatContainer = document.querySelector('#filmsCats .categories-list'); // Make sure this selector is correct
            if (filmCatContainer) { // Check if the container exists
                const catContainer = document.createElement('div');
                catContainer.classList.add('cat-container');

                const caTitle = document.createElement('h3');
                caTitle.classList.add('cat-title');
                caTitle.setAttribute('id', 'id' + cat.id);
                const caTitleText = document.createTextNode(cat.name);

                caTitle.appendChild(caTitleText);
                catContainer.appendChild(caTitle);
                filmCatContainer.appendChild(catContainer);
            } else {
                console.error("Film category container not found!");
            }
        });

    } catch (error) {

        console.error("Error fetching film categories:", error);
    }
}


getrendingMovies();
getFilmCat();



