if(process.browser) {
  WINDOW = window;
} else {
  const WINDOW = {
    document: {
      location: {},
    },
    localStorage: {},
  }
}


export default WINDOW
