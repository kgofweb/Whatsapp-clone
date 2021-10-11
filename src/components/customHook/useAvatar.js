import { useState, useEffect } from "react"

const useAvatar = () => {
  const [state, setState] = useState('')

  useEffect(() => {
    setState(Math.floor(Math.random() * 1000))
  }, [])

  return state
}

export default useAvatar
