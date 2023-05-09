import CostItem from "../../CostItem/CostItem";
import './CostList.css'

const CostsList = (props) => {

    if (props.costs.length === 0) {
        return (
            <h2 className="cost-list__fallback">В Этом году расходов не было</h2>
        )
    }
    else {
        return (
            <ul className="cost-list">
           {props.costs.map(item => <CostItem date={item.date}
                    key={item.id}
                    description={item.description}
                    price={item.price} />)}
            </ul>
        )
    }




}

export default CostsList;