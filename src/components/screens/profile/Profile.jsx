import { BiUser } from 'react-icons/bi'

import Counter from '../../ui/counter/Counter'

import Layout from '../../layouts/Layout'

import styles from './Profile.module.scss'

const Profile = () => {
	return (
		<>
			<Layout bgImage={'/images/profile-bg.jpg'} heading='beltom@gmail.com'>
				<BiUser />
				<Counter />
			</Layout>
			<section className={styles['images-wrapper']}>
				<div>
					<span>Before</span>
					<img src='/images/before.jpg' />
				</div>
				<div>
					<span>After</span>
					<img src='/images/after.jpg' />
				</div>
			</section>
		</>
	)
}

export default Profile
