import "./Projects.sass";

const Projects = () => {
    return (
        <>
            <div className="projects screen">
                <div className="projects-container">
                    <span className="title">
                    PROJECTS AND WORKS
                    </span>
                    <div className="carousel slide">
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExample"
                            data-bs-slide="prev"
                        >
                            <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <div className="carousel-inner">
                                <iframe
                                    title="First vid"
                                    width="420"
                                    height="315"
                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                />
                                <iframe
                                    title="First vid"
                                    width="420"
                                    height="315"
                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                />
                        </div>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExample"
                            data-bs-slide="next"
                        >
                            <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;
