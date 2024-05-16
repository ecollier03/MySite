import { faqs } from "../data/AccordionData";
import { useState } from "react";
import { useRef } from "react";

function Accordion() {

  const [clicked, setClicked] = useState("0");

  const handleToggle = (index) => {
   if (clicked === index) {
    return setClicked("0");
   }
   setClicked(index);
  };

  return (
    <ul className="accordion">
      {faqs.map((faq, index) => (
        <AccordionItem onToggle={() => handleToggle(index)} key={index} faq={faq} active={clicked === index}/>
      ))}
    </ul>
  );
};

function AccordionItem({ faq, onToggle, active}) {

  const accordianContent = useRef();

  return (
    <li className={`accordion_item ${active ? "active" : ""}`}>
      <button className="button" onClick={onToggle}>
        {faq.question}
      <span className="control">{active ? "-" : "+"}</span>
      </button>
      <ul 
        className={`answer_wrapper ${active ? "open" : ""}`}
        ref={accordianContent}
        style={
          active 
            ? {padding: "10px"} 
            : {padding: "0px", height: "0px"}}
      >
          {faq.answer.map(item =>
              <div key={item.text}>
                {item && item.link ? (
                  <a href = {item.link}>{item.text}</a>
                ) : (
                  <p>{item.text}</p>  
                )}
              </div>
          )}
      </ul>
    </li>
  );
}

export default Accordion;