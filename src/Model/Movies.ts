export interface iMovies {
    page:          number;
    results:       Result[];
    total_pages:   number;
    total_results: number;
}

export interface Result {
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    original_language: OriginalLanguage;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    release_date:      Date;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
}

export enum OriginalLanguage {
    En = "en",
    Es = "es",
    Fr = "fr",
    Sv = "sv",
}


export interface iMovieInfo {
    adult?:                 boolean;
    backdrop_path?:         null;
    belongs_to_collection?: null;
    budget?:                number;
    genres?:                any[];
    homepage?:              string;
    id?:                    number;
    imdb_id?:               string;
    original_language?:     string;
    original_title?:        string;
    overview?:              string;
    popularity?:            number;
    poster_path?:           null;
    production_companies?:  any[];
    production_countries?:  any[];
    release_date?:          Date;
    revenue?:               number;
    runtime?:               number;
    spoken_languages?:      any[];
    status?:                string;
    tagline?:               string;
    title?:                 string;
    video?:                 boolean;
    vote_average?:          number;
    vote_count?:            number;
    directors?:            any[];
}
