import { AppBody } from "./AppContainer.styled"
import Sidebar from "../sidebar/Sidebar"
import Chat from "../chat/Chat"
import { BrowserRouter as 
  Router, 
  Route, 
  Switch
} from 'react-router-dom'
// import { useState } from "react"
import Login from "../login/Login"
import { useStateValue } from "../stateProvider/StateProvider"

const AppContainer = () => {
  // const [user, setUsers] = useState(null)
  // const [{ user }, dispatch] = useStateValue()
  const [user, dispatch] = useStateValue()

  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <AppBody>
          <Router>
            <Sidebar />
            <Switch>
              <Route path='/rooms/:roomId'>
                <Chat />
              </Route>
              <Route path='/'>
                <Chat />
              </Route>
            </Switch>
          </Router>
        </AppBody>
      )}
    </>
  )
}

export default AppContainer
