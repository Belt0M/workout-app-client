import { useQuery } from '@tanstack/react-query'

import ExerciseService from '../../../services/exercises/exercise.service'

export const useListExercise = () =>
	useQuery(['list exercise'], () => ExerciseService.getAll(), {
		select: ({ data }) => data
	})
