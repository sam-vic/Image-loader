import Image from 'next/image'
import Header from '../components/header'
import Body from '../components/cards'
import { useInfiniteQuery } from 'react-query'

import styles from '../styles/Home.module.css'
import clsx from 'clsx'
import LoadMore from '../components/buttons/loadMoreButton'
import { useMemo } from 'react'

export default function Home() {
  const { data, fetchNextPage } = useInfiniteQuery(
    'CARDS',
    async ({ pageParam = 1 }) => ({ pageParam, pics: await (await fetch(`https://api.unsplash.com/photos/?client_id=rL_5c3JZU0epYcJVGrn1HHWpmFd_Uor1zirS2ZfHG9c&per_page=20&page=${pageParam}`)).json() }),
    {
      getNextPageParam: (lastPage) => lastPage.pageParam + 1
    }
  )

  const reduced_pics = useMemo(
    () => data?.pages.reduce(
      (newValue, { pics }) => {
        newValue.push(...pics)

        return newValue
      },
      [] // new value
    ),
    [data?.pages]
  )

      console.log(reduced_pics)

  return (
    <div className={styles.container}>
      <Header className='p-[30px] block relative h-[30px]' />
      <main className={clsx(styles.main, 'pt-[30px]')}>
        <h1 className={styles.title}>
          The <a href="https://nextjs.org" className='text-[100px]'>Peanut Gallery</a>
        </h1>
        <Body data={reduced_pics} />
        <LoadMore onClick={() => fetchNextPage()} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}


[
  { pageParam: 1, pics: [] },
  { pageParam: 1, pics: [] },
  { pageParam: 1, pics: [] }
]