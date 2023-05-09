import './Diagram.css'
import DiagramBar from './DiagramBar/DiagramBar.jsx'


const Diagram = (props) => {

    const dataItemsValues = props.dataItems.map(item=>item.value);

    const maxMonthCost = Math.max(...dataItemsValues);

    return (
        <div className='diagram'>
            {props.dataItems.map(item => <DiagramBar value={item.value}
                key={item.label}
                maxValue={maxMonthCost}
                label={item.label} />)}
        </div>
    )


}

export default Diagram;