// import 'my-app/src/pictures/EC.svg'
import { useEffect, useRef, useState } from 'react';
import '../css/TopBar.css'
import { contents } from "../data/hoverButtonContent";
import HoverButton from './HoverButton.js'

function TopBar() {
    const [height, setHeight] = useState(0);
    const ref = useRef(null);

    useEffect(() => { // make sure the top bar can fit the number of hoverbuttons
        setHeight(ref.current.scrollHeight);
        console.log(`client height: ${height}`);
    }, [height]);

    return (
        <div className="topBar" style={{height: height}}>
                <h3 className="topBarName"> Ethan Collier</h3>
            {
            contents.map((content) => (
                <span className="inline" ref={ref}>
                <HoverButton contents={content} />
            </span>
            ))
            }
            

        </div>
    );
};

export default TopBar;
