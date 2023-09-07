// import logo from './logo.svg';
import "./App.css";
import Home from "./Component/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import MovieList from "./Component/MovieList";
import MovieCategory from "./Component/MovieCategory";
import MovieCategorySublist from "./Component/MovieSuperlist";
import MovieSublist from "./Component/MovieSublist";
import MovieDetails from "./Component/MovieDetails";
import LoadingBar from "react-top-loading-bar";
import React, { useState } from "react";

function App() {
    const [loading, setLoading] = useState(false);

    const startLoading = () => {
        setLoading(true);
    };

    const finishLoading = () => {
        setLoading(false);
    };
    return ( <
        >
        <
        Router >
        <
        Navbar / >
        <
        LoadingBar progress = { loading ? 50 : 0 }
        height = { 3 }
        color = "#f11946"
        onLoaderFinished = { finishLoading }
        />{" "} <
        Routes >
        <
        Route exact path = "/"
        element = { < Home / > }
        />{" "} <
        Route exact path = "/movies/popular"
        element = { <
            MovieList
            onClick = { startLoading }
            key = "popular"
            category = "popular" /
            >
        }
        />{" "} <
        Route exact path = "/movies/toprated"
        element = { <
            MovieList
            onClick = { startLoading }
            key = "top_rated"
            category = "top_rated" /
            >
        }
        />{" "} <
        Route exact path = "/movies/upcoming"
        element = { <
            MovieList
            onClick = { startLoading }
            key = "upcoming"
            category = "upcoming" /
            >
        }
        />{" "} <
        Route exact path = "/movies/bollywood"
        element = { <
            MovieCategory
            key = "Bollywood"
            with_original_language = "hi|kn|ml|ta|te"
            category = "Bollywood" /
            >
        }
        />{" "} <
        Route exact path = "/bollywood/comedy"
        element = { <
            MovieCategorySublist
            onClick = { startLoading }
            key = "Bollywood-Comedy"
            with_original_language = "hi"
            category = "Bollywood-Comedy"
            with_genres = "35" /
            >
        }
        />{" "} <
        Route exact path = "/bollywood/action"
        element = { <
            MovieCategorySublist
            onClick = { startLoading }
            key = "Bollywood-action"
            with_original_language = "hi"
            category = "Bollywood-action"
            with_genres = "28" /
            >
        }
        />{" "} <
        Route exact path = "/bollywood/horror"
        element = { <
            MovieCategorySublist
            onClick = { startLoading }
            key = "Bollywood-horror"
            with_original_language = "hi"
            category = "Bollywood-horror"
            with_genres = "27" /
            >
        }
        />{" "} <
        Route exact path = "/bollywood/romance"
        element = { <
            MovieCategorySublist
            onClick = { startLoading }
            key = "Bollywood-romance"
            with_original_language = "hi"
            category = "Bollywood-romance"
            with_genres = "10749" /
            >
        }
        />{" "} <
        Route exact path = "/movies/hollywood"
        element = { <
            MovieCategory
            key = "hollywood"
            with_original_language = "en"
            category = "hollywood" /
            >
        }
        />{" "} <
        Route exact path = "/hollywood/comedy"
        element = { <
            MovieSublist
            onClick = { startLoading }
            key = "hollywoodComedy"
            category = "hollywood-comedy"
            with_genres = "35" /
            >
        }
        />{" "} <
        Route exact path = "/hollywood/romance"
        element = { <
            MovieSublist
            onClick = { startLoading }
            key = "hollywoodRomance"
            category = "hollywood-romance"
            with_genres = "10749" /
            >
        }
        />{" "} <
        Route exact path = "/hollywood/action"
        element = { <
            MovieSublist
            onClick = { startLoading }
            key = "hollywoodAction"
            category = "hollywood-action"
            with_genres = "28" /
            >
        }
        />{" "} <
        Route exact path = "/hollywood/horror"
        element = { <
            MovieSublist
            onClick = { startLoading }
            key = "hollywoodHorror"
            category = "hollywood-horror"
            with_genres = "27" /
            >
        }
        />{" "} <
        Route exact path = "movie/:id"
        element = { < MovieDetails / > }
        />{" "} <
        /Routes>{" "} <
        /Router>{" "} <
        />
    );
}

export default App;