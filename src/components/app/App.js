import "./App.css";
import "./App.sass";
import Title from "../title/Title";
import Skills from "../skills/Skills";
import Projects from "../projects/Projects";
import Music from "../music/Music";
import Form from "../form/Form";
import Games from "../games/Games";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

function App() {
    library.add(fab);

    const [callScroll, setCallScroll] = useState(false);

    const onScroll = () => {
        setCallScroll(true);
    };

    const footerIconClick = (destination) => {
        switch (destination) {
            default:
                break;
            case "soundcloud":
                window.open("https://soundcloud.com/amodelkit");
                break;
            case "youtube":
                window.open("https://www.youtube.com/@amodelkit");
                break;
            case "instagram":
                window.open(
                    "https://instagram.com/a_model_kit?igshid=YmMyMTA2M2Y="
                );
                break;
        }
    };

    return (
        <>
            <div className="scrollContainer">
                <Title toScroll={onScroll} />
                <Skills />
                <Projects />
                <Music />
                <Games/>
                <Form scrollHere={callScroll} scrolled={setCallScroll} />

                <footer>
                    <FontAwesomeIcon
                        icon="fa-brands fa-soundcloud"
                        style={{ color: "#ffffff" }}
                        onClick={() => footerIconClick("soundcloud")}
                    />
                    <FontAwesomeIcon
                        icon="fa-brands fa-youtube"
                        style={{ color: "#ffffff" }}
                        onClick={() => footerIconClick("youtube")}
                    />
                    <FontAwesomeIcon
                        icon="fa-brands fa-instagram"
                        style={{ color: "#ffffff" }}
                        onClick={() => footerIconClick("instagram")}
                    />
                </footer>
            </div>
        </>
    );
}

export default App;
