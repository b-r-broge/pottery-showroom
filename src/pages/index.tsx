import Head from 'next/head';
import { Roboto_Serif } from 'next/font/google';
import { inventory, item } from '@/types';
import inv from '@/inventory';
import styles from '@/styles/Home.module.css';

import DisplayTile from '@/components/DisplayTile';

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
        <div className={styles.grid}>
          { inv.inventory.map( item => {
            return (
              <DisplayTile piece={item} key={item.id} />
            )
          })}
        </div>
        <div className="footer">
          Footer
        </div>
      </main>
    </>
  )
}
