const API_KEY = "521af328705c530808d18691dc05bdaf";
const BASE_PATH = "https://api.themoviedb.org/3";

interface Movie {
    id: number;
    backdrop_path: string;
    poster_path: string;
    title: string;
    overview: string;
}

export interface GetMoviesResult {
    dates: {
        minimum: string;
        maximum: string;
    };
    page: number;
    results: Movie[];
    total_pages: number;
    total_result: number;
}
export function getMovies() {
    return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then((response) => response.json());
}
