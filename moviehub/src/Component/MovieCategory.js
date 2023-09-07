import React, { useEffect, useState, useCallback } from "react";
import "../ComponentStyle/MovieListStyle.css";
import Card from "./Card";
import InfiniteScroll from "react-infinite-scroll-component";

const MovieCategory = (props) => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const { category, with_original_language } = props; // Creating DisStructuring

    const fetchMovies = useCallback(async() => {
        const apiKey = "4eee0494b9dc4b3dd0c76812804c13c1";
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1&with_original_language=${with_original_language}&page=${page}`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            const { results, total_pages } = data;

            setMovies((prevMovies) => [...prevMovies, ...results]);
            setTotalPages(total_pages);
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    }, [page, with_original_language]);

    const fetchMoreMovies = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, [fetchMovies]);

    return ( <
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
                Card key = { movie.poster_path }
                movie = { movie }
                />
            ))
        } { " " } <
        /div>{" "} <
        /div>{" "} <
        /InfiniteScroll>
    );
};

export default MovieCategory;