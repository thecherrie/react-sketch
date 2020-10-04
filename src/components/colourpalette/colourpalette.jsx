import React from 'react';
import './colourpalette.css';

export const ColourPalette = (props) => {

  const isVisible = props.isVisible;

  return (
    <div className="colour-palette"
    style={{visibility: isVisible ? "visible" : "hidden"}}>

    <div className="yellow" onClick={() => props.onColourChoose("yellow")} > </div>
    <div className="black" onClick={() => props.onColourChoose("black")}> </div>
    <div className="blue" onClick={() => props.onColourChoose("blue")}> </div>


    </div>
  );

}

export default ColourPalette;
