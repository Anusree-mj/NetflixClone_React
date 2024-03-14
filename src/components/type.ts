export type MoviesType = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;

}[];
export type MovieProps={
    item: MoviesType[0];
    handleMovieClick: (movieId: number) => void;
}
export type RowType = {
    rowId:number;
    title: string;
    fetchURL: string;
}[]

export type SavedShow={
    id: number;
    img: string;
    title: string;
}