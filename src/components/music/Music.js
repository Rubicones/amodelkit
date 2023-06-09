import "./Music.sass";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useState, useEffect } from "react";
const Music = () => {
    const [slides, setSlides] = useState([]);
    const music = [
        {
            title: "Noire Soundtrack",
            src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1618219006&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        },
        {
            title: "ODA Soundtrack",
            src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1127856454&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
        },
    ];

    useEffect(() => {
        setSlides(music.map((musicToken) => {
            return (
            <SplideSlide>
                <div className="sc-container">
                    <iframe
                        className="audioFrame"
                        title={musicToken.title}
                        scrolling="no"
                        frameBorder="no"
                        loading="lazy"
                        src={musicToken.src}
                    ></iframe>
                </div>
            </SplideSlide>)
        }))
        // eslint-disable-next-line
    }, []);
    return (
        <>
            <div className="music screen">
                <div className="music-container">
                    <span className="title">MUSIC</span>
                    <div className="music-carousel-container">
                        <Splide
                            aria-label="music"
                            options={
                                window.matchMedia("(orientation: portrait)")
                                    .matches
                                    ? {
                                          rewind: true,
                                          perPage: 1,
                                          pagination: false,
                                          fixedHeight: "100%",
                                      }
                                    : {
                                          rewind: true,
                                          perPage: 2,
                                          gap: "1vw",
                                          pagination: false,
                                          fixedHeight: "100%",
                                      }
                            }
                        >
                            
                            {slides}
                        </Splide>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Music;
