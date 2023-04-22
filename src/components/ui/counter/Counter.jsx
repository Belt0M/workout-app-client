import styles from './Counter.module.scss'

const Counter = () => {
	return (
		<div className={styles.wrapper}>
			<div>
				<span>Minutes</span>
				<h4>20</h4>
			</div>
			<div>
				<span>Level</span>
				<h4>Hard</h4>
			</div>
			<div>
				<span>Up</span>
				<h4>5%</h4>
			</div>
		</div>
	)
}

export default Counter
