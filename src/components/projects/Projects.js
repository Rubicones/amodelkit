import "./Projects.sass";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Projects = () => {
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
                                perPage: 1,
                                pagination: false,
                                height: "42.5vh",
                                classes: {
                                    arrows: 'splide__arrows carousel_arrows',
                              },
                            } : {
                                rewind: true,
                                perPage: 2,
                                pagination: false,
                                height: "50vh",

                            }}
                        >
                            <SplideSlide>
                                <div className="video-container">
                                    <div className="video-title">
                                    SHOWREEL 2023
                                    </div>
                                    <iframe
                                        className="carousel-video"
                                        title="First vid"
                                        loading="lazy"
                                        src="https://www.youtube.com/embed/OYivSg65fHM"
                                    />
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="video-container">
                                    <span className="video-title">
                                    UNITY + WWISE. TECHNICAL SOUND DESIGN
                                    </span>
                                    <iframe
                                        className="carousel-video"
                                        title="First vid"
                                        loading="lazy"
                                        src="https://www.youtube.com/embed/7Bace3dVEDE"
                                    />
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="video-container">
                                    <span className="video-title">
                                        NO SAMPLES SOUND DESIGN
                                    </span>
                                    <iframe
                                        className="carousel-video"
                                        title="First vid"
                                        loading="lazy"
                                        src="https://www.youtube.com/embed/8I1rM5TP_VI"
                                    />
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="video-container">
                                    <span className="video-title">
                                        VIDEO GAME SOUND DESIGN
                                    </span>
                                    <iframe
                                        className="carousel-video"
                                        title="First vid"
                                        loading="lazy"
                                        src="https://www.youtube.com/embed/5w0ns_gf5ww"
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
