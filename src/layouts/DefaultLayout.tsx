import React from 'react'

import styles from './DefaultLayout.module.scss'

export default function DefaultLayout(props: React.PropsWithChildren): JSX.Element {
  const { children } = props

  return <div id={styles.mainAppContainer}>
    {children}
  </div>
}