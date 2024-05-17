import { faqs } from "../data/AccordionData";
import { useState, useRef } from "react";
import AnimateHeight from 'react-animate-height'
import "../css/Accordion.css"


function Accordion() {

  const [height, setHeight] = useState('auto');
  const [clicked, setClicked] = useState("0");
  const [isRotated, setIsRotated] = useState(true);

  const onOpen = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };
  
  const expandButtonClicked = () => {
    setHeight(height === 0 ? 'auto' : 0); onOpen(-1); setIsRotated(!isRotated)
  };

  return (
    <div
      className="accordion">
      <button
        onClick={() => { expandButtonClicked() }}
        className="toggleButton"
      >
        <span
          style={{
            transform: isRotated ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
          }}>
          ^
        </span>

      </button>
      <AnimateHeight id="animatePanel" duration={500} height={height}>
        <AccordionButtons onOpen={onOpen} clicked={clicked} />
      </AnimateHeight>
    </div>
  );
};

function AccordionButtons({ onOpen, clicked }) {
  return (
    <ul
      className="accordionButtons"
    >
      {faqs.map((faq, index) => (
        <AccordionItem onOpen={onOpen} index={index} faq={faq} active={clicked === index} />
      ))}
    </ul>
  );
};

function AccordionItem({ faq, onOpen, active, index }) {

  const contentEl = useRef(null);
  console.log(`${index} is ${active}`);

  return (
    <li className={`accordion_item ${active ? "active" : ""}`}>

      <button className="button" onClick={() => onOpen(index)}>
        <span className="text">{faq.question}</span>
        <span className="control">{active ? "-" : "+"}</span>
      </button>
      <div
        className={`answer_wrapper ${active ? "open" : ""}`}
        ref={contentEl}
        style={
          active
            ? { height: contentEl.current.scrollHeight + 10 }
            : { height: "0px" }}>
        <ul>
          {faq.answer.map(item =>
            <div className="answer-content" key={item.text}>
              {item && item.link ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer">{item.text}</a>
              ) : (
                <p>{item.text}</p>
              )}
            </div>
          )}
        </ul>
      </div>

    </li>
  );
};

export default Accordion;