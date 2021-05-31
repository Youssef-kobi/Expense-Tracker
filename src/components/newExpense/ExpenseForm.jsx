import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
	const fun = props
	const [userInput, setUserInput] = useState({
		entredTitle: '',
		entredAmount: '',
		entredDate: '',
	})
	const titleChangeHandler = (event) => {
		setUserInput((prevState) => {
			return { ...prevState, entredTitle: event.target.value }
		})
	}
	const amountChangeHandler = (event) => {
		setUserInput((prevState) => {
			return { ...prevState, entredAmount: event.target.value }
		})
	}
	const dateChangeHandler = (event) => {
		setUserInput((prevState) => {
			return { ...prevState, entredDate: event.target.value }
		})
	}
	const submitHandler = (event) => {
		event.preventDefault()

		const expenseData = {
			title: userInput.entredTitle,
			amount: Number(userInput.entredAmount),
			date: new Date(userInput.entredDate),
		}
		fun.onSaveExpenseData(expenseData)
		setUserInput({
			entredTitle: '',
			entredAmount: '',
			entredDate: '',
		})
	}
	// ExpenseDate.propTypes = {
	// 		date: PropTypes..isRequired,
	// 	}
	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>
						Title
						<input
							type='text'
							value={userInput.entredTitle}
							onChange={titleChangeHandler}
						/>
					</label>
				</div>
				<div className='new-expense__control'>
					<label>
						Amount
						<input
							type='number'
							min='0.01'
							step='0.01'
							value={userInput.entredAmount}
							onChange={amountChangeHandler}
						/>
					</label>
				</div>
				<div className='new-expense__control'>
					<label>
						Date
						<input
							type='date'
							min='2019-01-01'
							max='2022-12-31'
							value={userInput.entredDate}
							onChange={dateChangeHandler}
						/>
					</label>
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='button' onClick={fun.onCancel}>
					Cancel
				</button>
				<button type='submit'>Add</button>
			</div>
		</form>
	)
}

ExpenseForm.propTypes = {}

export default ExpenseForm
