
export default function updateClock() {
  let date = new Date();
  let mins = date.getMinutes();
  let hours = date.getHours();
  $("#clock").text(`${hours >= 10 ? hours : `0${hours}`}:${mins >= 10 ? mins : `0${mins}`}`)
}