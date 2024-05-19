import React, { useState, useRef } from "react";
import { contents } from "../data/hoverButtonContent";
import "../css/TopBar.css"
import AnimateHeight from 'react-animate-height'


function HoverButton({ buttonText }) {

    const [isHovering, setHoverState] = useState(false);
    const [height, setHeight] = useState(0);


    const onHover = (hoverState) => {
        hoverState ? console.log("user is in the div") : console.log("user is out of the div");
        setHoverState(hoverState);
        setHeight(hoverState ? 'auto' : 0);
    }

    return (
        <div className="hoverButton" 
            onMouseEnter={() => onHover(true)}
            onMouseLeave={() => onHover(false)}>
            <button
                
                className="hoverButtonEntry"
            >
                {buttonText}
            </button>
            <AnimateHeight id="animatePanel" duration={500} height={height}>
                <HoverButtonContents textJson={contents} active={isHovering === true} />
            </AnimateHeight>
        </div>

    );
}

function HoverButtonContents({ textJson, active }) {
    console.log(`now active: ${active}`)
    return (
        <div
            className={`hoverButtonContainer`}>
            {
                textJson.content.map((faq) => (
                    <HoverButtonItem textJson={faq} />
                ))
            }
        </div>
    );
}

function HoverButtonItem({ textJson }) {
    return (
        <li>
            <button
                className="hoverButtonItems">
                {textJson.text}
            </button>
        </li>
    );

}

export default HoverButton;