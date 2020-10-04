import React from 'react';
import CanvasDraw from 'react-canvas-draw';
import ToolBar from './components/toolbar/toolbar';
import ColourPalette from './components/colourpalette/colourpalette';
import SizeSlider from './components/sizeslider/sizeslider';
import './index.css';

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      brushColour: "#000",
      displayColourPalette: false,
      displaySizeSlider: false,
    }
  }

  displayColourPalette = () => {
    this.setState({
      displayColourPalette: !this.state.displayColourPalette,
      displaySizeSlider: false
    })
  }

  displaySizeSlider = () => {
    this.setState({
      displayColourPalette: false,
      displaySizeSlider: !this.state.displaySizeSlider
    })
  }

  changeColour = (colour) => {
    this.setState({brushColour: colour}, () => {
      console.log(this.state.brushColour);
    })
  }

  clearCanvas = () => {
    this.saveableCanvas.clear()
    this.setState({displayColourPalette: false})
  }

  render(){
    return (
      <div className="App">
          <ToolBar
          onClearButtonClick={this.clearCanvas}
          onColourPaletteClick={this.displayColourPalette}
          onResizeClick={this.displaySizeSlider}
        />


        <ColourPalette
          isVisible={this.state.displayColourPalette}
          onColourChoose={(colour) => this.changeColour(colour)}
          />
        <SizeSlider
          isVisible={this.state.displaySizeSlider}

        />


        <CanvasDraw
          ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
          canvasWidth="400"
          brushColor={this.state.brushColour}
          brushRadius="1"
          hideGrid="true"
        />

        <footer>
                <p> Created by Cherrie </p>
        </footer>

      </div>
    );
  }
}

export default App;
