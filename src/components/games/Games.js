import "./Games.sass";
import noirePoster from '../../resourses/noire.png'
import odaPoster from '../../resourses/oda.png'
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Games = () => {
    if (!window.matchMedia("(orientation: portrait)").matches)
        return (
            <>
                <div className="games screen">
                    <div className="games-container">
                        <span className="title">TITLES PRODUCED</span>
                        <div className="inner-container">
                            <div className="game">
                                <img src={noirePoster} alt="noire game poster" className="poster" />
                                <div className="medium-text">Noire</div>
                                <div className="light-text">Genre: Metroidvania</div>
                                <div className="light-text">Role: Technical Sound Designer, Music Composer</div>
                                <a href="https://jacobstaffordmusic.itch.io/noire" rel="noreferrer" className="game-link light-text" target="_blank">Link</a>
                            </div>
                            <div className="game">
                                <img src={odaPoster} alt="oda game poster" className="poster" />
                                <div className="medium-text">Oda</div>
                                <div className="light-text">Genre: Puzzle</div>
                                <div className="light-text">Role: Technical Sound Designer, Music Composer</div>
                                <a href="https://store.steampowered.com/app/1142240/ODA/" rel="noreferrer" className="game-link light-text" target="_blank">Link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        ) 
    else 
        return (
            <>
                <div className="games screen">
                    <div className="games-container">
                        <span className="title">TITLES PRODUCED</span>
                        <div className="inner-container">
                            <Splide aria-label="projects"
                                    options={{
                                        rewind: true,
                                        perPage: 1,
                                        pagination: false,
                                        // height: "60vh",

                            }}>
                                <SplideSlide>
                                    <div className="game">
                                        <img src={noirePoster} alt="noire game poster" className="poster" />
                                        <div className="medium-text">Noire</div>
                                        <div className="light-text">Genre: Metroidvania</div>
                                        <div className="light-text">Role: Technical Sound Designer, Music Composer</div>
                                        <a href="https://jacobstaffordmusic.itch.io/noire" rel="noreferrer" className="game-link light-text" target="_blank">Link</a>
                                    </div>
                                </SplideSlide>
                                <SplideSlide>
                                    <div className="game">
                                        <img src={odaPoster} alt="oda game poster" className="poster" />
                                        <div className="medium-text">Oda</div>
                                        <div className="light-text">Genre: Puzzle</div>
                                        <div className="light-text">Role: Technical Sound Designer, Music Composer</div>
                                        <a href="https://store.steampowered.com/app/1142240/ODA/" rel="noreferrer" className="game-link light-text" target="_blank">Link</a>
                                    </div>
                                </SplideSlide>
                            </Splide>
                        </div>
                    </div>
                </div>
            </>
        ) 
};

export default Games;
