import { useState, useEffect } from "react"
import { Avatar } from "@material-ui/core"
import { 
  SidebarChatInnerStyled, 
  SidebarChatInfo 
} from "./SidebarChat.styled"

const SidebarChar = ({ id, name, addNewChat }) => {
  const [seed, setSeed] = useState('')

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 1000))
  }, [])

  const createChat = () => {
    const roomName = prompt('Please enter name for chat')

    if(roomName) {
      // Gestion de base de donée
      
    }
  }

  return !addNewChat ? (
    <SidebarChatInnerStyled>
      {/* <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} /> */}
      {/* <Avatar src={`https://i.pravatar.cc/150?img=${seed}`} /> */}
      <Avatar src={`https://joeschmoe.io/api/v1/${seed}`} />
      <SidebarChatInfo>
        <h2>{name}</h2>
        <p>Last message...</p>
      </SidebarChatInfo>
    </SidebarChatInnerStyled>
  ) : (
    <SidebarChatInnerStyled
      onClick={createChat}
    >
      <h1>Add New Chat</h1>
    </SidebarChatInnerStyled>
  )
}

export default SidebarChar
