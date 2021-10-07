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

const Sidebar = () => {
  return (
    <SidebarStyled>
      <SidebarHeader>
        <Avatar />
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
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </SidebarChatStyled>
    </SidebarStyled>
  )
}

export default Sidebar
