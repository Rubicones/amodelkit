import "./Skills.sass";
import skillsPhoto from "../../resourses/skills-photo.jpg";
const Skills = () => {
    let orientation = window.matchMedia("(orientation: portrait)");

    return (
        <>
            <div className="screen">
            {orientation.matches ? <span className="heading">Skills & Abilities</span> : ""}
                <section className="skills-container">
                    {!orientation.matches ? <span className="heading">Skills & Abilities</span> : ""}
                    <ul className="apps">
                        <li className="app">Ableton Live</li>
                        <li className="app">Wwise</li>
                        <li className="app">FMOD</li>
                        <li className="app">Unity</li>
                        <li className="app">DaVinci Resolve</li>
                        <li className="app">Adobe Audition</li>
                    </ul>
                    <ul className="skills-list">
                        <li className="skill">Sound design</li>
                        <li className="skill">Game Audio</li>
                        <li className="skill">Foley Reckording</li>
                        <li className="skill">SFX</li>
                        <li className="skill">Audio Editing</li>
                        <li className="skill">Music composition</li>
                        <li className="skill">
                            Tecnical sound design and <br/>implementation
                        </li>
                        <li className="skill">C#</li>
                    </ul>
                </section>
                <img
                    className="skills-image"
                    src={skillsPhoto}
                    alt="headphones"
                />
            </div>
        </>
    );
};

export default Skills;
