import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'
import Loader from '../../ui/loader/Loader'

import { useAuthPage } from '../../../hooks/useAuthPage'

import Layout from '../../layouts/Layout'

import styles from './Auth.module.scss'

const Auth = () => {
	const { register, handleSubmit, errors, setType, isLoading, onSubmit } =
		useAuthPage()
	return (
		<>
			<Layout heading='Sign in' bgImage='/images/auth-bg.png' />
			<div className='wrapper-inner-page'>
				{isLoading && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						register={register}
						name='email'
						error={errors?.email?.message}
						placeholder='example@ex.com'
						type='email'
						options={{ required: 'Email is required' }}
					/>
					<Field
						register={register}
						name='password'
						error={errors?.password?.message}
						placeholder='qwerty123'
						type='password'
						options={{ required: 'Password is required' }}
					/>
					<div className={styles.wrapperButtons}>
						<Button clickHandler={() => setType('login')}>Sign in</Button>
						<Button clickHandler={() => setType('register')}>Sign up</Button>
					</div>
				</form>
			</div>
		</>
	)
}

export default Auth
