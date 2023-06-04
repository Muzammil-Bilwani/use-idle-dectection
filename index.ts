import { useEffect, useState } from "react"

const useIdleDetection = (idleTimeout = 3000) => {
  const [isIdle, setIsIdle] = useState(false)

  let timeoutId: number

  const resetTimer = () => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(setIsIdle, idleTimeout, true)
  }

  const handleUserActivity = () => {
    setIsIdle(false)
    resetTimer()
  }

  useEffect(() => {
    resetTimer()

    document.addEventListener("mousemove", handleUserActivity)
    document.addEventListener("keydown", handleUserActivity)
    document.addEventListener("touchstart", handleUserActivity)

    return () => {
      clearTimeout(timeoutId)
      document.removeEventListener("mousemove", handleUserActivity)
      document.removeEventListener("keydown", handleUserActivity)
      document.removeEventListener("touchstart", handleUserActivity)
    }
  }, [])

  return isIdle
}

export default useIdleDetection
