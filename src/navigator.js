//Navigator Script  ....
//window.addEventListener('loaded', navigator , false );
window.addEventListener('DOMContentLoaded', myNavigator , false );
window.addEventListener('hashchange', myNavigator , false );

function myNavigator()  {

    console.log( { location } ) ;

    if ( location.hash.startsWith('#trends')) {

        trendMovie() ;

    } else if ( location.hash.startsWith('#search=') ) {

        searchMovie() ;

    } else if ( location.hash.startsWith('#movies=') ) {

        moviePage() ;

    }  else if ( location.hash.startsWith('#category=' ) ) {

        catPage() ;

    }  else  {

        homePage()
    }

}

function homePage()  {

    console.log("Home!");
    getrendingMovies( ) ;
    getFilmCat() ;

    
}

function catPage() {

    console.log('Categories!!!');
}

function moviePage()  {

    console.log("Movies!");
}

function searchMovie()  {

    console.log('Search!');
}

function trendMovie()  {

    console.log('Trends!');
}