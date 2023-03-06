
import { useEffect, useState } from 'react';
import './App.css';
import Items from './Items';

function App() {
  const [searchinput, setsearchinput]= useState("pizza");
  const [input, setinput]=useState("");
  const [items, setItems] = useState([])
  useEffect(()=>{
    fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchinput}&app_id=d0d7bc25&app_key=8b2bff8bc01f609505a0f1b701111946`)
    .then(response=>response.json())
    .then(json=>setItems(json.hits))
  },[searchinput])
  return (
    <>
      <div className='App'>
        <div className='inputbox'>
        <input type='text' value={input} onChange={(e)=>{setinput(e.target.value)}}></input>
        <button onClick={()=>{setsearchinput(input)}}>search</button>
        </div>
        <div className='listofitems'>{items.map((item)=>{
        return (<Items img={item.recipe.image} label={item.recipe.label} url={item.recipe.uri}/>)
        })}</div>
      </div>      
      
    </>
  );
}

export default App;
