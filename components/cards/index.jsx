import styles from './Cards.module.css'
import clsx from 'clsx'
import { useQuery } from 'react-query'

export default function Cards({ url, title, text }) {
    const cards_query = useQuery('CARDS', async () => await (await fetch('https://api.unsplash.com/photos/?client_id=rL_5c3JZU0epYcJVGrn1HHWpmFd_Uor1zirS2ZfHG9c')).json())

    console.log(cards_query.data)
 
    return (
        <a
            href={url}
            className={clsx(styles.card, 'group')}
        >
            {/*<div className={clsx(styles.backgroundImage, 'group-hover:opacity-75 group-hover:transition-opacity duration-300 ease-in-out')}/>*/}


            <div className='opacity-0 group-hover:transition-opacity duration-300 ease-in-out group-hover:opacity-100 relative'>
                <h2>{title} &rarr; </h2>
                <p>{text}</p>
            </div>
        </a>
    )
}
