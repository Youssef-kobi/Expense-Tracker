import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
	const saveExpenseDataHandler = (entredExpenseData) => {
		const expenseData = {
			id: Math.random().toString(),
			...entredExpenseData,
		}
		const expense = props
		expense.onAddExpense(expenseData)
	}

	const [Toggle, setToggle] = useState(false)
	const toggleHandler = () => {
		setToggle(!Toggle)
	}
	return (
		<div className='new-expense'>
			{Toggle === false ? (
				<button type='submit' onClick={toggleHandler}>
					Add Expense
				</button>
			) : (
				<div>
					<ExpenseForm
						onSaveExpenseData={saveExpenseDataHandler}
						onCancel={toggleHandler}
					/>
				</div>
			)}
		</div>
	)
}

NewExpense.propTypes = {}

export default NewExpense
