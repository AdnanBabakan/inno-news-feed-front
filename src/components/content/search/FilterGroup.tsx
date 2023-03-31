import React from 'react'
import SearchBar from '@/components/content/search/SearchBar'
import { DatePicker } from '@mui/x-date-pickers'
import Publishers from '@/components/content/search/Publishers'

export default function FilterGroup(props: React.ComponentProps<any>): JSX.Element {
  const {
    publisherValue,
    queryValue,
    afterValue,
    beforeValue,
    onPublisherChange,
    onQueryChange,
    onAfterChange,
    onBeforeChange,
    className
  } = props

  return <div className={className}>
    <Publishers defaultValue={publisherValue} onChange={onPublisherChange} />
    <SearchBar defaultValue={queryValue} onChange={onQueryChange} className='mb-4' />
    <div className='grid grid-cols-2 gap-1'>
      <DatePicker label='After date' defaultValue={afterValue} onChange={onAfterChange} size='small' />
      <DatePicker label='Before date' defaultValue={beforeValue} onChange={onBeforeChange} />
    </div>
  </div>
}