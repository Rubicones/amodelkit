import "./Games.sass";
import noirePoster from "../../resourses/noire.png";
import odaPoster from "../../resourses/oda.png";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useState, useEffect } from "react";

const SplideWrapper = ({ children }) => {
    if (window.matchMedia("(orientation: portrait)").matches) {
        return (
            <Splide
                aria-label="projects"
                options={{
                    rewind: true,
                    perPage: 1,
                    pagination: false,
                }}
            >
                {children}
            </Splide>
        );
    } else {
        return <>{children}</>;
    }
};

const SlideWrapper = ({ children }) => {
    if (window.matchMedia("(orientation: portrait)").matches) {
        return <SplideSlide>{children}</SplideSlide>;
    } else {
        return <>{children}</>;
    }
};

const Games = () => {
    const [slides, setSlides] = useState([]);

    const games = [
        {
            poster: noirePoster,
            title: "Noire",
            genre: "Genre: Metroidvania",
            role: "Role: Technical Sound Designer, Music Composer",
            link: "https://jacobstaffordmusic.itch.io/noire",
        },
        {
            poster: odaPoster,
            title: "Oda",
            genre: "Genre: Puzzle",
            role: "Role: Technical Sound Designer, Music Composer",
            link: "https://store.steampowered.com/app/1142240/ODA/",
        },
    ];
    useEffect(() => {
        setSlides(
            games.map((game) => {
                return (
                    <SlideWrapper>
                        <div className="game">
                            <img
                                src={game.poster}
                                alt={game.title + "game poster"}
                                className="poster"
                            />
                            <div className="medium-text">{game.title}</div>
                            <div className="light-text">{game.genre}</div>
                            <div className="light-text">{game.role}</div>
                            <a
                                href={game.link}
                                rel="noreferrer"
                                className="game-link light-text"
                                target="_blank"
                            >
                                Link
                            </a>
                        </div>
                    </SlideWrapper>
                );
            })
        );
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <div className="games screen">
                <div className="games-container">
                    <span className="title">TITLES PRODUCED</span>
                    <div className="inner-container">
                        <SplideWrapper>{slides}</SplideWrapper>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Games;
