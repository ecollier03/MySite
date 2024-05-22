import "../css/AboutMe.css"
import { strings } from "../data/Strings.js"

function AboutMe() {
    return (
        <div class="card">
            <h2 class="about-me-header">About Me</h2>
            <div>
                {strings.AboutMeBody.text}
            </div>
        </div>
    );

};
export default AboutMe;