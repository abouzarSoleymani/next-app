import WINDOW from '../utils/window'

const useLocalStorage = (key) => {
  const getValue = () => window.localStorage.getItem(key)
  const setValue = () => window.localStorage.setItem(key, value)
}
export default useLocalStorage
