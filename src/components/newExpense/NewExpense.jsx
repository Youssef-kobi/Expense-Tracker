import React from 'react'
// import PropTypes from 'prop-types'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
	const saveExpenseDataHandler = (entredExpenseData) => {
		const expenseData = {
			id: Math.random().toString(),
			...entredExpenseData,
		}
		console.log(expenseData)
		const expense = props
		expense.onAddExpense(expenseData)
	}
	return (
		<div className='new-expense'>
			<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
		</div>
	)
}

NewExpense.propTypes = {}

export default NewExpense
