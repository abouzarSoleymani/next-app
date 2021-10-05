if (process.browser) {
  WINDOW = window
} else {
  WINDOW = {
    document: {
      location: {},
    },
    localStorage: {},
  }
}

export default WINDOW
