import "./Projects.sass";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Projects = () => {
    const query = `(max-width: 1200px)`;
    return (
        <>
            <div className="projects screen">
                <div className="projects-container">
                    <span className="title">PROJECTS AND WORKS</span>
                    <div className="carousel-container">

                        <Splide
                            aria-label="projects"
                            options={ window.matchMedia("(orientation: portrait)").matches ? {
                                rewind: true,
                                direction: 'ttb',
                                height   : '60vh',
                                perPage: 2,
                                autoHeight: true,
                                pagination: false,
                            } : {
                                rewind: true,
                                perPage: 2,
                                pagination: false,
                                fixedHeight: "100%",
                            }}
                        >
                            <SplideSlide>
                                <div className="video-container">
                                    <div className="video-title">
                                    UNITY + WWISE. TECHNICAL SOUND DESIGN
                                    </div>
                                    <iframe
                                        className="carousel-video"
                                        title="First vid"
                                        loading="lazy"
                                        src="https://www.youtube.com/embed/KUmbqmxFbLI"
                                    />
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="video-container">
                                    <span className="video-title">
                                        Videogame Sound Design
                                    </span>
                                    <iframe
                                        className="carousel-video"
                                        title="First vid"
                                        loading="lazy"
                                        src="https://www.youtube.com/embed/5w0ns_gf5ww"
                                    />
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="video-container">
                                    <span className="video-title">
                                        Rickroll hehehe
                                    </span>
                                    <iframe
                                        className="carousel-video"
                                        title="First vid"
                                        loading="lazy"
                                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                    />
                                </div>
                            </SplideSlide>
                        </Splide>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;
