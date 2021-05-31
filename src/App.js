import React, { useState } from 'react'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/newExpense/NewExpense'

const DUMMY_EXPENSES = [
	{
		id: 'e1',
		title: 'toilet paper',
		amount: 94.17,
		date: new Date(2020, 2, 14),
	},
	{
		id: 'e2',
		title: 'new tv',
		amount: 200,
		date: new Date(2020, 4, 14),
	},
	{
		id: 'e3',
		title: 'Car insurance',
		amount: 100,
		date: new Date(2019, 3, 14),
	},
	{
		id: 'e4',
		title: 'New Desk',
		amount: 400,
		date: new Date(2020, 9, 1),
	},
]
const App = () => {
	const [expenses, setexpenses] = useState(DUMMY_EXPENSES)
	const addExpenseHandler = (expense: any) => {
		setexpenses((prevExpenses: any) => {
			return [expense, ...prevExpenses]
		})
	}
	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={expenses} />
		</div>
	)
}
export default App
