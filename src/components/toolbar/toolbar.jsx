import React from 'react';
import './toolbar.css';
import { BiBrush } from 'react-icons/bi';
import { MdColorLens } from 'react-icons/md';
import { IoMdResize } from 'react-icons/io'


export const ColourPalette = ({show}) => {

}

export const ToolBar = (props) => {

  return (
    <>

      <div className="toolbar">
        <button
         className="toolbar-button"
         onClick={props.onClearButtonClick}
        >
          <BiBrush
          size="2em"
          color="gray" />
        </button>

        <button
         className="toolbar-button"
         onClick={props.onColourPaletteClick}
        >
          <MdColorLens
          size="2em"
          color="gray" />
        </button>

        <button
         className="toolbar-button"
         onClick={props.onResizeClick}
        >
          <IoMdResize
          size="2em"
          color="gray" />
        </button>

      </div>
    </>
  );
}

export default ToolBar;
