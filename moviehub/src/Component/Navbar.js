import React, { useState } from "react";
import "../ComponentStyle/NavStyles.css";
import { Link } from "react-router-dom";
import Switch from "./Switch";

function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleNavClick = () => {
        setIsNavOpen(false);
    };
    return ( <
        >
        <
        header >
        <
        div className = "container" >
        <
        input type = "checkbox"
        name = ""
        id = "check"
        checked = { isNavOpen }
        onChange = {
            () => setIsNavOpen(!isNavOpen) }
        />{" "} <
        div className = "logo-container" >
        <
        h3 className = "logo" >
        <
        span > motion < /span>{" "} <
        /h3>{" "} <
        div className = "SwitchBtn" >
        <
        Switch / >
        <
        /div>{" "} <
        /div>{" "} <
        div className = "nav-btn" >
        <
        div className = "nav-links" >
        <
        ul >
        <
        li className = "nav-link"
        style = {
            { "--i": ".6s" } } >
        <
        Link to = "/"
        onClick = { handleNavClick } > { " " }
        Home { " " } <
        /Link>{" "} <
        /li>{" "} <
        li className = "nav-link"
        style = {
            { "--i": ".6s" } } >
        <
        Link to = "/movies/popular"
        onClick = { handleNavClick } > { " " }
        Popular { " " } <
        /Link>{" "} <
        /li>{" "} <
        li className = "nav-link"
        style = {
            { "--i": ".6s" } } >
        <
        Link to = "/movies/toprated"
        onClick = { handleNavClick } > { " " }
        Top - Rated { " " } <
        /Link>{" "} <
        /li>{" "} <
        li className = "nav-link"
        style = {
            { "--i": ".6s" } } >
        <
        Link to = "/movies/upcoming"
        onClick = { handleNavClick } > { " " }
        Upcoming { " " } <
        /Link>{" "} <
        /li>{" "} <
        li className = "nav-link"
        style = {
            { "--i": "1.1s" } } >
        <
        Link to = "#" >
        Films By Genre < i className = "fas fa-caret-down" > < /i>{" "} <
        /Link>{" "} <
        div className = "dropdown" >
        <
        ul >
        <
        li className = "dropdown-link" >
        <
        Link >
        Bollywood < i className = "fas fa-caret-down" > < /i>{" "} <
        /Link>{" "} <
        div className = "dropdown second" >
        <
        ul >
        <
        li className = "dropdown-link" >
        <
        Link to = "/bollywood/action"
        onClick = { handleNavClick } >
        { " " }
        Action { " " } <
        /Link>{" "} <
        /li>{" "} <
        li className = "dropdown-link" >
        <
        Link to = "/bollywood/comedy"
        onClick = { handleNavClick } >
        { " " }
        Comedy { " " } <
        /Link>{" "} <
        /li>{" "} <
        li className = "dropdown-link" >
        <
        Link to = "/bollywood/horror"
        onClick = { handleNavClick } >
        { " " }
        Horror { " " } <
        /Link>{" "} <
        /li>{" "} <
        li className = "dropdown-link" >
        <
        Link to = "/bollywood/romance"
        onClick = { handleNavClick } >
        { " " }
        Romance { " " } <
        /Link>{" "} <
        /li>{" "} <
        /ul>{" "} <
        /div>{" "} <
        /li>{" "} <
        li className = "dropdown-link" >
        <
        Link >
        Hollywood < i className = "fas fa-caret-down" > < /i>{" "} <
        /Link>{" "} <
        div className = "dropdown second" >
        <
        ul >
        <
        li className = "dropdown-link" >
        <
        Link to = "/hollywood/action"
        onClick = { handleNavClick } >
        { " " }
        Action { " " } <
        /Link>{" "} <
        /li>{" "} <
        li className = "dropdown-link" >
        <
        Link to = "/hollywood/comedy"
        onClick = { handleNavClick } >
        { " " }
        Comedy { " " } <
        /Link>{" "} <
        /li>{" "} <
        li className = "dropdown-link" >
        <
        Link to = "/hollywood/horror"
        onClick = { handleNavClick } >
        { " " }
        Horror { " " } <
        /Link>{" "} <
        /li>{" "} <
        li className = "dropdown-link" >
        <
        Link to = "/hollywood/romance"
        onClick = { handleNavClick } >
        { " " }
        Romance { " " } <
        /Link>{" "} <
        /li>{" "} <
        /ul>{" "} <
        /div>{" "} <
        /li>{" "} <
        /ul>{" "} <
        /div>{" "} <
        /li>{" "} <
        /ul>{" "} <
        /div>{" "} {
            /* <div className="log-sign" style={{ "--i": "1.8s" }}>
                                                                                                  <Link to="#" className="btn transparent">
                                                                                                    Log in
                                                                                                  </Link>
                                                                                                  <Link to="#" className="btn solid">
                                                                                                    Sign up
                                                                                                  </Link>
                                                                                                </div> */
        } { " " } <
        /div>{" "} <
        div className = "hamburger-menu-container" >
        <
        div className = "hamburger-menu" >
        <
        div > < /div>{" "} <
        /div>{" "} <
        /div>{" "} <
        /div>{" "} <
        /header>{" "} <
        />
    );
}

export default Navbar;