import React, { useState } from 'react'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
import ExpenseList from './ExpenseList'
import './Expenses.css'

function Expenses(props) {
	const expenses = props
	const [FilteredYear, setFiltredYear] = useState('2020')
	const filterChangeHandler = (selectedYear) => {
		setFiltredYear(selectedYear)
	}
	const filtredExpenses = expenses.items.filter((expense) => {
		return expense.date.getFullYear().toString() === FilteredYear
	})
	return (
		<Card className='expenses'>
			<ExpenseFilter
				selected={FilteredYear}
				onChangeFilter={filterChangeHandler}
			/>
			<ExpenseList items={filtredExpenses} />
		</Card>
	)
}

export default Expenses
