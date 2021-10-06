let WINDOW = {}
if (process.browser) {
  WINDOW = window
} else {
  WINDOW = {
    document: {
      location: {},
    },
    localStorage: {
      get
    },
  }
}

export default WINDOW