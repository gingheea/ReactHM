import React from "react";
import './App.css';

class Button extends React.Component {
  render() {
    const handler = () => {
      this.props.onClickAct(this.props.bkColor);
      this.props.onClickAct2(this.props.color);
    };
    return (
      <button onClick={handler} style={{ backgroundColor: this.props.bkColor, color: this.props.color }}>
        {this.props.text}
      </button>
    );
  }
}

class MyDiv extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: this.props.bkColor,color:this.props.color}}>Some text</div>
    );
  }
}

function App() {
  const [displayBkColor, setDisplayBkColor] = React.useState("white");
  const [displayColor, setDisplayColor] = React.useState("black");

  const stateFunc = (newBkColor) => { setDisplayBkColor(newBkColor); };
  const stateFunc2 = (newColor) => { setDisplayColor(newColor); };

  return (
    <>
      <Button bkColor="red" color="green" text="Red" onClickAct={stateFunc} onClickAct2={stateFunc2} />
      <Button bkColor="green" color="red" text="Green" onClickAct={stateFunc} onClickAct2={stateFunc2} />
      <Button bkColor="yellow" color="blue" text="Yellow" onClickAct={stateFunc} onClickAct2={stateFunc2} />
      <MyDiv bkColor={displayBkColor} color={displayColor}/>
    </>
  );
}

export default App;
