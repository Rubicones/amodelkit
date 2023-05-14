import "./Title.sass";
import titlePhoto from "../../resourses/title-photo.jpg";
const Title = ({toScroll}) => {
    let orientation = window.matchMedia("(orientation: portrait)");
    return (
        <>
            <div className="screen">
                <section className="greetings-container">
                    <div className="light-text">Hey there,</div>
                    <h1 className="medium-text">I'm Maxim Popov</h1>
                    <h2 className="light-red-text">SOUND FOR VIDEO GAMES</h2>
                    {orientation.matches ? "" : <div className="description-text">
                        Being an artist myself, I'm always fully involved into
                        every aspect of music and audio production. Tailor-made
                        sound design, effects and music are equally essential in
                        commercial and art projects, and I'm experienced in
                        both.
                    </div>}
                    {orientation.matches ? "" : <button className="get-in-touch-btn" onClick={toScroll}>Get in touch</button>}
                    
                </section>
                {!orientation.matches ? "" : <button className="get-in-touch-btn" onClick={toScroll}>Get in touch</button>}
                <img className="title-image" src={titlePhoto} alt="me" />
            </div>
        </>
    );
};

export default Title;
