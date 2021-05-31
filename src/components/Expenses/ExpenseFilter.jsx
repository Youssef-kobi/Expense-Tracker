import React from 'react'
import './ExpenseFilter.css'

function ExpenseFilter(props) {
	const filter = props
	const dropDownchangeHandler = (event) => {
		filter.onChangeFilter(event.target.value)
	}
	return (
		<div className='expenses-filter'>
			<div className='expenses-filter__control'>
				<label>
					Filter by Year
					<select value={filter.selected} onChange={dropDownchangeHandler}>
						<option value='2022'>2022</option>
						<option value='2021'>2021</option>
						<option value='2020'>2020</option>
						<option value='2019'>2019</option>
					</select>
				</label>
			</div>
		</div>
	)
}

ExpenseFilter.propTypes = {}

export default ExpenseFilter
