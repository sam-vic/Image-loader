import Image from 'next/image'
import Header from '../components/header'
import Body from '../components/cards'

import styles from '../styles/Home.module.css'
import clsx from 'clsx'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header className='p-[30px] block relative h-[30px]' />
      <main className={clsx(styles.main, 'pt-[30px]')}>
        <h1 className={styles.title}>
          The <a href="https://nextjs.org" className='text-[100px]'>Gallery</a>
        </h1>
        <Body />
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
