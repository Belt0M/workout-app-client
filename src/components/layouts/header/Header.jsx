import { BiUser } from 'react-icons/bi'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { useLocation, useNavigate } from 'react-router-dom'

import { useAuth } from '../../../hooks/useAuth'

import Hamburger from '../hamburger/Hamburger'

import styles from './Header.module.scss'

const Header = ({ backLink = '' }) => {
	const { pathname } = useLocation()
	const navigate = useNavigate()

	const { isAuth } = useAuth()

	return (
		<header className={styles.header}>
			{isAuth && (
				<>
					{pathname !== '/' ? (
						<button
							onClick={() => {
								navigate(isAuth ? backLink : '/auth')
							}}
						>
							<HiArrowNarrowLeft />
						</button>
					) : (
						<button
							onClick={() => {
								navigate('/profile')
							}}
						>
							<BiUser />
						</button>
					)}
					<Hamburger />
				</>
			)}
		</header>
	)
}

export default Header
