import styles from './Cards.module.css'
import clsx from 'clsx'

export default function Cards({ url, title, text }) {
    return (
        <a
            href={url}
            className={clsx(styles.card, 'group')}
        >
            <div className={clsx(styles.backgroundImage, 'group-hover:opacity-75 group-hover:transition-opacity duration-300 ease-in-out')} />
            <div className='opacity-0 group-hover:transition-opacity duration-300 ease-in-out group-hover:opacity-100 relative'>
                <h2>{title} &rarr; </h2>
                <p>{text}</p>
            </div>
        </a>
    )
}