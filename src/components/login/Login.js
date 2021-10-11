import { Button } from '@material-ui/core'
import { LoginStyled, LoginContainer } from './LoginStyle.styled'

import { auth, provider } from '../firebase/firebase'
import { useStateValue } from '../stateProvider/StateProvider'
import { actionTypes } from '../reducer/reducer'

const Login = () => {
  // const [{ }, dispatch] = useStateValue()
  const [user, dispatch] = useStateValue()

  const signIn = () => {
    // auth return a promesse
    auth.signInWithPopup(provider)
      .then(result => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user
        })
      })
      .catch(error => alert(error.message))
  }

  return (
    <LoginStyled>
      <LoginContainer>
        {/* Whatsapp logo */}
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp logo" />

        <div className="login-text">
          <h3>Sign in to WhatsApp</h3>
        </div>

        <Button onClick={signIn}>
          Sign In with google
        </Button>
      </LoginContainer>
    </LoginStyled>
  )
}

export default Login
