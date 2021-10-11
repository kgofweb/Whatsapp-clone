import { useState, useEffect } from "react"
import useAvatar from "../customHook/useAvatar"
import { Avatar } from "@material-ui/core"
import { 
  SidebarChatInnerStyled, 
  SidebarChatInfo,
} from "./SidebarChat.styled"

import db from '../firebase/firebase'
import { Link } from 'react-router-dom'

const SidebarChar = ({ id, name, addNewChat }) => {
  const [messages, setMessages] = useState('')
  const seed = useAvatar('')

  useEffect(() => {
    if (id) {
      db.collection('rooms')
      .doc(id)
      .collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => 
        setMessages(snapshot.docs.map(doc => doc.data()))  
      )
    }
  }, [id])

  // useEffect(() => {
  //   setSeed(Math.floor(Math.random() * 1000))
  // }, [])

  const createChat = () => {
    const roomName = prompt('Please enter name for chat room')

    if(roomName) {
      // Gestion de base de donée
      db.collection('rooms').add({
        name: roomName
      })
    }
  }
  

  return !addNewChat ? (
    <Link
      to={`/rooms/${id}`}
      style={{ textDecoration: 'none', color: '#222'  }}
      > 
      <SidebarChatInnerStyled>
        {/* <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} /> */}
        {/* <Avatar src={`https://i.pravatar.cc/150?img=${seed}`} /> */}
        <Avatar src={`https://joeschmoe.io/api/v1/${seed}`} />
        
        <SidebarChatInfo>
          <h2>{name}</h2>
          <p>{messages[0]?.message}</p>
        </SidebarChatInfo>
      </SidebarChatInnerStyled>
    </Link>
  ) : (
    <SidebarChatInnerStyled
      onClick={createChat}
    >
      <h1>Add New Chat</h1>
    </SidebarChatInnerStyled>
  )
}

export default SidebarChar
