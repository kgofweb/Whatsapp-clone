import { useState, useEffect } from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import { 
  AttachFile, 
  InsertEmoticon,
  Mic,
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
  ChatTimesTamp,
  ChatFooter
} from "./ChatStyle.styled"

const Chat = () => {
  const [input, setInput] = useState('')
  const [seed, setSeed] = useState('')

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 1000))
  }, [])

  // Send message
  const sendMessage = (e) => {
    e.preventDefault();

    console.log('Message sended', input);

    setInput('');
  }
  
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

      <ChatFooter>
        <IconButton>
          <InsertEmoticon />
        </IconButton>
        <form>
          <input 
            type="text" 
            placeholder='Type a message...' 
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <button 
            type='submit'
            onClick={sendMessage}
            >Send a message
          </button>
        </form>
        <IconButton>
          <Mic />
        </IconButton>
      </ChatFooter>
    </ChatStyled>
  )
}

export default Chat
