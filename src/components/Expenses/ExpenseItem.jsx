import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

const ExpenseItem = (props) => {
	const item = props
	const [title, setTitle] = useState(item.title)
	const titleHandler = () => {
		setTitle(title)
	}
	return (
		<Card className='expense-item'>
			<ExpenseDate date={item.date} />
			<div className='expense-item__description'>
				<h2>{item.title}</h2>
				<div className='expense-item__price'>${item.amount}</div>
			</div>
			<button type='button' onClick={titleHandler}>
				Change title
			</button>
		</Card>
	)
}
ExpenseDate.propTypes = {
	date: PropTypes.instanceOf(Date).isRequired,
}
export default ExpenseItem
