import React from 'react'

import classNames from 'classnames'

export default function PageTitle(props: React.PropsWithChildren): JSX.Element {
  const { className } = props

  return <div className={classNames(['text-3xl', className])}>
    { props.children }
  </div>
}