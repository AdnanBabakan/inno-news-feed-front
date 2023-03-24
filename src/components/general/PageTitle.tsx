import React from 'react'

import classNames from 'classnames'

export default function PageTitle(props: React.PropsWithChildren): JSX.Element {
  const { className } = props

  const classes = classNames(['text-3xl', className])

  return <div className={classes}>
    { props.children }
  </div>
}