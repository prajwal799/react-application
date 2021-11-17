import logo from './logo.svg';
import './App.css';
import Button from './Component/Button'
import Item  from './Grocery/ListItems';
import Header from './Grocery/ListHeader';
import redLabel from './Grocery/CategoryItem.jpg'

function App() {
  return (
    <div>
      <ul>
      <Item  item={'unordered list'}/>
      <Item  item={'rin'}/>
      <Item  item={'red Label'}/>
       <Item  item={'Sur excel'}/>
      </ul>
      <Header  title={'Grocery'}/>
      <img  src={redLabel} style={{width:'200px',height:'200px',marginLeft:'44%'}} alt="react"/>
    </div>
  );
}

export default App;
