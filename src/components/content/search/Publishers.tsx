import usePublishers from '@/apis/publishers'
import { useEffect, useState } from 'react'
import { Autocomplete, Chip, TextField } from '@mui/material'

export default function Publishers(props: React.ComponentProps<any>): JSX.Element {
  const { defaultValue, onChange, className } = props

  const { publishers, getPublishers, selectedPublishers, setSelectedPublishers, selectPublisher, removePublisher } = usePublishers()

  useEffect(() => {
    setSelectedPublishers(defaultValue)
    getPublishers()
  }, [])

  const [value, setValue] = useState(null)

  const onPublisherSelect = async (e, value) => {
    await selectPublisher(value)
    setValue(null)
    const temp = [...selectedPublishers]
    if(value !== null && !temp.includes(value)) temp.push(value)
    onChange(temp)
  }

  const onPublisherRemove = (index) => {
    removePublisher(index)
    onChange(selectedPublishers.filter((_, i) => i !== index))
  }

  return <div className={className}>
    <Autocomplete
      renderInput={(params) => <TextField {...params} label='Publisher' />}
      options={publishers}
      onChange={onPublisherSelect}
      value={value}
    />
    {
      selectedPublishers.length > 0 ? <div className='flex flex-nowrap overflow-x-auto pb-3 mt-2'>
        {
          selectedPublishers.map((v, index) => {
            return <Chip label={v} key={v} className='mr-1' onDelete={() => onPublisherRemove(index)} />
          })
        }
      </div> : <div className='mb-4' />
    }
  </div>
}