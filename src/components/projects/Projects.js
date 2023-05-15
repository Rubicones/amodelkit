import "./Projects.sass";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useState, useEffect } from "react";
const Projects = () => {
    const [slides, setSlides] = useState([]);
    const videos = [
        {
            title: "SHOWREEL 2023",
            src: "https://www.youtube.com/embed/OYivSg65fHM",
        },
        {
            title: "UNITY + WWISE. TECHNICAL SOUND DESIGN",
            src: "https://www.youtube.com/embed/7Bace3dVEDE",
        },
        {
            title: "NO SAMPLES SOUND DESIGN",
            src: "https://www.youtube.com/embed/8I1rM5TP_VI",
        },
        {
            title: "VIDEO GAME SOUND DESIGN",
            src: "https://www.youtube.com/embed/5w0ns_gf5ww",
        },
    ];

    useEffect(() => {
        setSlides(
            videos.map((video) => {
                return (
                    <SplideSlide>
                        <div className="video-container">
                            <div className="video-title">{video.title}</div>
                            <iframe
                                className="carousel-video"
                                title={video.title}
                                loading="lazy"
                                src={video.src}
                            />
                        </div>
                    </SplideSlide>
                );
            })
        );
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <div className="projects screen">
                <div className="projects-container">
                    <span className="title">PROJECTS AND WORKS</span>
                    <div className="carousel-container">
                        <Splide
                            aria-label="projects"
                            options={
                                window.matchMedia("(orientation: portrait)")
                                    .matches
                                    ? {
                                          rewind: true,
                                          perPage: 1,
                                          pagination: false,
                                          height: "42.5vh",
                                      }
                                    : {
                                          rewind: true,
                                          perPage: 2,
                                          pagination: false,
                                          height: "100%",
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

export default Projects;
