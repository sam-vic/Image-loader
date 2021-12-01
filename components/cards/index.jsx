import styles from './Cards.module.css'
import clsx from 'clsx'
import { useQuery } from 'react-query'

export default function Body() {
    const cards_query = useQuery('CARDS', async () => await (await fetch('https://api.unsplash.com/photos/?client_id=rL_5c3JZU0epYcJVGrn1HHWpmFd_Uor1zirS2ZfHG9c')).json())
    const info = cards_query.data || []
    console.log(info)

    return (
        <div>

            {info.map(({ urls: { full }}, index) =>
                <div key={`card-${index}`} className={clsx(styles.grid, 'max-w-[85vw]')}>
                    <Cards
                        url='https://nextjs.org/docs'
                        title='Documentation'
                        text='Find in-depth information about Next.js features and API.'
                        full={full}
                        
                    />

                </div>
            )}
        </div>
    )
}

export function Cards({ url, title, text, full, key }) {

    return (
        <a
            href={url}
            className={clsx(styles.card, 'group relative overflow-hidden ')}
            key={key}
        >
            <div className='absolute w-full h-full' >
                <img src={full} width={300} height={300} />
            </div>

            <div className='opacity-0 group-hover:transition-opacity duration-300 ease-in-out group-hover:opacity-100 relative p-5'>
                <h2>{title} &rarr; </h2>
                <p>{text}</p>
            </div>


            {/*<div className={clsx(styles.backgroundImage, 'group-hover:opacity-75 group-hover:transition-opacity duration-300 ease-in-out')}/>*/}
        </a>
    )
}

