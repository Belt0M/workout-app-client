import { $axios } from '../../api'

import { WORKOUTS } from './workout.service'

const LOG = `${WORKOUTS}/log`

class ExerciseLogService {
	async getById(id) {
		return $axios.get(`${LOG}/${id}`)
	}

	async create(workoutId) {
		return $axios.post(`${LOG}/${workoutId}`)
	}

	async updateTime(workoutLogId, body) {
		return $axios.put(`${LOG}/${workoutLogId}`, body)
	}

	async complete(id) {
		return $axios.put(`${LOG}/complete${id}`)
	}
}
export default new ExerciseLogService()
