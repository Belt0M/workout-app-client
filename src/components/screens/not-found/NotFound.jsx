import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '../../../hooks/useAuth'

import Layout from '../../layouts/Layout'

const NotFound = () => {
	const { isAuth } = useAuth()

	const navigate = useNavigate()

	useEffect(() => {
		if (!isAuth) {
			navigate('/auth')
		}
	}, [])

	return (
		<>
			<Layout heading='Page Not Found' />
			<div className='wrapper-inner-page'>404 page not found</div>
		</>
	)
}

export default NotFound
