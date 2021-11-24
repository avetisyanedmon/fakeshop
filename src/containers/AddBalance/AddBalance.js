import { useDispatch } from "react-redux";
import { addBalance } from "../../redux/actions";
import { useState } from "react";

const AddBalance = () => {

    const [inputValue, setInputValue] = useState('')
    const dispatch = useDispatch();

    const add = (inputValue) => {
        if(inputValue > 0){
            dispatch(addBalance(inputValue))
        } else{
            alert('Value should be bigger 0!!!')
        }
    }

    return (
        <div>
            <input onChange={(e) => setInputValue(e.target.value)} type='number'/>
            <button onClick={() => add(inputValue)}>Add</button>
        </div>
    )
}

export default AddBalance;