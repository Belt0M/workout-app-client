import { Alert } from '../../../ui/alert/Alert'
import Loader from '../../../ui/loader/Loader'

import Layout from '../../../layouts/Layout'
import styles from '../detail/Workout.module.scss'

import WorkoutItem from './WorkoutItem'
import { useWorkouts } from './useWorkouts'

const ListWorkouts = () => {
	const { data, isSuccess, mutate, isSuccessMutate, error, isLoading } =
		useWorkouts()

	return (
		<>
			<Layout bgImage='/images/workout-bg.jpg' heading='Workout list' />
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				{error && <Alert type='error' text={error} />}
				{isSuccessMutate && <Alert text='Workout log created' />}
				{isLoading && <Loader />}
				{isSuccess && (
					<div className={styles.wrapper}>
						{data.map(workout => (
							<WorkoutItem key={workout.id} workout={workout} mutate={mutate} />
						))}
					</div>
				)}

				{isSuccess && data?.length === 0 && (
					<Alert type='warning' text='Workouts not found' />
				)}
			</div>
		</>
	)
}

export default ListWorkouts
