import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../ComponentStyle/MovieDetailStyle.css";
import LoadingBar from "react-top-loading-bar";

const MovieDetails = () => {
    const [currentMovieDetail, setMovie] = useState();
    const { id } = useParams();
    const [loading, setLoading] = useState(false); // Add loading state
    const [progress, setProgress] = useState(0); // Add progress state

    useEffect(() => {
        getData();
        window.scrollTo(0, 0);
    }, []);

    const getData = () => {
        setLoading(true); // Set loading to true before making the API call
        setProgress(30); // Set an initial progress value
        try {
            fetch(
                    `https://api.themoviedb.org/3/movie/${id}?api_key=4eee0494b9dc4b3dd0c76812804c13c1&language=en-US`
                )
                .then((res) => res.json())
                .then((data) => setMovie(data));
            setProgress(100); // Set the progress to 100 when the API call is successful
        } finally {
            setTimeout(() => {
                setLoading(false); // Set loading to false after a short delay
                setProgress(0); // Reset the progress value
            }, 500); // Adjust the delay duration if needed
        }
    };

    return ( <
        div >
        <
        LoadingBar progress = { progress }
        height = { 3 }
        color = "#f11946" / > { " " } <
        div className = "movie" >
        <
        div className = "movie__intro" >
        <
        img className = "movie__backdrop"
        src = { `https://image.tmdb.org/t/p/original${
              currentMovieDetail ? currentMovieDetail.backdrop_path : ""
            }` }
        />{" "} <
        /div>{" "} <
        div className = "movie__posterBox" > < /div>{" "} <
        div className = "movie__detail" >
        <
        div className = "movie__detailLeft" > < /div>{" "} <
        div className = "movie__detailRight" >
        <
        div className = "movie__detailRightTop" >
        <
        div className = "movie__name" > { " " } {
            currentMovieDetail
                ?
                currentMovieDetail.original_title :
                ""
        } { " " } <
        /div>{" "} <
        div className = "movie__tagline" > { " " } { currentMovieDetail ? currentMovieDetail.tagline : "" } { " " } <
        /div>{" "} <
        div className = "movie__rating" > { " " } { currentMovieDetail ? currentMovieDetail.vote_average : "" } { " " } <
        i class = "fas fa-star" / >
        <
        span className = "movie__voteCount" > { " " } {
            currentMovieDetail
                ?
                "(" + currentMovieDetail.vote_count + ") votes" :
                ""
        } { " " } <
        /span>{" "} <
        /div>{" "} <
        div className = "movie__runtime" > { " " } {
            currentMovieDetail
                ?
                currentMovieDetail.runtime + " mins" :
                ""
        } { " " } <
        /div>{" "} <
        div className = "movie__releaseDate" > { " " } {
            currentMovieDetail
                ?
                "Release date: " + currentMovieDetail.release_date :
                ""
        } { " " } <
        /div>{" "} <
        /div>{" "} <
        div className = "movie__detailRightBottom" >
        <
        div className = "synopsisText" > Synopsis < /div>{" "} <
        div > { " " } { currentMovieDetail ? currentMovieDetail.overview : "" } { " " } <
        /div>{" "} <
        /div>{" "} <
        /div>{" "} <
        /div>{" "} <
        div className = "movie__links" >
        <
        div className = "movie__heading" > { " " } <
        span > Useful Links < /span>{" "} <
        /div>{" "} {
            currentMovieDetail && currentMovieDetail.homepage && ( <
                a href = { currentMovieDetail.homepage }
                target = "_blank"
                style = {
                    { textDecoration: "none" } } >
                { " " } <
                p > { " " } <
                span id = "text"
                className = "movie__homeButton movie__Button" > { " " }
                Homepage < i className = "newTab fas fa-external-link-alt" > { " " } <
                /i>{" "} <
                /span>{" "} <
                /p>{" "} <
                /a>
            )
        } { " " } {
            currentMovieDetail && currentMovieDetail.imdb_id && ( <
                a href = { "https://www.imdb.com/title/" + currentMovieDetail.imdb_id }
                target = "_blank"
                style = {
                    { textDecoration: "none" } } >
                { " " } <
                p > { " " } <
                span id = "text"
                className = "movie__imdbButton movie__Button" > { " " }
                IMDb < i className = "newTab fas fa-external-link-alt" > < /i>{" "} <
                /span>{" "} <
                /p>{" "} <
                /a>
            )
        } { " " } <
        /div>{" "} <
        div className = "movie__genres" > { " " } {
            currentMovieDetail && currentMovieDetail.genres ?
                currentMovieDetail.genres.map((genre) => ( <
                    > { " " } <
                    span className = "movie__genre"
                    id = { genre.id } > { " " } { genre.name } { " " } <
                    /span>{" "} <
                    />
                )) :
                ""
        } { " " } <
        /div>{" "} <
        img className = "movie__poster"
        src = { `https://image.tmdb.org/t/p/original${
            currentMovieDetail ? currentMovieDetail.poster_path : ""
          }` }
        />{" "} <
        div className = "movie__heading" > Production companies < /div>{" "} <
        div className = "movie__production" > { " " } {
            currentMovieDetail &&
                currentMovieDetail.production_companies &&
                currentMovieDetail.production_companies.map((company) => ( <
                    > { " " } {
                        company.logo_path && ( <
                            span className = "productionCompanyImage" >
                            <
                            img className = "movie__productionComapany"
                            src = {
                                "https://image.tmdb.org/t/p/original" +
                                company.logo_path
                            }
                            />{" "} <
                            span > { company.name } < /span>{" "} <
                            /span>
                        )
                    } { " " } <
                    />
                ))
        } { " " } <
        /div>{" "} <
        /div>{" "} <
        /div>
    );
};

export default MovieDetails;