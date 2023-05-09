

import './App.css';
import Costs from './Components/Costs/Costs';
import NewCost from './Components/NewCost/NewCost';
import React, {useState} from 'react';

const itemsArray = [
  {
    id: 'c1',
    date: new Date(2022, 4, 14),
    description: 'холодильник',
    price: 999.99
  },
  {
    id: 'c2',
    date: new Date(2022, 10, 6),
    description: 'Iphone',
    price: 699.99
  },
  {
    id: 'c3',
    date: new Date(2023, 2, 14),
    description: 'штаны',
    price: 19.99
  },
];


function App() {

  const [costs, setCosts] = useState(itemsArray)
  

  
  const addCostHandler = (cost) => {
    setCosts(prevCosts =>{
      return [cost, ...prevCosts]
    })
  }

 

  return (
    <div className='app-wrapper'>
      <NewCost onAddCost={addCostHandler}  /> 
      <Costs itemsArray={costs} />
    </div>
  );
}

export default App;
