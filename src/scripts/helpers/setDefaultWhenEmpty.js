
const setDefaultWhenEmpty = (event, callback) => {
  if (event.target.value.trim() === '') {
    callback();
  }
}

export default setDefaultWhenEmpty;