import React from 'react'
import './ChartBar.css'

const ChartBar = (props) => {
	const bar = props
	let barFillHeight = '0%'
	if (bar.maxValue > 0) {
		barFillHeight = `${Math.round((bar.value / bar.maxValue) * 100)}%`
	}
	return (
		<div className='chart-bar'>
			<div className='chart-bar__inner'>
				<div className='chart-bar__fill' style={{ height: barFillHeight }} />
			</div>
			<div className='char-bar__label'>{bar.label}</div>
		</div>
	)
}

ChartBar.propTypes = {}

export default ChartBar
