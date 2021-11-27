import Image from 'next/image'
import Header from '../components/header'

import styles from '../styles/Home.module.css'
import clsx from 'clsx'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header className='p-[30px] block relative h-[30px]' />
      <main className={clsx(styles.main, 'pt-[3Itaffy960px]')}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Hernando Island</a>
        </h1>

        <div className={clsx(styles.grid, 'max-w-[85vw]')}>
          <Cards
            url='https://nextjs.org/docs'
            title='Documentation'
            text='Find in-depth information about Next.js features and API.'
          />

          <Cards
            url='https://nextjs.org/learn'
            title='Learn'
            text='Learn about Next.js in an interactive course with quizzes!'
          />

          <Cards
            url='https://github.com/vercel/next.js/tree/master/examples'
            title='Examples'
            text='Discover and deploy boilerplate example Next.js projects.'
          />

          <Cards
            url='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            title='Deploy'
            text='Instantly deploy your Next.js site to a public URL with Vercel.'
          />

          <Cards
            url='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            title='Deploy'
            text='Instantly deploy your Next.js site to a public URL with Vercel.'
          />

          <Cards
            url='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            title='Deploy'
            text='Instantly deploy your Next.js site to a public URL with Vercel.'
          />

          <Cards
            url='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            title='Deploy'
            text='Instantly deploy your Next.js site to a public URL with Vercel.'
          />

          <Cards
            url='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            title='Deploy'
            text='Instantly deploy your Next.js site to a public URL with Vercel.'
          />
        </div>
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

function Cards({ url, title, text }) {
  return (
    <a
      href={url}
      className={clsx(styles.card,'group')}
    >
      <div className={clsx(styles.backgroundImage, 'group-hover:opacity-75 group-hover:transition-opacity duration-300 ease-in-out')}/>
      <div className='opacity-0 group-hover:transition-opacity duration-300 ease-in-out group-hover:opacity-100 relative'>
        <h2>{title} &rarr; </h2>
        <p>{text}</p>
      </div>
    </a>
  )
}