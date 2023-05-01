import { Link } from 'react-router-dom'

import { Alert } from '../../ui/alert/Alert'
import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'
import Loader from '../../ui/loader/Loader'

import Layout from '../../layouts/Layout'

import { SelectExercises } from './SelectExercises'
import { useNewWorkout } from './useNewWorkout'

const data = ['chest', 'shoulders', 'biceps', 'legs', 'hit', 'back']

const NewWorkout = () => {
	const {
		isSuccess,
		error,
		isLoading,
		register,
		handleSubmit,
		errors,
		control,
		onSubmit
	} = useNewWorkout()

	return (
		<>
			<Layout heading='Create workout' bgImage='/images/new-workout-bg.jpg' />
			<div className='wrapper-inner-page'>
				{error && <Alert type='error' text={error} />}
				{isSuccess && <Alert text='Workout created successfully' />}
				{isLoading && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						register={register}
						name='name'
						error={errors?.name?.message}
						placeholder='Enter name'
						type='text'
						options={{
							required: 'Name is required'
						}}
					/>
					<Link to='/new-exercise' className='dark-link'>
						Add new exercise
					</Link>
					<SelectExercises control={control} />
					<Button>Create</Button>
				</form>
			</div>
		</>
	)
}

export default NewWorkout
