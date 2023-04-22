import { useMutation } from '@tanstack/react-query'
import { useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import AuthService from '../services/auth.service'

import { useAuth } from './useAuth'

export const useAuthPage = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm({
		mode: 'onChange'
	})

	const { isAuth, setIsAuth } = useAuth()
	const navigate = useNavigate()

	useEffect(() => {
		if (isAuth) navigate('/')
	}, [isAuth])

	const [type, setType] = useState('login')

	const { mutate, isLoading } = useMutation(
		['auth'],
		({ email, password }) => AuthService.main(email, password, type),
		{
			onSuccess: () => {
				setIsAuth(true)
				reset()
			}
		}
	)

	const onSubmit = data => {
		mutate(data)
	}

	return useMemo(
		() => ({
			register,
			handleSubmit,
			errors,
			setType,
			isLoading,
			onSubmit
		}),
		[errors, isLoading]
	)
}
