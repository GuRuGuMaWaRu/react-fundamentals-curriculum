function getDate(utcSeconds) {
  const today = new Date();
  const options = {weekday: 'long', month: 'short', day: 'numeric'};

  today.setTime(utcSeconds * 1000);
  return today.toLocaleDateString('en-US', options);
}

module.exports = {
  getDate: getDate
}
