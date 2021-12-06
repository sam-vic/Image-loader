import styles from './button.module.css'
import clsx from 'clsx'

export default function Button({ children, className, height, onClick, ...props }) {
    return (
        <button
            onClick={onClick}
            {...props}
            style={{ height }}
            className={clsx(styles.baseColor, className, 'w-full bg-yellow-800')}
        >
            {children}
        </button>
    )
}
