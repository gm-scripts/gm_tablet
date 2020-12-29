
const updateClock = () => {
  let date = new Date();
  let mins = date.getMinutes();
  let hours = date.getHours();
  $("#clock").text(`${hours >= 9 ? hours : `0${hours}`}:${mins >= 9 ? mins : `0${mins}`}`)
}
setInterval(() => {
  updateClock();
}, 1000);