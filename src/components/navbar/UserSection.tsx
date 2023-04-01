import { useContext, useState } from 'react'
import { GlobalContext } from '@/contexts/GlobalContext'
import { Button, Divider, ListItem, ListItemIcon, ListItemText, Menu, MenuItem, MenuList } from '@mui/material'
import {
  AccountCircleTwoTone as AccountCircleTwoToneIcon,
  DynamicFeedTwoTone as DynamicFeedTwoToneIcon,
  SettingsTwoTone as SettingsTwoToneIcon,
  LogoutTwoTone as LogoutTwoToneIcon,
} from '@mui/icons-material'
import { useUser } from '@/apis/user'
import Link from 'next/link'

export default function UserSection(): JSX.Element {
  const global = useContext(GlobalContext)

  const user = useUser()

  const [anchorEl, setAnchorEl] = useState(null)

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const menuItems = [
    {
      icon: <DynamicFeedTwoToneIcon />,
      text: 'My Feed',
      link: '/my-feed'
    }
  ]

  return global.user ? <div>
    <Button startIcon={<AccountCircleTwoToneIcon />} variant='outlined' size='small' onClick={handleOpen}>
      Hi, {global.user.first_name}
    </Button>
    <Menu open={Boolean(anchorEl)} onClose={handleClose} anchorEl={anchorEl}>
      <MenuList className='py-0'>
        {
          menuItems.map(item => {
            return <Link href={item.link} key={item.text}>
              <MenuItem key={item.text}>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText>{item.text}</ListItemText>
              </MenuItem>
            </Link>
          })
        }
        <Divider />
        <MenuItem onClick={user.logout}>
          <ListItemIcon>
            <LogoutTwoToneIcon />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </MenuItem>
      </MenuList>
    </Menu>
  </div> : <></>
}
