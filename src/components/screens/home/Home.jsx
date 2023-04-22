import { useNavigate } from 'react-router-dom'

import Button from '../../ui/button/Button'
import Counter from '../../ui/counter/Counter'

import Layout from '../../layouts/Layout'

import styles from './Home.module.scss'

function Home() {
	const navigate = useNavigate()

	return (
		<Layout bgImage='/images/home-bg2.jpg'>
			<Button clickHandler={() => navigate('/new-workout')}>New</Button>
			<h1 className={styles.heading}>Today's Sweat, Tomorrow's Success</h1>
			<Counter />
		</Layout>
	)
}

export default Home
