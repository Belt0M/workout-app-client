import { $axios } from '../../api'

const WORKOUTS = '/workouts'

class WorkoutService {
	async getAll() {
		return $axios.get(WORKOUTS)
	}
	async getById() {
		return $axios.get(`${WORKOUTS}/${id}`)
	}

	async create(body) {
		return $axios.post(WORKOUTS, body)
	}

	async update(id, body) {
		return $axios.put(`${WORKOUTS}/${id}`, body)
	}

	async delete(id) {
		return $axios.put(`${WORKOUTS}/${id}`)
	}
}
export default new WorkoutService()