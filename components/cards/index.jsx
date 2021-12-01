import styles from './Cards.module.css'
import clsx from 'clsx'
import { useQuery } from 'react-query'

export default function Body() {
    const cards_query = useQuery('CARDS', async () => await (await fetch('https://api.unsplash.com/photos/?client_id=rL_5c3JZU0epYcJVGrn1HHWpmFd_Uor1zirS2ZfHG9c')).json())
    const info = cards_query.data || []

    return (
        <div>

            {info.map(({ index, urls: { full } }) =>
                <div  className={clsx(styles.grid, 'max-w-[85vw]')}>
                    <Cards
                        url='https://nextjs.org/docs'
                        title='Documentation'
                        text='Find in-depth information about Next.js features and API.'
                        full={full}
                        key={index}
                    />

                    <Cards
                        url='https://nextjs.org/learn'
                        title='Learn'
                        text='Learn about Next.js in an interactive course with quizzes!'
                        full={full}
                        key={index}
                    />

                    <Cards
                        url='https://github.com/vercel/next.js/tree/master/examples'
                        title='Examples'
                        text='Discover and deploy boilerplate example Next.js projects.'
                        full={full}
                        key={index}
                    />

                    <Cards
                        url='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
                        title='Deploy'
                        text='Instantly deploy your Next.js site to a public URL with Vercel.'
                        full={full}
                        key={index}
                    />

                    <Cards
                        url='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
                        title='Deploy'
                        text='Instantly deploy your Next.js site to a public URL with Vercel.'
                        full={full}
                        key={index}
                    />

                    <Cards
                        url='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
                        title='Deploy'
                        text='Instantly deploy your Next.js site to a public URL with Vercel.'
                        full={full}
                        key={index}
                    />

                    <Cards
                        url='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
                        title='Deploy'
                        text='Instantly deploy your Next.js site to a public URL with Vercel.'
                        full={full}
                    />

                    <Cards
                        url='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
                        title='Deploy'
                        text='Instantly deploy your Next.js site to a public URL with Vercel.'
                        full={full}
                        key={index}
                    />
                </div>
            )}
        </div>
    )
}

export function Cards({ url, title, text, full }) {

    return (
        <a
            href={url}
            className={clsx(styles.card, 'group')}
        >
            <div>
                <img src={full} width={300} height={300} />
                <div className='opacity-0 group-hover:transition-opacity duration-300 ease-in-out group-hover:opacity-100 relative'>
                    <h2>{title} &rarr; </h2>
                    <p>{text}</p>
                </div>
            </div>

            {/*<div className={clsx(styles.backgroundImage, 'group-hover:opacity-75 group-hover:transition-opacity duration-300 ease-in-out')}/>*/}
        </a>
    )
}

