import './NewCost.css'
import CostForm from './CostForm/CostForm';
import React, {useState} from 'react';
import AddCostButton from '../AddCostButon/AddCostButton';

const NewCost = (props) => {

    const [addMode, setAddMode]=useState(false)

    const addNewCostHandler = (newCost) => {
        let cost ={
            ...newCost,
            id: Math.random().toString(),
        }
        props.onAddCost(cost);
    }

    const addModeHandler=(mode)=>{
        setAddMode(mode)
      }


    return (
        <div className='new-cost'>
           {addMode && <CostForm onAddNewCost={addNewCostHandler} switchAddMode={addModeHandler} />} 
           {!addMode && <AddCostButton switchAddMode={addModeHandler}/>}
        </div>
    )


}

export default NewCost;