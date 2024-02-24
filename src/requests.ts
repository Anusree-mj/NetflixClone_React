const key = 'd9f1aeea6cb32865f9db46c4a9bc0281';
const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestAction: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&page=1&with_genres=28`,
    requestHorror: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&page=1&with_genres=27`,
    requestMostViewed: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&page=1&sort_by=popularity.desc`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    requestComedy: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&page=1&with_genres=35`,
}
export default requests;