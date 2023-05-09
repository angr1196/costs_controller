

const AddCostButton=(props)=>{

 const turnOnModeHandler=()=>{
    props.switchAddMode(true)
 }


    return(
        <div>
            <button onClick={turnOnModeHandler}>Добавить новый расход</button>
        </div>
    )

}

export default AddCostButton;