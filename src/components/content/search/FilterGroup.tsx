import React from 'react'
import SearchBar from '@/components/content/search/SearchBar'
import { DatePicker } from '@mui/x-date-pickers'
import Publishers from '@/components/content/search/Publishers'

export default function FilterGroup(props: React.ComponentProps<any>): JSX.Element {
  const { onPublisherChange, onQueryChange, onAfterChange, onBeforeChange, className } = props

  return <div className={className}>
    <Publishers onChange={onPublisherChange} />
    <SearchBar onChange={onQueryChange} className='mb-2' />
    <div className='grid grid-cols-2 gap-1'>
      <DatePicker label='After date' onChange={onAfterChange} size='small' />
      <DatePicker label='Before date' onChange={onBeforeChange} />
    </div>
  </div>
}