import Accordion from './Accordion.js';
import Header from './Header.js';
import AboutMe from './AboutMe.js';
import "../css/App.css"
import TopBar from './TopBar.js';

function App() { 
    return ( 
        <div>
            <TopBar />
            <Header />
            <AboutMe />
            <Accordion />
        </div>
    );
} 

export default App;