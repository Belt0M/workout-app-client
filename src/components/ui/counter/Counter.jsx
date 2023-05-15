import { useProfile } from '../../../hooks/useProfile'

import styles from './Counter.module.scss'

const Counter = () => {
	const { data } = useProfile()

	return (
		<div className={styles.wrapper}>
			{data?.statistic?.map(s => (
				<div key={s.label}>
					<span>{s.label}</span>
					<p>{s.value}</p>
				</div>
			))}
		</div>
	)
}

export default Counter
