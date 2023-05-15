import styles from '../ExerciseLog.module.scss'

const TableHeader = () => {
	const arr = ['Previous', 'Weight & Repeat', 'Completed']

	return (
		<div className={styles.row}>
			{arr.map((e, index) => (
				<div key={'Table header ' + index}>
					<span>{e}</span>
				</div>
			))}
		</div>
	)
}

export default TableHeader
