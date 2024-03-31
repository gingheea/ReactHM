import React from "react";
import './App.css';

class Button extends React.Component {
  render() {
    const handler = () => 
    {
      fetch('https://api.quotable.io/quotes/random')
      .then(response => response.json())
      .then(data => 
      {
        this.props.onClickAct("Quote: "+data[0].content + " Author: " + data[0].author);
      })
      .catch(error => console.error('Error:', error));
     
      
    };
    return (
      <button onClick={handler}>
       Click me
      </button>
    );
  }
}

class MyDiv extends React.Component 
{
  render() {
    return (
      <div>{this.props.message}</div>
    );
  }
}
function App() {
  const [displayMes, setDisplayMes] = React.useState("");

  const stateFunc = (newBkColor) => { setDisplayMes(newBkColor); };
 

  return (
    <div className="App">
      <Button onClickAct={stateFunc}  />
      <MyDiv message={displayMes} />
    </div>
  );
}

export default App;
