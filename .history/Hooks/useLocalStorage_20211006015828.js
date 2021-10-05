import WINDOW from '../utils/window'

const useLocalStorage = (key) => {
  const getValue = () => {
    return window.localStorage.getItem(key)
  const setValue = () => window.localStorage.setItem(key)
}
export default useLocalStorage
