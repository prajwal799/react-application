import logo from './logo.svg';
import './App.css';
import Button from './Component/Button'

function App() {
  return (
    <div className="App App-header">
     <Button title="A" type="Success"/>
     <Button title="B" type="Warning"/>   
     <Button title="C" type="error"/>
     <button className="button"> </button >
     
    </div>
  );
}

export default App;
