import './CostForm.css'
import { useState } from 'react';

const CostForm = (props) => {

    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [price, setPrice] = useState('')

    const descriptionChangeHandler = (event) => {
        setDescription(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setDate(event.target.value)
    }

    const priceChangeHandler = (event) => {
        setPrice(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        let data = {
            description: description,
            date: new Date(date),
            price: price
        };

        setDescription('');
        setPrice('');
        setDate('');

        props.onAddNewCost(data);
        props.switchAddMode(false)

    }

    const onCancelHndler =()=>{
        props.switchAddMode(false)

    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-cost__controls">
                <div className="new-cost__control">
                    <label>Название</label>
                    <input type="text" value = {description} onChange={descriptionChangeHandler} />
                </div>
                <div className="new-cost__control">
                    <label>Сумма</label>
                    <input type='number' value={price} onChange={priceChangeHandler} />
                </div>
                <div className="new-cost__control">
                    <label>Дата</label>
                    <input type='date' value={date} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-cost__actions'>
                <button type="submit">Добавить расход</button>
                <button onClick={onCancelHndler}>Отмена</button>
            </div>
        </form>

    )

}

export default CostForm;