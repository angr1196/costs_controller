
import CostItem from '../CostItem/CostItem';
import CostsFilter from '../CostsFilter/CostsFilter';
import './Costs.css'
import { useState } from 'react';
import CostsList from './CostsList/CostsList';
import CostsDiagram from '../CostsDiagram/CostsDiagram';

let Costs = (props) => {


    const [filterYear, setFilterYear] = useState('2023')

    const changeYearHandler = (year) => {
        setFilterYear(year);
        console.log(filterYear)
    }

    const filteredByYearCosts = props.itemsArray.filter(item =>item.date.getFullYear().toString()===filterYear);

    return (
        <div>
            <CostsFilter year={filterYear} onChangeYear={changeYearHandler} />
            <div className='costs'>
                <CostsDiagram costs={filteredByYearCosts}/>
                <CostsList costs={filteredByYearCosts}/>
            </div>
        </div>
    )

}

export default Costs;