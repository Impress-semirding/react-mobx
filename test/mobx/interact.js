var mobx = require('mobx');

const { observable, computed, intercept }  = mobx;

const theme = observable({
  backgroundColor: "#ffffff"
})

intercept(theme, "backgroundColor", change => {
  if (!change.newValue) {
    // ignore attempts to unset the background color
    return null;   
  }
  if (change.newValue.length === 6) {
    // correct missing '#' prefix
    change.newValue = '#' + change.newValue;
    console.log(change);
    return change;   
  }
  if (change.newValue.length === 7) {
      // this must be a properly formatted color cd gode!
      return change;
  }
  throw new Error("This doesn't like a color at all: " + change.newValue);
})

theme.backgroundColor = 'rrrrrr';