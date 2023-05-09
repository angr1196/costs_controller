

import CostDate from '../CostDate/CostDate';
import './CostItem.css'

function CostItem(props) {



    return (
        <li>
            <div className="cost-item">
                <div className='cost-item__date'>
                    <CostDate date={props.date} />
                </div>
                <div className="cost-item__description">
                    <h2>{props.description}</h2>
                    <div className="cost-item__price">
                        ${props.price}
                    </div>
                </div>

            </div>
        </li>
    )
}

export default CostItem;