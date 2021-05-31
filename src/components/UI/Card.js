import './Card.css'

function Card(props) {
	const card = props
	const classes = `card ' + ${card.className}`
	return <div className={classes}>{card.children}</div>
}
export default Card
