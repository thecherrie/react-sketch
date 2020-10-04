import React from 'react';
import './sizeslider.css';

export const SizeSlider = (props) => {

  const isVisible = props.isVisible;

  return (
    <div className="size-slider"
    style={{visibility: isVisible ? "visible" : "hidden"}}>

    <p> Brush size slider coming soon </p>


    </div>
  );

}

export default SizeSlider;
