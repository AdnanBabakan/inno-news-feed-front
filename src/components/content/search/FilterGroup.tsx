import React from 'react'
import SearchBar from '@/components/content/search/SearchBar'
import { DatePicker } from '@mui/x-date-pickers'

export default function FilterGroup(props: React.ComponentProps<any>): JSX.Element {
  const { onQueryChange, onAfterChange, onBeforeChange, className } = props

  return <div className={className}>
    <SearchBar onChange={onQueryChange} />
    <div className='grid grid-cols-2 gap-1'>
      <DatePicker label='After date' onChange={onAfterChange} />
      <DatePicker label='Before date' onChange={onBeforeChange} />
    </div>
  </div>
}