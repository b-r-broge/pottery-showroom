import Image from 'next/image';
import styles from '@/styles/Home.module.css';

import { item } from '@/types';

export default function DisplayTile( { piece }: {piece: item} ) {
  const src = `/${piece.photoRoot}/1.jpg`;
  const gif = `/${piece.photoRoot}/exportGif.gif`;
  const alt = `A piece of pottery that is a ${piece.type}, that is primarily glazed in ${piece.primaryColor}${piece.blend ? ` with a ${piece.blend} of ${piece.secondaryColor}.` : '.'}`;

  return (
    <div className={styles.card}>
      <h2>{piece.id}</h2>
      <Image
        className='piece-pic'
        src={src}
        width={250}
        height={250}
        alt={alt}
        unoptimized={true}
        onMouseOver={e => (e.currentTarget.src = gif)}
        onMouseOut={e => (e.currentTarget.src = src)}
        />
    </div>
  )
}