import React, { useEffect, useState } from "react";
import "../ComponentStyle/MovieListStyle.css";
import Card from "./Card";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from "react-top-loading-bar";

const MovieSublist = (props) => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const { category, with_genres } = props;
    const [loading, setLoading] = useState(false); // Add loading state
    const [progress, setProgress] = useState(0); // Add progress state

    const fetchMovies = async() => {
        setLoading(true); // Set loading to true before making the API call
        setProgress(30); // Set an initial progress value

        const apiKey = "4eee0494b9dc4b3dd0c76812804c13c1";

        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&with_genres=${with_genres}&page=${page}`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            const { results, total_pages } = data;

            setMovies((prevMovies) => [...prevMovies, ...results]);
            setTotalPages(total_pages);
            setProgress(100); // Set the progress to 100 when the API call is successful
        } catch (error) {
            console.error("Error fetching movies:", error);
        } finally {
            setTimeout(() => {
                setLoading(false); // Set loading to false after a short delay
                setProgress(0); // Reset the progress value
            }, 500); // Adjust the delay duration if needed
        }
    };

    const fetchMoreMovies = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, [page]);

    return ( <
        div >
        <
        LoadingBar progress = { progress }
        height = { 3 }
        color = "#f11946" / > { " " } { /* Use the progress state */ } { " " } <
        InfiniteScroll dataLength = { movies.length }
        next = { fetchMoreMovies }
        hasMore = { page < totalPages } >
        <
        div className = "movie__list" >
        <
        h2 className = "list__title" > { " " } {
            (category ? category : "POPULAR").toUpperCase() } { " " } <
        /h2>{" "} <
        div className = "list__cards" > { " " } {
            movies.map((movie) => ( <
                Card key = "popular"
                movie = { movie }
                />
            ))
        } { " " } <
        /div>{" "} <
        /div>{" "} <
        /InfiniteScroll>{" "} <
        /div>
    );
};

export default MovieSublist;