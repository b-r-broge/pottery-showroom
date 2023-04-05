import Head from 'next/head'
import { Roboto_Serif } from 'next/font/google'

import styles from '@/styles/Home.module.css'

import DisplayTile from '@/components/DisplayTile.tsx'

const roboto = Roboto_Serif({ subsets: [] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Pottery Showroom</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          Header
        </div>
        <div>
          Filter bar
        </div>
        <DisplayTile />
        <div className={styles.grid}>
          Footer
        </div>
      </main>
    </>
  )
}
