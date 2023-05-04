import "./App.css";
import "./App.sass";
import Title from "../title/Title";
import Skills from "../skills/Skills";
import Projects from "../projects/Projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
function App() {
    library.add(fab);

    return (
        <>
            <div className="scrollContainer">
                <header>
                    <button className="contact-me">Contact me</button>
                </header>

                <Title />
                <Skills/>
                <Projects/>
                <footer>
                    <FontAwesomeIcon
                        icon="fa-brands fa-soundcloud"
                        style={{ color: "#ffffff" }}
                    />
                    <FontAwesomeIcon
                        icon="fa-brands fa-youtube"
                        style={{ color: "#ffffff" }}
                    />
                    <FontAwesomeIcon
                        icon="fa-brands fa-instagram"
                        style={{ color: "#ffffff" }}
                    />
                </footer>
            </div>
        </>
    );
}

export default App;
