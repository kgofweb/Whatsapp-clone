import { useState, useEffect } from "react"
import { 
  SidebarStyled, 
  SidebarHeader,
  SidebarHeaderRight,
  SidebarSearch,
  SidebarSearchContainer,
  SidebarChatStyled
} from "./Sidebar.styled"
import { Avatar, IconButton } from '@material-ui/core'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { SearchOutlined } from '@material-ui/icons'
import SidebarChat from "../sidebarChat/SidebarChat"

import db from '../firebase/firebase'
import { useStateValue } from "../stateProvider/StateProvider"

const Sidebar = () => {
  const [rooms, setRooms] = useState([])
  const [{ user }, dispatch] = useStateValue()

  useEffect(() => {
    const unsubscribe = db.collection('rooms').onSnapshot(snapshot => (
      setRooms(snapshot.docs.map(doc => ({
        // Rooms object (id and data)
        id: doc.id,
        data: doc.data(),
      })))
    ))

    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <SidebarStyled>
      <SidebarHeader>
        <Avatar src={user?.photoURL} />
        <SidebarHeaderRight>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>

          <IconButton>
            <ChatIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </SidebarHeaderRight>
      </SidebarHeader>

      <SidebarSearch>
        <SidebarSearchContainer>
          <SearchOutlined />
          <input type="text" placeholder='Search or start a new chat'/>
        </SidebarSearchContainer>
      </SidebarSearch>

      <SidebarChatStyled>
        <SidebarChat addNewChat />
        {rooms.map(room => (
          <SidebarChat 
            key={room.id} 
            // Les passer en props dans SidebarChat
            id={room.id}
            name={room.data.name}
          />
        ))}
      </SidebarChatStyled>
    </SidebarStyled>
  )
}

export default Sidebar
