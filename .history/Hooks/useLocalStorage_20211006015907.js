import WINDOW from '../utils/window'

const useLocalStorage = (key) => {
  const getValue = () => window.localStorage.getItem(key)
  const setValue = (value) => window.localStorage.setItem(key, value)
  return []
}
export default useLocalStorage
