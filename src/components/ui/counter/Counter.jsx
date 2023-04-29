import { useProfile } from '../../../hooks/useProfile'

import styles from './Counter.module.scss'

const Counter = () => {
	const { data } = useProfile()

	return (
		<div className={styles.wrapper}>
			{data?.statistic?.map(s => (
				<div key={s.label}>
					<span>{s.label}</span>
					<h4>{s.value}</h4>
				</div>
			))}
		</div>
	)
}

export default Counter
