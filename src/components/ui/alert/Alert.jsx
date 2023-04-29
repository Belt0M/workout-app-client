import cn from 'clsx'

import styles from './Alert.module.scss'

export const Alert = ({ text, type = 'success' }) => {
	return <div className={cn(styles.alert, styles[type])}>{text}</div>
}
