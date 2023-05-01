import { Controller } from 'react-hook-form'
import ReactSelect from 'react-select'

import Loader from '../../ui/loader/Loader'

import { useListExercise } from './useListExercises'

export const SelectExercises = ({ control }) => {
	const { data, isLoading } = useListExercise()

	if (isLoading) return <Loader />

	return (
		<Controller
			name='exerciseIds'
			control={control}
			render={({ field: { value, onChange } }) => (
				<ReactSelect
					classNamePrefix='select2-selection'
					placeholder='Exercises...'
					title='Exercises'
					isMulti
					options={data.map(exercise => ({
						value: exercise.id,
						label: exercise.name
					}))}
					value={value}
					onChange={onChange}
				/>
			)}
		/>
	)
}
