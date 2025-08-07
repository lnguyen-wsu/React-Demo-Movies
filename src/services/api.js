const API_KEY ="fb2f91bfdd224ba93cb372be7990843b";
const BASE_URL = "https://api.themoviedb.org/3"

export const getPopularMovies = async() => {
    const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await res.json();
    return data.results;
}


export const searchMovies = async(query) => {
    const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}
        &query=${encodeURIComponent(query)}`);
    const data = await res.json();
    return data.results;
}
