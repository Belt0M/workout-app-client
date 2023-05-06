import cn from 'clsx'

import stylesLayout from '../../../layouts/Layout.module.scss'
import Header from '../../../layouts/header/Header'

import styles from './Workout.module.scss'

const HeaderWorkout = ({ isSuccess, workoutLog }) => {
	return (
		<div
			className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
			style={{
				backgroundImage: `url('/images/workout-bg.jpg')`,
				height: 356
			}}
		>
			<Header backLink='/workouts' />

			{isSuccess && (
				<div>
					<time className={styles.time}>{workoutLog.minutes + ' min.'}</time>
					<h1 className={stylesLayout.heading}>{workoutLog.workout.name}</h1>
				</div>
			)}
		</div>
	)
}

export default HeaderWorkout
