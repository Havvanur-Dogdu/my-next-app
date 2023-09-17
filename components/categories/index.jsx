import React from 'react'

import Link from 'next/link'
import styles from './styles.module.css'

const Categories = ({ categories }) => {

  const arrLength = categories.length
  const firstCategoryId = categories[0].id
  const lastCategoryId = categories[arrLength -1].id
  const tempCategories = categories

    return (
        <div className={styles.categories}>
          {
            tempCategories[0].id === firstCategoryId && <Link href={`/`}>BACK</Link>
          }
          {tempCategories.slice(0,5).map((category) => (
            <Link
              key={category.id}
              className={styles.category}
              href={`/${category.id}`}
            >
              <div className={styles.name}>{category.name}</div>
            </Link>
          ))}
           {
            tempCategories[arrLength -1].id === lastCategoryId && <Link href={`/`}>NEXT</Link>
            }
        </div>
      );
}

export default Categories