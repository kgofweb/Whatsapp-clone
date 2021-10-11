import useAvatar from '../customHook/useAvatar'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
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

import db from '../firebase/firebase'
import { useStateValue } from '../stateProvider/StateProvider'

// Utilisation pour la timestamp
import firebase from 'firebase'

const Chat = () => {
  const seed = useAvatar('')
  // const [seed, setSeed] = useState('')
  const [input, setInput] = useState('')
  const [roomName, setRoomName] = useState('')
  // Renvoie un objet de paires clé/valeur de paramètres d'URL.
  const { roomId } = useParams()
  // For messages
  const [messages, setMessages] = useState([])
  const [{ user }, dispatch] = useStateValue()

  // Faire le lien avec la sidebar
  useEffect(() => {
    if(roomId) {
      db.collection('rooms').doc(roomId).onSnapshot(snapshot => setRoomName(snapshot.data().name))

      // Set message
      db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp', 'asc').onSnapshot(snapshot => 
        setMessages(snapshot.docs.map(doc => doc.data()))
      )
    }
  }, [roomId])

  // useEffect(() => {
  //   setSeed(Math.floor(Math.random() * 1000))
  // }, [roomId])

  // Send message
  const sendMessage = (e) => {
    e.preventDefault();

    db.collection('rooms').doc(roomId).collection('messages').add({
      message: input,
      // displayName vient de google authentication
      name: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })

    setInput('');
  }
  
  return (
    <ChatStyled>
      <ChatHeader>
        <Avatar src={`https://joeschmoe.io/api/v1/${seed}`} />

        <ChatHeaderInfo>
          <h3>{roomName}</h3>
          <p>
            Last seen{' '}
            {new Date(
              messages[messages.length - 1]?.timestamp?.toDate()
            ).toUTCString()}
          </p>
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
        {messages.map((message, key) => (
          <ChatMessage key={key} className={`${ message.name === user.displayName && 'chat__reciever'}`}>
            <ChatName>{message.name}</ChatName>
              {message.message}
            <ChatTimesTamp>{new Date(message.timestamp?.toDate()).toUTCString()}</ChatTimesTamp>
          </ChatMessage>
        ))}
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