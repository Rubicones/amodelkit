import "./Music.sass";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Music = () => {
    return (
        <>
            <div className="music screen">
                <div className="music-container">
                    <span className="title">Music</span>
                    <div className="carousel-container">
                        <Splide
                            aria-label="music"
                            options={{
                                rewind: true,
                                perPage: 2,
                                gap: "1vw",
                                pagination: false,
                                fixedHeight: "40vw",
                            }}
                        >
                            <SplideSlide>
                                <div className="video-container">
                                    <iframe
                                        className="audioFrame"
                                        title="ODA Soundtrack"
                                        scrolling="no"
                                        frameBorder="no"
                                        allow="autoplay"
                                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1127856454&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                                    ></iframe>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="video-container">
                                    <iframe
                                        className="audioFrame"
                                        title="ODA Soundtrack"
                                        scrolling="no"
                                        frameborder="no"
                                        allow="autoplay"
                                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1127856454&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                                    ></iframe>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="video-container">
                                    <iframe
                                        className="audioFrame"
                                        title="ODA Soundtrack"
                                        scrolling="no"
                                        frameborder="no"
                                        allow="autoplay"
                                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1127856454&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                                    ></iframe>
                                </div>
                            </SplideSlide>
                        </Splide>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Music;
