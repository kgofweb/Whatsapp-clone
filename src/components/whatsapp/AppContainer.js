// CSS
import { AppBody } from "./AppContainer.styled"
// Components
import Sidebar from "../sidebar/Sidebar"
import Chat from "../chat/Chat"

const AppContainer = () => {
  return (
    <AppBody>
      <Sidebar />
      <Chat />
    </AppBody>
  )
}

export default AppContainer
