import WINDOW from '../utils/window'

const useLocalStorage = (key) => {
  const getValue = () => window.localStorage.getItem(key)
  const setValue = (value) => window.localStorage.setItem(key, value)
  const value = getValue(value)
  return [value, setValue]
}
export default useLocalStorage
