import axios from 'axios'
import { BASE_URL } from './index'

const getToken = () => localStorage.getItem('token')

const axiosClient = axios.create({
	baseURL: BASE_URL,
})

axiosClient.interceptors.request.use(async config => {
	return {
		...config,
		headers: {
			'Content-Type': 'application/json',
			'authorization': `Bearer ${getToken()}`
		}
	}
})

axiosClient.interceptors.response.use(response => {
	if (response && response.data) return response
	return response
}, err => {
	if (!err.response) {
		return alert(err)
	}
	throw err.response
})

export default axiosClient