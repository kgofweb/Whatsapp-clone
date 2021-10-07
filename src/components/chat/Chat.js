import { useState, useEffect } from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import { 
  AttachFile, 
  MoreVert, 
  SearchOutlined
} from '@material-ui/icons'
import { 
  ChatStyled, 
  ChatHeader,
  ChatHeaderInfo,
  ChatHeaderRight,
  ChatBody,
  ChatMessage,
  ChatName,
  ChatTimesTamp
} from "./ChatStyle.styled"

const Chat = () => {
  const [seed, setSeed] = useState('')

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 1000))
  }, [])
  
  return (
    <ChatStyled>
      <ChatHeader>
        <Avatar src={`https://joeschmoe.io/api/v1/${seed}`} />

        <ChatHeaderInfo>
          <h3>Room Name</h3>
          <p>Last seen message ....</p>
        </ChatHeaderInfo>

        <ChatHeaderRight>
          <IconButton>
            <SearchOutlined />
          </IconButton>

          <IconButton>
            <AttachFile />
          </IconButton>

          <IconButton>
            <MoreVert />
          </IconButton>
        </ChatHeaderRight>
      </ChatHeader>

      <ChatBody>
        <ChatMessage className={`${true && 'chat__reciever'}`}>
          <ChatName>Mevy Dev</ChatName>
            Hey guys, What's up ?
          <ChatTimesTamp>3:25 pm</ChatTimesTamp>
        </ChatMessage>
        <ChatMessage className={`${false && 'chat__reciever'}`}>
          <ChatName>Jonh Doe</ChatName>
            Hey gorgeous freind of Internet
          <ChatTimesTamp>3:25 pm</ChatTimesTamp>
        </ChatMessage>
        <ChatMessage className={`${false && 'chat__reciever'}`}>
          <ChatName>Jonh Doe</ChatName>
            I hope everything is cool 
          <ChatTimesTamp>3:25 pm</ChatTimesTamp>
        </ChatMessage>
      </ChatBody>

      <div className="chat-footer">

      </div>
    </ChatStyled>
  )
}

export default Chat
