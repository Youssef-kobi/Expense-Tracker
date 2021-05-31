import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css'

const Chart = (props) => {
	const Data = props
	const dataPointValues = Data.dataPoints.map((dataPoint) => dataPoint.value)
	const totalMax = Math.max(...dataPointValues)
	return (
		<div className='chart'>
			{Data.dataPoints.map((dataPoint) => (
				<ChartBar
					key={dataPoint.label}
					value={dataPoint.value}
					maxValue={totalMax}
					label={dataPoint.label}
				/>
			))}
		</div>
	)
}

Chart.propTypes = {}

export default Chart
