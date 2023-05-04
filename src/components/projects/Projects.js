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
                            options={{
                                rewind: true,
                                perPage: 2,
                                pagination: false,
                                fixedHeight: "25vw"
                            }}
                        >
                            <SplideSlide>
                                <div className="video-container">
                                    <div className="video-title">
                                        Video Title
                                    </div>
                                    <iframe
                                        className="carousel-video"
                                        title="First vid"
                                        src="https://www.youtube.com/embed/KUmbqmxFbLI"
                                    />
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="video-container">
                                    <span className="video-title">
                                        Video Title
                                    </span>
                                    <iframe
                                        className="carousel-video"
                                        title="First vid"
                                        src="https://www.youtube.com/embed/5w0ns_gf5ww"
                                    />
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="video-container">
                                    <span className="video-title">
                                        Video Title
                                    </span>
                                    <iframe
                                        className="carousel-video"
                                        title="First vid"
                                        width="420"
                                        height="315"
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
