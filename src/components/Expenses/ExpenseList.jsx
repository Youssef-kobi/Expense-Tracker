import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpenseList.css'

function ExpenseList(props) {
	const items = props
	if (items.items.length === 1) {
		return <h2 className='expenses-list__fallback'>No Expenses Found</h2>
	}
	return (
		<ul className='expenses-list'>
			{items.items.map((expense) => (
				<ExpenseItem
					key={expense.id}
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
				/>
			))}
		</ul>
	)
}

export default ExpenseList
