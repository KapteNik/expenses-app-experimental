import './ExpenseForm.css'
import React, {useState} from 'react';

export default function ExpenseForm(props) {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
    
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) =>{
        event.preventDefault();
    
        const expenseData ={
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }

    props.onSaveExpenseData(expenseData);
    
    console.log(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }


  return (
    <form>
        <div className='new-expense__controls' onSubmit={submitHandler}>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' 
                value={enteredTitle} 
                onChange={titleChangeHandler}
                />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number'
                value={enteredAmount} 
                min='0.01' step='0.01'
                onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date'
                value={enteredDate} 
                min="2020-01-01"
                max="2022-01-01"
                onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className='new-expense_actions'>
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type='submit' onClick={submitHandler}>Add Expense</button>
        </div>
    </form>
  )
}
