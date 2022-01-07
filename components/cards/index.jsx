import styles from './Cards.module.css'
import clsx from 'clsx'
import { useQuery } from 'react-query'
import _ from 'lodash'

const isDescToLong = desc => {
    const words = desc.trim().split(' ')

    return words.length > 10
}

export default function Body() {
    const { data: info = [] } = useQuery('CARDS', async () => await (await fetch('https://api.unsplash.com/photos/?client_id=rL_5c3JZU0epYcJVGrn1HHWpmFd_Uor1zirS2ZfHG9c&per_page=20&page=4')).json())

    console.log(info)

    return (
        <div className='flex flex-wrap justify-center'>
            {info.map(({ urls: { regular }, user: { first_name, portfolio_url }, alt_description, description }, index) => {
                const desc = description || alt_description || 'No Discription Available'
                return (
                    <div key={`card-${index}`} className='flex '>
                        <Cards
                            url={portfolio_url}
                            title='Documentation'
                            text={isDescToLong(desc) ? 'Click Through To Read More' : desc}
                            full={regular}
                            first_name={first_name}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export function Cards({ url, first_name, text, full, key }) {
    return (
        <a
            href={url}
            className={clsx(styles.card, 'group relative overflow-hidden min-w-[300px] min-h-[200px]')}
            key={key}
            target='_blank'
            rel="noopener"
        >
            <div className='block absolute w-full h-full group-hover:opacity-40 group-hover:scale-110 transition duration-500 ease-in-out' >
                <img src={full} width={500} height={500} className='object-cover h-full w-full object-center' />
            </div>

            <div className='opacity-0 group-hover:transition-opacity duration-300 ease-in-out group-hover:opacity-100 relative p-5'>
                <h2>{_.startCase(first_name)}'s Pictures &rarr; </h2>
                <p className='max-w-[250px] h-[100px] line-clamp-3 '>{_.startCase(text)}</p>
            </div>
        </a>
    )
}

