import { useMutation } from '@tanstack/react-query'
import cn from 'clsx'
import { Controller, useForm } from 'react-hook-form'

import { Alert } from '../../ui/alert/Alert'
import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'
import Loader from '../../ui/loader/Loader'

import ExerciseService from '../../../services/exercises/exercise.service'
import Layout from '../../layouts/Layout'

import styles from './NewExercise.module.scss'
import { getIconPath } from './icon-path.util'

const data = ['chest', 'shoulders', 'biceps', 'legs', 'hit', 'back']

const NewExercise = () => {
	const { isSuccess, error, isLoading, mutate } = useMutation(
		['create exercise'],
		body => ExerciseService.create(body),
		{ onSuccess: () => reset() }
	)

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		control
	} = useForm({
		mode: 'onChange'
	})

	const onSubmit = data => {
		mutate(data)
	}

	return (
		<>
			<Layout
				heading='Create exercise'
				bgImage='/images/new-exercise-bg.jpg'
				backLink='/new-workout'
			/>
			<div className='wrapper-inner-page'>
				{error && <Alert type='error' text={error} />}
				{isSuccess && <Alert text='Exercise created' />}
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
					<Field
						register={register}
						name='muscle'
						error={errors?.muscle?.message}
						placeholder='Enter muscle'
						type='text'
						options={{
							required: 'muscle is required'
						}}
					/>
					<Field
						register={register}
						name='times'
						error={errors?.times?.message}
						placeholder='Enter times'
						type='number'
						options={{
							valueAsNumber: true,
							validate: value => value > 0 || 'Times must be a positive number',
							required: 'Times is required'
						}}
					/>
					<Controller
						name='iconPath'
						control={control}
						render={({ field: { value, onChange } }) => (
							<div className={styles.images}>
								{data.map(name => (
									<img
										key={`ex img ${name}`}
										src={`${import.meta.env.VITE_SERVER_URL}${getIconPath(
											name
										)}`}
										alt={name}
										className={cn({
											[styles.active]: value === getIconPath(name)
										})}
										onClick={() => onChange(getIconPath(name))}
										draggable={false}
										height='45'
									/>
								))}
							</div>
						)}
					/>

					<div className={styles.wrapperButtons}>
						<Button>Add</Button>
					</div>
				</form>
			</div>
		</>
	)
}

export default NewExercise
