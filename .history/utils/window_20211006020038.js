let WINDOW = {}
if (process.browser) {
  WINDOW = window
} else {
  WINDOW = {
    document: {
      location: {},
    },
    localStorage: {
      getItem: () => {}
    },
  }
}

export default WINDOW
