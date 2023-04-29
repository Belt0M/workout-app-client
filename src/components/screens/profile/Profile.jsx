import cn from 'clsx'

import Counter from '../../ui/counter/Counter'
import Loader from '../../ui/loader/Loader'

import { useProfile } from '../../../hooks/useProfile'

import stylesLayout from '../../layouts/Layout.module.scss'
import Header from '../../layouts/header/Header'

import styles from './Profile.module.scss'

const Profile = ({ bgImage }) => {
	const { data, isLoading } = useProfile()
	return (
		<>
			<div
				className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
				style={{
					backgroundImage: `url('/images/profile-bg.jpg')`,
					height: 356
				}}
			>
				<Header />
				<div className={styles.center}>
					{isLoading ? (
						<Loader />
					) : (
						<>
							<img
								src='/images/header/user.svg'
								alt='Profile'
								height='56'
								draggable='false'
							/>
							<h1 className={stylesLayout.heading}>{data?.email}</h1>
						</>
					)}
				</div>
				<Counter />
			</div>
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<div className={styles.before_after}>
					{data?.images?.map((image, index) => (
						<div key={image}>
							<div className={styles.heading}>
								{index === 1 ? 'After' : 'Before'}
							</div>
							<img
								src={image}
								alt='Before & After'
								draggable={false}
								style={{ borderRadius: 14 }}
							/>
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default Profile
