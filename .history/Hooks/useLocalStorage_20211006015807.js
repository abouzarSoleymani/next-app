import WINDOW from '../utils/window'

const useLocalStorage = (key) => {
  const getValue = () => {
    return window.localStorage.getItem(key)
  }
}
export default useLocalStorage
