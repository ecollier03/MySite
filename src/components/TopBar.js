// import 'my-app/src/pictures/EC.svg'
import '../css/TopBar.css'
import HoverButton from './HoverButton.js'

function TopBar() {
    return (
        <div className="topBar">
            <h3 className="topBarName"> Ethan Collier</h3>
            <div>
                <HoverButton buttonText={"hover over me"} />
            </div>
        </div>
    );
};

export default TopBar;
